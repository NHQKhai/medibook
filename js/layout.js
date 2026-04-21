/* MediBook - Layout dùng chung: render header và footer động cho mọi trang */

const SOCIAL_ICONS = {
    fb: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"/></svg>',
    zl: '<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6 2 11c0 2.7 1.4 5.1 3.6 6.7-.1.7-.5 2.1-.6 2.4-.1.4.2.4.4.3.2-.1 2.6-1.7 3.4-2.3 1 .2 2.1.4 3.2.4 5.5 0 10-4 10-9s-4.5-9.5-10-9.5zm-3.6 12h-3c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.3l2.5-3.4H5.6c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h3.2c.2 0 .4.2.4.4 0 .1 0 .2-.1.3L6.6 13.2h2.2c.2 0 .4.2.4.4s-.2.4-.4.4zm2 0c-.2 0-.4-.2-.4-.4V9.5c0-.2.2-.4.4-.4s.4.2.4.4v4.1c0 .2-.2.4-.4.4zm5.7-.4c0 .2-.2.4-.4.4-.1 0-.2 0-.3-.1L13.5 11v2.6c0 .2-.2.4-.4.4s-.4-.2-.4-.4V9.5c0-.2.1-.3.3-.4.2-.1.3 0 .4.1l2 2.6V9.5c0-.2.2-.4.4-.4s.4.2.4.4v4.1zm2.6.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.2 3.2-1.7 4.8-4.9 4.9-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.2-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.2-3.2 1.7-4.8 4.9-4.9C8.4 2.2 8.8 2.2 12 2.2zm0 6.5A3.3 3.3 0 1015.3 12 3.3 3.3 0 0012 8.7zm0 5.4a2.1 2.1 0 112.1-2.1A2.1 2.1 0 0112 14.1zm3.4-6.2a.78.78 0 11.78.78.78.78 0 01-.78-.78z"/></svg>',
    yt: '<svg viewBox="0 0 24 24"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.5 3.5 12 3.5 12 3.5s-4.5 0-7.8.4c-.4.1-1.4.1-2.3 1C1.2 5.6 1 7.2 1 7.2S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.5 0 7.8-.4c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 14.6V8.3l5.8 3.2-5.8 3.1z"/></svg>',
    ln: '<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14M8.3 18.3v-8H5.7v8h2.6m-1.3-9.1a1.5 1.5 0 100-3 1.5 1.5 0 000 3M19 18.3v-4.4c0-2.3-1.2-3.4-2.9-3.4a2.5 2.5 0 00-2.3 1.2v-1H11.2v8h2.6V14a1.7 1.7 0 011.6-1.8c.9 0 1.4.6 1.4 1.8v4.3H19z"/></svg>',
    tt: '<svg viewBox="0 0 24 24"><path d="M19.3 7.9c-1.5 0-2.9-.5-4-1.4V15c0 3.1-2.5 5.6-5.6 5.6S4.1 18 4.1 15s2.5-5.6 5.6-5.6c.3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8 2.8-1.3 2.8-2.8V3h2.9c0 .3 0 .5.1.8.3 1.6 1.2 3 2.6 3.8.6.3 1.2.5 1.9.5V11c-.2 0-.4 0-.7-.1V7.9z"/></svg>'
};

// Real outbound URLs for social channels
const SOCIAL_URLS = {
    fb: 'https://www.facebook.com/',
    zl: 'https://zalo.me/',
    ig: 'https://www.instagram.com/',
    yt: 'https://www.youtube.com/',
    ln: 'https://www.linkedin.com/',
    tt: 'https://www.tiktok.com/'
};

const PHONE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.4-.1-.8 0-1.1.2l-2.2 2.2a15 15 0 01-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1.1A11 11 0 018.5 4c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1z"/></svg>';
const MSG_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM7 9h10v2H7zm0 4h7v2H7zm0-8h10v2H7z"/></svg>';

function renderHeader(activePage) {
    return `
<div class="topbar">
    <div class="container">
        <div>
            <a href="javascript:openHotlineModal()" class="hotline-red">📞 Hotline: 1900 2115</a>
            <a href="mailto:hello@medibook.vn">hello@medibook.vn</a>
        </div>
        <div>
            <a href="news.html">Tin tức Y khoa</a>
            <a href="contact.html">Liên hệ</a>
            <a href="about.html">Về chúng tôi</a>
        </div>
    </div>
</div>
<header class="header">
    <div class="container">
        <a href="index.html" class="logo">
            <img src="images/logo.svg" alt="MediBook">
            <span class="brand">MediBook<small>Đặt lịch khám trực tuyến</small></span>
        </a>
        <nav class="nav" id="mainNav">
            <a href="index.html" class="hl ${activePage==='home'?'active':''}">Trang chủ</a>
            <a href="specialties.html" class="${activePage==='spec'?'active':''}">Chuyên khoa</a>
            <a href="services.html" class="hl ${activePage==='svc'?'active':''}">Dịch vụ</a>
            <a href="doctors.html" class="${activePage==='doc'?'active':''}">Bác sĩ</a>
            <a href="hospitals.html" class="hl ${activePage==='hos'?'active':''}">Bệnh viện</a>
            <a href="promotions.html" class="${activePage==='promo'?'active':''}">Khuyến mãi</a>
            <a href="news.html" class="hl ${activePage==='news'?'active':''}">Tin tức</a>
            <a href="contact.html" class="${activePage==='contact'?'active':''}">Liên hệ</a>
        </nav>
        <div class="header-actions">
            <a href="my-appointments.html" title="Lịch hẹn &amp; thông báo" class="bell-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6-6V11c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 00-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </a>
            <a href="login.html" class="btn btn-ghost">Đăng nhập</a>
            <a href="register.html" class="btn btn-outline">Đăng ký</a>
            <a href="booking.html" class="btn btn-primary">Đặt lịch</a>
            <button class="menu-toggle" onclick="document.getElementById('mainNav').classList.toggle('open')">≡</button>
        </div>
    </div>
</header>`;
}

function renderFooter() {
    return `
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <a href="index.html" class="logo" style="color:#fff;margin-bottom:14px">
                    <img src="images/logo.svg" alt="MediBook" style="background:#fff;border-radius:10px;padding:2px">
                    <span class="brand" style="color:#fff">MediBook<small style="color:#cbd5d2">Đặt lịch khám trực tuyến</small></span>
                </a>
                <p style="margin-top:14px">MediBook - Nền tảng đặt lịch khám bệnh trực tuyến hàng đầu Việt Nam, kết nối bệnh nhân với bác sĩ và bệnh viện uy tín.</p>
                <h4 style="margin-top:18px">Theo dõi chúng tôi</h4>
                <div class="socials socials-color">
                    <a href="${SOCIAL_URLS.fb}" target="_blank" rel="noopener" class="fb" title="Facebook">${SOCIAL_ICONS.fb}</a>
                    <a href="${SOCIAL_URLS.zl}" target="_blank" rel="noopener" class="zl" title="Zalo">${SOCIAL_ICONS.zl}</a>
                    <a href="${SOCIAL_URLS.ig}" target="_blank" rel="noopener" class="ig" title="Instagram">${SOCIAL_ICONS.ig}</a>
                    <a href="${SOCIAL_URLS.yt}" target="_blank" rel="noopener" class="yt" title="YouTube">${SOCIAL_ICONS.yt}</a>
                    <a href="${SOCIAL_URLS.tt}" target="_blank" rel="noopener" class="tt" title="TikTok">${SOCIAL_ICONS.tt}</a>
                    <a href="${SOCIAL_URLS.ln}" target="_blank" rel="noopener" class="ln" title="LinkedIn">${SOCIAL_ICONS.ln}</a>
                </div>
            </div>
            <div>
                <h4>Hệ thống MediBook</h4>
                <ul>
                    <li><a href="vision.html">Tầm nhìn & Sứ mệnh</a></li>
                    <li><a href="hospitals.html">Hệ thống cơ sở y tế</a></li>
                    <li><a href="doctors.html">Tìm bác sĩ</a></li>
                    <li><a href="contact.html">Làm việc tại MediBook</a></li>
                </ul>
                <h4 style="margin-top:18px">Đối tác liên kết</h4>
                <ul>
                    <li><a href="about.html">Giới thiệu MediBook</a></li>
                    <li><a href="contact.html">Hợp tác kinh doanh</a></li>
                    <li><a href="news.html">Báo chí truyền thông</a></li>
                </ul>
            </div>
            <div>
                <h4>Dịch vụ</h4>
                <ul>
                    <li><a href="specialties.html">Chuyên khoa</a></li>
                    <li><a href="services.html">Gói dịch vụ &amp; bảng giá</a></li>
                    <li><a href="promotions.html">Khuyến mãi &amp; voucher</a></li>
                    <li><a href="booking.html">Đặt lịch hẹn</a></li>
                    <li><a href="my-appointments.html">Lịch hẹn của tôi</a></li>
                </ul>
                <h4 style="margin-top:18px">Hỗ trợ</h4>
                <ul>
                    <li><a href="faq.html">Câu hỏi thường gặp</a></li>
                    <li><a href="privacy.html">Chính sách bảo mật</a></li>
                    <li><a href="terms.html">Điều khoản sử dụng</a></li>
                    <li><a href="cancellation.html">Chính sách hủy lịch</a></li>
                    <li><a href="guide.html">Hướng dẫn sử dụng</a></li>
                    <li><a href="admin.html">Quản trị (demo)</a></li>
                </ul>
            </div>
            <div>
                <h4>Liên hệ</h4>
                <ul>
                    <li>Hotline: <a href="javascript:openHotlineModal()">1900 2115</a></li>
                    <li>Email: <a href="mailto:hello@medibook.vn">hello@medibook.vn</a></li>
                    <li>Số 2 Võ Oanh, P.25, Q.Bình Thạnh, TP.HCM</li>
                    <li>Giờ làm việc: 07:00 - 22:00 hàng ngày</li>
                </ul>
                <div class="mini-map">
                    <iframe src="https://maps.google.com/maps?q=10.804518,106.71414&z=16&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <a href="https://maps.app.goo.gl/Fpx5MRwU65KCYdMKA" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px;color:#7dd3c0;font-size:13px;text-decoration:none">📍 Xem chỉ đường trên Google Maps →</a>
                <a href="https://www.dmca.com/Protection/Status.aspx?ID=00000000-0000-0000-0000-000000000000" target="_blank" rel="noopener" title="DMCA Protected" class="dmca-badge">
                    <img src="images/dmca.png" alt="DMCA Protected">
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            Bản quyền © 2026 thuộc về MediBook | <a href="privacy.html" style="color:#cbd5d2">Chính sách bảo vệ dữ liệu cá nhân của MediBook</a> | <a href="privacy.html" style="color:#cbd5d2">GR Privacy</a> | <a href="terms.html" style="color:#cbd5d2">GR Terms</a>
        </div>
    </div>
</footer>
<div class="fab">
    <a href="javascript:openHotlineModal()" title="Gọi hotline">${PHONE_ICON}</a>
    <a href="${SOCIAL_URLS.zl}" target="_blank" rel="noopener" class="zalo" title="Chat Zalo">${SOCIAL_ICONS.zl}</a>
</div>
<div class="modal-backdrop" id="hotlineModal" onclick="if(event.target===this)closeHotlineModal()">
    <div class="modal" style="position:relative">
        <span class="close" onclick="closeHotlineModal()" style="color:#999">×</span>
        <div style="font-size:28px;font-weight:700;color:var(--primary);margin-bottom:6px">MediBook</div>
        <h3>Hotline MediBook</h3>
        <p>Tổng đài hỗ trợ 24/7 - hoàn toàn miễn phí</p>
        <div class="big-num">1900 2115</div>
        <a href="tel:19002115" class="btn btn-primary btn-block">Gọi ngay</a>
        <p style="margin-top:14px;font-size:12px">Hoặc nhắn Zalo: <a href="${SOCIAL_URLS.zl}" target="_blank" style="color:var(--primary);font-weight:600">m.me/medibook</a></p>
    </div>
</div>`;
}

function openHotlineModal(){const m=document.getElementById('hotlineModal');if(m)m.classList.add('show')}
function closeHotlineModal(){const m=document.getElementById('hotlineModal');if(m)m.classList.remove('show')}

// Inject layout
function mountLayout(activePage) {
    const headerEl = document.getElementById('siteHeader');
    const footerEl = document.getElementById('siteFooter');
    if (headerEl) headerEl.innerHTML = renderHeader(activePage);
    if (footerEl) footerEl.innerHTML = renderFooter();
    if (typeof initScrollTop === 'function') initScrollTop();
}

// Reveal on scroll
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(e => e.classList.add('visible'));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('visible');
                io.unobserve(en.target);
            }
        });
    }, {threshold:0.1});
    els.forEach(e => io.observe(e));
}
