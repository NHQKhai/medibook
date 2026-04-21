/* MediBook - Logic render và tương tác chung cho website */

// Render grid chuyên khoa
function renderSpecialties(containerId, limit) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const list = (typeof limit === 'number') ? SPECIALTIES.slice(0, limit) : SPECIALTIES;
    el.innerHTML = list.map((s,i) => `
        <a href="specialty.html?slug=${s.slug}" class="spec-card" style="--i:${i}">
            <img src="${s.img}" alt="${s.name}" loading="lazy">
            <h4>${s.name}</h4>
        </a>
    `).join('');
}

// Render card bác sĩ
function renderDoctors(containerId, limit, filterSpec, filterName) {
    const el = document.getElementById(containerId);
    if (!el) return;
    let list = DOCTORS.slice();
    if (filterSpec) list = list.filter(d => d.specSlug === filterSpec);
    if (filterName) {
        const q = filterName.toLowerCase();
        list = list.filter(d => d.name.toLowerCase().includes(q) || d.spec.toLowerCase().includes(q));
    }
    if (typeof limit === 'number') list = list.slice(0, limit);

    if (list.length === 0) {
        el.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#718096;padding:40px">Không tìm thấy bác sĩ phù hợp.</p>';
        return;
    }

    el.innerHTML = list.map((d,i) => `
        <div class="doc-card" style="--i:${i}">
            <img class="doc-img" src="${d.img}" alt="${d.name}" onerror="this.src='images/doctors/doctor1.png'" onclick="openDoctorProfile(${d.id})" style="cursor:pointer">
            <div class="doc-info">
                <h4 style="cursor:pointer" onclick="openDoctorProfile(${d.id})">${d.name}</h4>
                <div class="doc-spec">${d.spec}</div>
                <p style="font-size:13px;color:#718096;margin-bottom:6px">${d.hospital}</p>
                <div class="doc-meta">
                    <span>${d.exp}</span>
                    <span class="doc-rating">★ ${d.rating} (${d.reviews})</span>
                </div>
                <div class="doc-meta" style="margin-bottom:12px">
                    <span>Phí khám</span>
                    <strong style="color:#00a85a">${d.fee}</strong>
                </div>
                <div style="display:flex;gap:6px">
                    <button type="button" class="btn btn-outline" style="flex:1;padding:10px 8px;font-size:13px" onclick="openDoctorProfile(${d.id})">Xem hồ sơ</button>
                    <a href="booking.html?doctor=${d.id}" class="btn btn-primary" style="flex:1;padding:10px 8px;font-size:13px">Đặt lịch</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Render bài viết
function renderArticles(containerId, limit) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const list = (typeof limit === 'number') ? ARTICLES.slice(0, limit) : ARTICLES;
    el.innerHTML = list.map((a,i) => `
        <a href="article.html?id=${a.id}" class="article-card" style="--i:${i}">
            <img src="${a.img}" alt="${a.title}" onerror="this.src='images/news/n1.png'">
            <div class="article-body">
                <span class="tag">${a.tag}</span>
                <h3>${a.title}</h3>
                <p style="font-size:13px;color:#718096;margin:8px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${a.excerpt||''}</p>
                <div class="meta">${a.date} • ${a.author}</div>
            </div>
        </a>
    `).join('');
}

// Render testimonials
function renderTestimonials(containerId) {
    const el = document.getElementById(containerId);
    if (!el || typeof TESTIMONIALS === 'undefined') return;
    el.innerHTML = TESTIMONIALS.map((t,i) => `
        <div class="testi-card" style="--i:${i}">
            <div class="testi-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
            <p class="testi-text">${t.text}</p>
            <div class="testi-author">
                <img src="${t.img}" alt="${t.name}" onerror="this.style.background='#e6f7ee'">
                <div><strong>${t.name}</strong><span>${t.role}</span></div>
            </div>
        </div>
    `).join('');
}

// Render sponsors marquee (duplicate for seamless loop)
function renderSponsors(containerId) {
    const el = document.getElementById(containerId);
    if (!el || typeof SPONSORS === 'undefined') return;
    el.innerHTML = SPONSORS.map(s => `<div class="carousel-item sp-item"><img src="${s.logo}" alt="${s.name}" title="${s.name}" onerror="this.style.display='none'"><span class="sp-name">${s.name}</span></div>`).join('');
}

/* ========== CAROUSEL HELPER ========== */
// Universal carousel: auto-scroll right→left + prev/next buttons
function initCarousel(rootSelector, opts={}) {
    const root = typeof rootSelector === 'string' ? document.querySelector(rootSelector) : rootSelector;
    if (!root) return;
    const track = root.querySelector('.carousel-track');
    const prev = root.querySelector('.carousel-btn.prev');
    const next = root.querySelector('.carousel-btn.next');
    if (!track) return;
    const speed = opts.speed || 0.5; // px per frame
    const stepPx = opts.step || 320;

    let pos = 0;
    let paused = false;
    let raf;

    // Check if items actually overflow the container; if not, don't clone and don't animate.
    // This prevents visual duplication when filter results are few (e.g. 1-2 doctors).
    const original = Array.from(track.children);
    const contentWidth = original.reduce((w, c) => w + c.getBoundingClientRect().width, 0);
    const containerWidth = root.clientWidth;
    const needsLoop = contentWidth > containerWidth + 20;

    if (!needsLoop) {
        // Center items, no clones, no autoplay, disable nav buttons
        track.style.transform = 'translateX(0)';
        track.style.justifyContent = 'center';
        track.style.flexWrap = 'wrap';
        if (prev) prev.style.display = 'none';
        if (next) next.style.display = 'none';
        return;
    }

    // Duplicate items for infinite loop
    original.forEach(c => track.appendChild(c.cloneNode(true)));
    const halfWidth = () => track.scrollWidth / 2;

    const tick = () => {
        if (!paused) {
            pos -= speed;
            if (-pos >= halfWidth()) pos = 0;
            track.style.transform = `translateX(${pos}px)`;
        }
        raf = requestAnimationFrame(tick);
    };
    tick();

    root.addEventListener('mouseenter', () => paused = true);
    root.addEventListener('mouseleave', () => paused = false);

    if (prev) prev.addEventListener('click', () => {
        pos += stepPx;
        if (pos > 0) pos -= halfWidth();
        track.style.transition = 'transform .4s ease';
        track.style.transform = `translateX(${pos}px)`;
        setTimeout(() => track.style.transition = '', 420);
    });
    if (next) next.addEventListener('click', () => {
        pos -= stepPx;
        if (-pos >= halfWidth()) pos += halfWidth();
        track.style.transition = 'transform .4s ease';
        track.style.transform = `translateX(${pos}px)`;
        setTimeout(() => track.style.transition = '', 420);
    });
}

// Render featured doctors carousel
function renderDoctorsCarousel(containerId, list) {
    const el = document.getElementById(containerId);
    if (!el) return;
    list = list || DOCTORS.slice(0, 12);
    // Reset inline styles that may have been applied by previous initCarousel() non-loop branch
    el.style.transform = '';
    el.style.justifyContent = '';
    el.style.flexWrap = '';
    if (!list.length) { el.innerHTML = '<p style="padding:20px;color:#718096">Chưa có bác sĩ cho chuyên khoa này.</p>'; return; }
    el.innerHTML = list.map(d => `
        <div class="carousel-item doc-slide">
            <div class="doc-card">
                <img class="doc-img" src="${d.img}" alt="${d.name}" onerror="this.src='images/doctors/dm1.png'" onclick="openDoctorProfile(${d.id})" style="cursor:pointer">
                <div class="doc-info">
                    <h4 style="cursor:pointer" onclick="openDoctorProfile(${d.id})">${d.name}</h4>
                    <div class="doc-spec">${d.spec}</div>
                    <p style="font-size:12px;color:#718096;margin-bottom:4px">${d.hospital}</p>
                    <div class="doc-meta"><span>${d.exp}</span><span class="doc-rating">★ ${d.rating}</span></div>
                    <div style="display:flex;gap:6px;margin-top:8px">
                        <button type="button" class="btn btn-outline" style="flex:1;padding:8px;font-size:12px" onclick="openDoctorProfile(${d.id})">Hồ sơ</button>
                        <a href="booking.html?doctor=${d.id}" class="btn btn-primary" style="flex:1;padding:8px;font-size:12px">Đặt lịch</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render testimonials carousel (4 visible, auto-scroll)
function renderTestimonialsCarousel(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = TESTIMONIALS.map(t => `
        <div class="carousel-item testi-slide">
            <div class="testi-card">
                <div class="testi-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
                <p class="testi-text">"${t.text}"</p>
                <div class="testi-author">
                    <img src="${t.img}" alt="${t.name}" onerror="this.src='images/testimonials/t1.png'">
                    <div><strong>${t.name}</strong><span>${t.role}</span></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render news carousel
function renderNewsCarousel(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = ARTICLES.map(a => `
        <div class="carousel-item news-slide">
            <a href="article.html?id=${a.id}" class="article-card">
                <img src="${a.img}" alt="${a.title}" onerror="this.src='images/news/n1.png'">
                <div class="article-body">
                    <span class="tag">${a.tag}</span>
                    <h3>${a.title}</h3>
                    <p style="font-size:13px;color:#718096;margin:8px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${a.excerpt||''}</p>
                    <div class="meta">${a.date} • ${a.author}</div>
                </div>
            </a>
        </div>
    `).join('');
}

// Render article detail page
function renderArticleDetail(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const id = parseInt(getParam('id'), 10) || 1;
    const a = ARTICLES.find(x => x.id === id) || ARTICLES[0];
    document.title = a.title + ' - MediBook';
    el.innerHTML = `
        <div class="container">
            <div class="article-content reveal">
                <span class="tag" style="display:inline-block;background:#e6f7ee;color:#00a85a;padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600">${a.tag}</span>
                <h1 style="font-size:30px;color:#0e7c5b;margin:14px 0 10px;line-height:1.3">${a.title}</h1>
                <div class="article-meta"><span>📅 ${a.date}</span><span>✍ ${a.author}</span></div>
                <img class="cover" src="${a.img}" alt="${a.title}" onerror="this.src='images/articles/article1.png'" style="margin-top:20px">
                <p style="font-size:17px;color:#555;font-style:italic;margin-bottom:18px">${a.excerpt||''}</p>
                ${a.content||''}
                <div style="margin-top:30px;padding-top:20px;border-top:1px solid #e2e8f0">
                    <a href="news.html" class="btn btn-outline">← Quay lại Tin tức</a>
                    <a href="booking.html" class="btn btn-primary" style="margin-left:8px">Đặt lịch khám ngay</a>
                </div>
            </div>
        </div>
    `;
}

// Render bệnh viện
function renderHospitals(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = HOSPITALS.map(h => `
        <div class="hosp-card">
            <img src="${h.img}" alt="${h.name}">
            <div class="hosp-body">
                <h4>${h.name}</h4>
                <p class="hosp-addr">📍 ${h.address}</p>
                <div class="hosp-meta"><span>👨‍⚕ ${h.doctors} bác sĩ</span></div>
                <div class="hosp-actions" style="display:flex;gap:6px;margin-top:10px">
                    <a href="hospital.html?id=${h.id}" class="btn btn-outline" style="flex:1;padding:10px 6px;font-size:13px">Xem chi tiết</a>
                    <a href="hospital.html?id=${h.id}#doctors" class="btn btn-primary" style="flex:1;padding:10px 6px;font-size:13px">Xem bác sĩ</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Render hospitals carousel (network of partner hospitals)
function renderHospitalsCarousel(containerId) {
    const el = document.getElementById(containerId);
    if (!el || typeof HOSPITALS === 'undefined') return;
    el.innerHTML = HOSPITALS.map(h => `
        <div class="carousel-item hosp-slide">
            <div class="hosp-card">
                <img src="${h.img}" alt="${h.name}">
                <div class="hosp-body">
                    <h4>${h.name}</h4>
                    <p class="hosp-addr">📍 ${h.address}</p>
                    <div class="hosp-meta"><span>👨‍⚕ ${h.doctors} bác sĩ</span></div>
                    <div class="hosp-actions" style="display:flex;gap:6px;margin-top:10px">
                        <a href="hospital.html?id=${h.id}" class="btn btn-outline" style="flex:1;padding:10px 6px;font-size:13px">Xem chi tiết</a>
                        <a href="hospital.html?id=${h.id}#doctors" class="btn btn-primary" style="flex:1;padding:10px 6px;font-size:13px">Xem bác sĩ</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// === DOCTOR PROFILE GENERATOR ===
// Build a rich profile object on the fly from minimal DOCTORS data
function getDoctorProfile(d) {
    if (!d) return null;
    const isFemale = d.img.includes('/df');
    const titleMatch = d.name.match(/^(BS\.?\s*CKII|BS\.?\s*CKI|ThS\.?\s*BS|PGS\.?\s*TS\.?\s*BS|TS\.?\s*BS|GS\.?\s*TS|BS|Lương y)/i);
    const academic = titleMatch ? titleMatch[0] : 'BS';
    const expYears = parseInt(d.exp, 10) || 10;
    const startYear = 2026 - expYears;
    return {
        bangCap: [
            `${academic.includes('PGS')||academic.includes('TS')?'Tiến sĩ Y học':'Bác sĩ Đa khoa'} - Đại học Y Dược TP.HCM (${startYear-6})`,
            `Chuyên khoa ${academic.includes('CKII')?'cấp II':'cấp I'} - chuyên ngành ${d.spec} (${startYear})`,
            ...(academic.includes('ThS')?['Thạc sĩ Y học - Đại học Y Hà Nội']:[]),
            ...(academic.includes('PGS')?['Phó Giáo sư Y học (2018)']:[])
        ],
        chuyenNganh: d.spec,
        linhVuc: [
            `Khám và điều trị bệnh lý ${d.spec.toLowerCase()}`,
            `Tư vấn chuyên sâu, theo dõi định kỳ ${d.spec.toLowerCase()}`,
            `Phối hợp cận lâm sàng, chỉ định điều trị nội/ngoại trú`
        ],
        chucVu: `Bác sĩ điều trị - Khoa ${d.spec} - ${d.hospital}`,
        chungChi: [
            `Chứng chỉ hành nghề khám chữa bệnh do Bộ Y tế cấp (số ${1000 + d.id*37})`,
            `Đào tạo nâng cao về ${d.spec} tại Bệnh viện Tuyến TW`,
            `Chứng chỉ siêu âm/nội soi chuyên ngành ${d.spec}`
        ],
        congTac: [
            `${startYear} - ${startYear+5}: Bác sĩ điều trị tại Bệnh viện Đa khoa Tỉnh`,
            `${startYear+5} - ${startYear+expYears-2}: Bác sĩ chính khoa ${d.spec} - ${d.hospital}`,
            `${startYear+expYears-2} - nay: Trưởng đơn vị ${d.spec} - ${d.hospital}`
        ],
        chungChiCM: [
            `Hồi sức cấp cứu cơ bản (BLS) - American Heart Association`,
            `Khoá đào tạo chuyên đề ${d.spec} - Bệnh viện Bạch Mai`,
            `Chứng chỉ Y khoa thực hành dựa trên bằng chứng (EBM)`
        ],
        hocTap: [
            `${startYear-6} - ${startYear}: Đại học Y Dược TP.HCM - chuyên ngành Y đa khoa`,
            `${startYear} - ${startYear+3}: Bác sĩ Nội trú chuyên ngành ${d.spec}`,
            `${startYear+3} - ${startYear+5}: Đào tạo lại tại Singapore / Hàn Quốc về ${d.spec}`
        ],
        toChuc: [
            `Hội Y học TP.HCM`,
            `Hội ${d.spec} Việt Nam`,
            `Hội Bác sĩ trẻ Việt Nam (YPA)`
        ]
    };
}

function openDoctorProfile(id) {
    const d = DOCTORS.find(x => x.id === id);
    if (!d) return;
    const p = getDoctorProfile(d);
    let modal = document.getElementById('doctorProfileModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'doctorProfileModal';
        modal.className = 'modal-backdrop';
        modal.addEventListener('click', e => { if (e.target === modal) closeDoctorProfile(); });
        document.body.appendChild(modal);
    }
    const sec = (title, items) => `<div class="dp-sec"><h4>${title}</h4><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
    const REVIEW_POOL = [
        {img:'images/reviews/r1.png', name:'Nguyễn Minh Tú',  role:'Bệnh nhân',     rating:5, text:'Bác sĩ rất tận tâm, giải thích cặn kẽ, thăm khám kỹ lưỡng. Tôi rất hài lòng và sẽ giới thiệu cho người thân.'},
        {img:'images/reviews/r2.png', name:'Trần Thu Hương',  role:'Khách hàng',    rating:5, text:'Phòng khám sạch sẽ, bác sĩ thân thiện, chuyên môn cao. Tư vấn rõ ràng, đơn thuốc hợp lý, chi phí minh bạch.'},
        {img:'images/reviews/r3.png', name:'Lê Hoàng Nam',    role:'Bệnh nhân',     rating:4, text:'Đặt lịch qua MediBook nhanh gọn, đến khám đúng giờ hẹn. Bác sĩ có kinh nghiệm, chẩn đoán chính xác.'},
        {img:'images/reviews/r4.png', name:'Phạm Thị Mai',    role:'Khách hàng',    rating:5, text:'Cảm ơn bác sĩ đã điều trị tận tình cho mẹ tôi. Mẹ tôi đã khỏe hơn rất nhiều sau đợt điều trị.'}
    ];
    const stars = n => '★'.repeat(n) + '☆'.repeat(5-n);
    const reviewsHtml = `
        <div class="dp-reviews">
            <h4>Nhận xét của bệnh nhân</h4>
            <div class="dp-reviews-grid">
                ${REVIEW_POOL.map(r => `
                    <div class="dp-review">
                        <div class="dp-review-head">
                            <img src="${r.img}" alt="${r.name}" onerror="this.style.display='none'">
                            <div>
                                <div class="dp-review-name">${r.name}</div>
                                <div class="dp-review-role">${r.role}</div>
                                <div class="dp-review-stars">${stars(r.rating)}</div>
                            </div>
                        </div>
                        <p>${r.text}</p>
                    </div>`).join('')}
            </div>
        </div>`;
    modal.innerHTML = `
        <div class="modal dp-modal">
            <span class="close" onclick="closeDoctorProfile()">×</span>
            <div class="dp-head">
                <img src="${d.img}" alt="${d.name}" onerror="this.src='images/doctors/dm1.png'">
                <div class="dp-meta">
                    <h2>${d.name}</h2>
                    <div class="dp-spec">${d.spec}</div>
                    <p>${d.hospital}</p>
                    <div class="dp-stats">
                        <span>★ ${d.rating} (${d.reviews} đánh giá)</span>
                        <span>${d.exp}</span>
                        <span>Phí khám: <b style="color:#00a85a">${d.fee}</b></span>
                    </div>
                    <a href="booking.html?doctor=${d.id}" class="btn btn-primary" style="margin-top:10px">Đặt lịch khám</a>
                </div>
            </div>
            <div class="dp-body">
                ${sec('Bằng cấp', p.bangCap)}
                <div class="dp-sec"><h4>Chuyên ngành</h4><p>${p.chuyenNganh}</p></div>
                ${sec('Lĩnh vực chuyên sâu', p.linhVuc)}
                <div class="dp-sec"><h4>Chức vụ</h4><p>${p.chucVu}</p></div>
                ${sec('Chứng chỉ', p.chungChi)}
                ${sec('Công tác đã kinh qua', p.congTac)}
                ${sec('Chứng chỉ chuyên môn', p.chungChiCM)}
                ${sec('Học tập', p.hocTap)}
                ${sec('Thành viên các tổ chức chuyên môn', p.toChuc)}
            </div>
            ${reviewsHtml}
        </div>`;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeDoctorProfile(){
    const m=document.getElementById('doctorProfileModal');
    if(m){m.classList.remove('show'); document.body.style.overflow='';}
}

// Render Specialty detail page (Bác sĩ + Bài viết)
function initSpecialtyPage() {
    const slug = getParam('slug');
    const s = SPECIALTIES.find(x => x.slug === slug) || SPECIALTIES[0];
    document.title = s.name + ' - MediBook';
    const head = document.getElementById('specHead');
    if (head) head.innerHTML = `
        <h1>${s.name}</h1>
        <p>${s.desc}</p>
        <div class="breadcrumb"><a href="index.html">Trang chủ</a> / <a href="specialties.html">Chuyên khoa</a> / ${s.name}</div>`;
    const docs = DOCTORS.filter(d => d.specSlug === slug);
    const grid = document.getElementById('specDocs');
    if (grid) {
        if (!docs.length) grid.innerHTML = '<p style="grid-column:1/-1;color:#718096;padding:40px;text-align:center">Hiện chưa có bác sĩ cho chuyên khoa này.</p>';
        else renderDoctors('specDocs', null, slug, '');
    }
    const arts = ARTICLES.filter(a => a.tag.toLowerCase() === s.name.toLowerCase());
    const ag = document.getElementById('specArticles');
    if (ag) {
        if (!arts.length) ag.innerHTML = '<p style="grid-column:1/-1;color:#718096;padding:40px;text-align:center">Chưa có bài viết về chuyên khoa này.</p>';
        else ag.innerHTML = arts.map(a => `
            <a href="article.html?id=${a.id}" class="article-card">
                <img src="${a.img}" alt="${a.title}">
                <div class="article-body">
                    <span class="tag">${a.tag}</span>
                    <h3>${a.title}</h3>
                    <p style="font-size:13px;color:#718096;margin:8px 0">${a.excerpt||''}</p>
                    <div class="meta">${a.date} • ${a.author}</div>
                </div>
            </a>`).join('');
    }
}

// Render Hospital detail page (Bác sĩ + Map)
function initHospitalPage() {
    const id = parseInt(getParam('id'), 10) || 1;
    const h = HOSPITALS.find(x => x.id === id) || HOSPITALS[0];
    document.title = h.name + ' - MediBook';
    const head = document.getElementById('hospHead');
    if (head) head.innerHTML = `
        <h1>${h.name}</h1>
        <p>📍 ${h.address}${h.phone?` &nbsp;|&nbsp; ☎ ${h.phone}`:''}</p>
        <div class="breadcrumb"><a href="index.html">Trang chủ</a> / <a href="hospitals.html">Bệnh viện</a> / ${h.name}</div>`;
    const cover = document.getElementById('hospCover');
    if (cover) cover.src = h.img;
    const info = document.getElementById('hospInfo');
    if (info) {
        const desc = `${h.name} là một trong những cơ sở y tế hàng đầu tại Việt Nam, quy tụ đội ngũ bác sĩ giàu kinh nghiệm và hệ thống trang thiết bị hiện đại nhập khẩu từ các nước tiên tiến. Bệnh viện cung cấp dịch vụ khám chữa bệnh đa khoa và chuyên sâu, phục vụ hàng nghìn lượt bệnh nhân mỗi ngày với phương châm "Người bệnh là trung tâm".`;
        info.innerHTML = `
            <div class="hosp-info-card">
                <h3>Giới thiệu bệnh viện</h3>
                <p>${desc}</p>
                <h3 style="margin-top:14px">Thế mạnh chuyên khoa</h3>
                <ul>
                    <li>Khoa Tim mạch & Can thiệp tim mạch</li>
                    <li>Khoa Ngoại tổng quát & Phẫu thuật nội soi</li>
                    <li>Khoa Sản - Phụ khoa & Hỗ trợ sinh sản</li>
                    <li>Khoa Nhi & Sơ sinh</li>
                    <li>Khoa Chẩn đoán hình ảnh (CT, MRI, PET-CT)</li>
                    <li>Khoa Xét nghiệm & Giải phẫu bệnh</li>
                </ul>
                <h3 style="margin-top:14px">Cơ sở vật chất</h3>
                <p>Tổng diện tích trên 30.000 m², với hơn 500 giường bệnh, 20 phòng mổ vô khuẩn, khu khám ngoại trú khang trang, phòng VIP đầy đủ tiện nghi và bãi đỗ xe rộng rãi. Hệ thống CNTT bệnh viện hiện đại, hồ sơ bệnh án điện tử, kết nối thanh toán không dùng tiền mặt.</p>
                <div class="hosp-info-meta">
                    <div class="box"><strong>Địa chỉ</strong>${h.address}</div>
                    <div class="box"><strong>Hotline</strong>${h.phone||'1900 2115'}</div>
                    <div class="box"><strong>Giờ làm việc</strong>Thứ 2 - CN: 6:30 - 20:00</div>
                    <div class="box"><strong>Đội ngũ</strong>${h.doctors} bác sĩ chuyên khoa</div>
                </div>
            </div>`;
    }
    const map = document.getElementById('hospMap');
    if (map) {
        const url = h.map || 'https://www.google.com/maps?q=' + encodeURIComponent(h.address) + '&output=embed';
        map.innerHTML = `<iframe src="${url}" width="100%" height="450" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
    // Doctors at this hospital (match by hospital field)
    const docs = DOCTORS.filter(d => d.hospital === h.name);
    const grid = document.getElementById('hospDocs');
    if (grid) {
        if (!docs.length) grid.innerHTML = '<p style="grid-column:1/-1;color:#718096;padding:40px;text-align:center">Chưa có thông tin bác sĩ tại bệnh viện này.</p>';
        else {
            // Reuse renderDoctors with custom subset
            const html = docs.map((d,i)=> `
                <div class="doc-card" style="--i:${i}">
                    <img class="doc-img" src="${d.img}" alt="${d.name}" onclick="openDoctorProfile(${d.id})" style="cursor:pointer">
                    <div class="doc-info">
                        <h4 style="cursor:pointer" onclick="openDoctorProfile(${d.id})">${d.name}</h4>
                        <div class="doc-spec">${d.spec}</div>
                        <div class="doc-meta"><span>${d.exp}</span><span class="doc-rating">★ ${d.rating}</span></div>
                        <div class="doc-meta" style="margin-bottom:12px"><span>Phí khám</span><strong style="color:#00a85a">${d.fee}</strong></div>
                        <div style="display:flex;gap:6px">
                            <button class="btn btn-outline" style="flex:1;padding:10px 8px;font-size:13px" onclick="openDoctorProfile(${d.id})">Hồ sơ</button>
                            <a href="booking.html?doctor=${d.id}" class="btn btn-primary" style="flex:1;padding:10px 8px;font-size:13px">Đặt lịch</a>
                        </div>
                    </div>
                </div>`).join('');
            grid.innerHTML = html;
        }
    }
}

// Scroll-to-top button
function initScrollTop() {
    let btn = document.getElementById('scrollTopBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'scrollTopBtn';
        btn.className = 'scroll-top';
        btn.setAttribute('aria-label','Lên đầu trang');
        btn.innerHTML = '↑';
        btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
        document.body.appendChild(btn);
    }
    const tog = () => { btn.classList.toggle('show', window.scrollY > 400); };
    window.addEventListener('scroll', tog, {passive:true});
    tog();
}

// Đọc query param
function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// Xử lý trang booking
function initBooking() {
    const doctorId = parseInt(getParam('doctor'), 10);
    const doctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];

    const sumName = document.getElementById('sumDoctor');
    const sumSpec = document.getElementById('sumSpec');
    const sumHospital = document.getElementById('sumHospital');
    const sumFee = document.getElementById('sumFee');
    const sumImg = document.getElementById('sumImg');
    if (sumName) sumName.textContent = doctor.name;
    if (sumSpec) sumSpec.textContent = doctor.spec;
    if (sumHospital) sumHospital.textContent = doctor.hospital;
    if (sumFee) sumFee.textContent = doctor.fee;
    if (sumImg) sumImg.src = doctor.img;

    // Populate doctor select
    const selDoctor = document.getElementById('fDoctor');
    if (selDoctor) {
        selDoctor.innerHTML = DOCTORS.map(d => `<option value="${d.id}" ${d.id===doctor.id?'selected':''}>${d.name} - ${d.spec}</option>`).join('');
        selDoctor.addEventListener('change', e => {
            window.location = 'booking.html?doctor=' + e.target.value;
        });
    }

    // Time slots
    const slotsEl = document.getElementById('slots');
    if (slotsEl) {
        const slots = ['08:00','08:30','09:00','09:30','10:00','10:30','13:30','14:00','14:30','15:00','15:30','16:00'];
        const disabled = new Set(['09:00','14:30']);
        slotsEl.innerHTML = slots.map(t => `<div class="slot ${disabled.has(t)?'disabled':''}" data-time="${t}">${t}</div>`).join('');
        slotsEl.addEventListener('click', e => {
            if (!e.target.classList.contains('slot') || e.target.classList.contains('disabled')) return;
            slotsEl.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
            e.target.classList.add('active');
            const sumTime = document.getElementById('sumTime');
            if (sumTime) sumTime.textContent = e.target.dataset.time;
        });
    }

    // Date input default
    const dateInput = document.getElementById('fDate');
    if (dateInput) {
        const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
        dateInput.min = tomorrow.toISOString().split('T')[0];
        dateInput.addEventListener('change', () => {
            const sumDate = document.getElementById('sumDate');
            if (sumDate) sumDate.textContent = dateInput.value.split('-').reverse().join('/');
        });
        const sumDate = document.getElementById('sumDate');
        if (sumDate) sumDate.textContent = dateInput.value.split('-').reverse().join('/');
    }

    // Submit
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const active = document.querySelector('.slot.active');
            if (!active) { alert('Vui lòng chọn khung giờ khám.'); return; }
            alert('Đặt lịch thành công! Chúng tôi sẽ gửi xác nhận qua email trong ít phút.');
            form.reset();
        });
    }
}

// Xử lý filter bác sĩ - chips chuyên khoa
function initDoctorsPage() {
    const chipsEl = document.getElementById('specChips');
    const nameInput = document.getElementById('fName');
    const initial = getParam('spec') || '';
    let activeSlug = initial;
    const run = () => renderDoctors('docGrid', null, activeSlug, nameInput ? nameInput.value : '');
    if (chipsEl) {
        chipsEl.innerHTML =
            `<button type="button" class="chip ${activeSlug===''?'active':''}" data-slug="">Tất cả</button>` +
            SPECIALTIES.map(s =>
                `<button type="button" class="chip ${s.slug===activeSlug?'active':''}" data-slug="${s.slug}">${s.name}</button>`
            ).join('');
        chipsEl.addEventListener('click', e => {
            const b = e.target.closest('.chip');
            if (!b) return;
            chipsEl.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            activeSlug = b.dataset.slug;
            run();
        });
    }
    if (nameInput) nameInput.addEventListener('input', run);
    run();
}

// FAQ accordion
function initFaq() {
    document.querySelectorAll('.faq-q').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('open');
        });
    });
}

// Hero search live: show suggestions of doctors/specialties
function initHeroSearch() {
    const input = document.querySelector('.hero-search input');
    if (!input) return;
    const form = input.closest('form') || input.closest('.hero-search');
    const wrap = input.closest('.hero-search');
    const box = document.createElement('div');
    box.className = 'search-results';
    wrap.appendChild(box);

    const render = q => {
        const ql = (q || '').toLowerCase().trim();
        if (!ql) { box.classList.remove('open'); box.innerHTML = ''; return; }
        const docs = DOCTORS.filter(d => d.name.toLowerCase().includes(ql) || d.spec.toLowerCase().includes(ql)).slice(0,5);
        const specs = SPECIALTIES.filter(s => s.name.toLowerCase().includes(ql)).slice(0,4);
        if (!docs.length && !specs.length) {
            box.innerHTML = '<div class="search-item"><span class="s">Không tìm thấy kết quả cho "'+ql+'"</span></div>';
        } else {
            box.innerHTML =
                specs.map(s => `
                    <a class="search-item" href="doctors.html?spec=${s.slug}">
                        <img src="${s.img}" alt="">
                        <div><div class="t">${s.name}</div><div class="s">${s.desc}</div></div>
                        <span class="tag">Chuyên khoa</span>
                    </a>`).join('') +
                docs.map(d => `
                    <a class="search-item" href="booking.html?doctor=${d.id}">
                        <img src="${d.img}" alt="">
                        <div><div class="t">${d.name}</div><div class="s">${d.spec} • ${d.hospital}</div></div>
                        <span class="tag">Bác sĩ</span>
                    </a>`).join('');
        }
        box.classList.add('open');
    };
    input.addEventListener('input', e => render(e.target.value));
    input.addEventListener('focus', e => render(e.target.value));
    document.addEventListener('click', e => {
        if (!wrap.contains(e.target)) box.classList.remove('open');
    });
}

// Filter chuyên khoa
function initSpecialtiesPage() {
    const input = document.getElementById('specSearch');
    const grid = document.getElementById('specGrid');
    if (!input || !grid) return;
    const render = q => {
        const ql = (q || '').toLowerCase();
        const list = SPECIALTIES.filter(s => s.name.toLowerCase().includes(ql));
        grid.innerHTML = list.map(s => `
            <a href="specialty.html?slug=${s.slug}" class="spec-card">
                <img src="${s.img}" alt="${s.name}">
                <h4>${s.name}</h4>
                <p style="font-size:12px;color:#718096;margin-top:6px">${s.desc}</p>
            </a>
        `).join('');
    };
    input.addEventListener('input', e => render(e.target.value));
    render('');
}
