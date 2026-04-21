# Hệ thống Đặt lịch hẹn Bác sĩ trực tuyến

Đây là một website dành cho doanh nghiệp y tế, giúp người dân Việt Nam có thể đặt lịch khám bệnh tại các bệnh viện và phòng khám uy tín chỉ trong vài phút, không cần xếp hàng, không cần chờ đợi.

Phiên bản hiện tại là phần giao diện (frontend) được xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần, không phụ thuộc vào bất kỳ thư viện hoặc framework phức tạp nào, nhờ đó nhẹ, nhanh, dễ triển khai và dễ bảo trì. Phần xử lý phía máy chủ (backend) sẽ được phát triển và cập nhật ở giai đoạn sau bằng nền tảng .NET kết hợp với cơ sở dữ liệu SQL Server.

Trang demo trực tuyến: https://nhqkhai.github.io/medibook/

---

## Mục lục

1. Giới thiệu chung
2. Đối tượng sử dụng
3. Các tính năng chính
4. Cấu trúc thư mục
5. Hướng dẫn chạy thử trên máy
6. Hướng dẫn triển khai trực tuyến
7. Công nghệ sử dụng
8. Lộ trình phát triển
9. Người đóng góp
10. Giấy phép

---

## 1. Giới thiệu chung

Hệ thống Đặt lịch hẹn Bác sĩ trực tuyến ra đời với mong muốn số hóa quy trình khám chữa bệnh tại Việt Nam. Thay vì phải đến bệnh viện từ sáng sớm để xếp hàng lấy số, bệnh nhân có thể:

- Lựa chọn bệnh viện hoặc phòng khám phù hợp.
- Xem hồ sơ bác sĩ, chuyên khoa, học vấn và đánh giá từ bệnh nhân khác.
- Chọn ngày giờ thuận tiện và đặt lịch chỉ với vài thao tác trên điện thoại hoặc máy tính.
- Quản lý lịch hẹn, nhận thông báo nhắc hẹn và đánh giá sau khi khám.

Tất cả các nội dung trên website đều được biên tập bằng tiếng Việt, dành cho người dùng phổ thông Việt Nam, kể cả những người không quen sử dụng công nghệ.

## 2. Đối tượng sử dụng

- Bệnh nhân và người nhà có nhu cầu đặt lịch khám.
- Bác sĩ và nhân viên y tế muốn quản lý lịch hẹn của mình.
- Bệnh viện, phòng khám muốn quảng bá dịch vụ.
- Quản trị viên hệ thống theo dõi hoạt động chung.

## 3. Các tính năng chính

Trang chủ
- Thanh tìm kiếm nhanh theo tên bác sĩ, chuyên khoa hoặc bệnh viện.
- Khu vực hiển thị các chuyên khoa nổi bật, bác sĩ tiêu biểu, bệnh viện hợp tác và tin tức y khoa.

Đặt lịch khám
- Quy trình đặt lịch theo nhiều bước dễ hiểu: chọn chuyên khoa, chọn bác sĩ, chọn ngày giờ, điền thông tin và xác nhận.
- Chọn nhiều hình thức thanh toán: tiền mặt khi đến khám, chuyển khoản, ví điện tử, thẻ tín dụng.

Quản lý lịch hẹn cá nhân
- Ba tab phân loại: lịch sắp tới, lịch sử khám và lịch đã hủy.
- Cho phép hủy, đổi giờ, đánh giá bác sĩ và đồng bộ với lịch cá nhân.

Đăng ký, đăng nhập
- Hỗ trợ đăng ký với ba vai trò: bệnh nhân, bác sĩ, quản trị viên.
- Đăng nhập nhanh bằng Google hoặc Facebook.

Tin tức và cẩm nang sức khỏe
- Các bài viết được biên tập, có hình ảnh minh họa, hướng dẫn chăm sóc sức khỏe đa lĩnh vực.

Khu vực khuyến mãi
- Các mã giảm giá, gói khám sức khỏe ưu đãi, đăng ký nhận tin qua email.

Trang dịch vụ
- Liệt kê 12 dịch vụ y tế kèm bộ lọc và tìm kiếm.

Trang quản trị
- Bảng điều khiển hiển thị thống kê tổng quan, danh sách lịch hẹn, biểu đồ doanh thu 7 ngày gần nhất.

Liên hệ
- Bản đồ Google Maps được nhúng trực tiếp, hiển thị địa chỉ văn phòng.
- Biểu mẫu liên hệ và hotline 1900 2115 nổi bật.

Các tiện ích khác
- Nút gọi nhanh và nút cuộn lên đầu trang luôn hiển thị ở góc dưới bên phải.
- Thanh điều hướng cố định, dễ dàng truy cập mọi trang chỉ với một cú nhấp.
- Giao diện thân thiện trên cả máy tính và điện thoại.

## 4. Cấu trúc thư mục

```
medibook/
├── index.html              Trang chủ
├── about.html              Trang giới thiệu doanh nghiệp
├── doctors.html            Danh sách bác sĩ
├── hospitals.html          Danh sách bệnh viện
├── booking.html            Đặt lịch khám
├── my-appointments.html    Quản lý lịch hẹn cá nhân
├── payment.html            Trang thanh toán
├── services.html           Danh sách dịch vụ
├── promotions.html         Khuyến mãi
├── news.html               Tin tức y khoa
├── guide.html              Cẩm nang sử dụng
├── contact.html            Liên hệ và bản đồ
├── admin.html              Bảng điều khiển quản trị
├── login.html              Đăng nhập
├── register.html           Đăng ký
├── faq.html                Câu hỏi thường gặp
├── privacy.html            Chính sách bảo mật
├── terms.html              Điều khoản sử dụng
├── vision.html             Tầm nhìn và sứ mệnh
├── css/
│   └── style.css           Toàn bộ kiểu trình bày
├── js/
│   ├── data.js             Dữ liệu mẫu (bác sĩ, bệnh viện, tin tức ...)
│   ├── layout.js           Sinh phần đầu trang và chân trang
│   └── app.js              Các thao tác giao diện chung
└── images/                 Ảnh minh họa cho toàn bộ trang
```

## 5. Hướng dẫn chạy thử trên máy

Bạn không cần cài đặt gì phức tạp. Chỉ cần một trong hai cách dưới đây:

Cách 1: mở trực tiếp
- Tải về toàn bộ thư mục, nhấp đúp vào tệp `index.html`.

Cách 2: chạy bằng máy chủ tĩnh (khuyến nghị)
- Cài Python 3.
- Mở cửa sổ dòng lệnh tại thư mục dự án và chạy:

```
python -m http.server 8000
```

- Mở trình duyệt và truy cập `http://localhost:8000`.

## 6. Hướng dẫn triển khai trực tuyến

Dự án đang được đăng tải miễn phí trên GitHub Pages tại địa chỉ:

https://nhqkhai.github.io/medibook/

Để tự đăng tải bản sao của riêng bạn: sau khi đẩy mã nguồn lên GitHub, vào mục Settings của kho lưu trữ, chọn Pages, chọn nhánh `main` và thư mục gốc, sau đó nhấn Save. Sau vài phút, trang web sẽ có sẵn tại địa chỉ `https://<tên-tài-khoản>.github.io/<tên-kho>/`.

## 7. Công nghệ sử dụng

Phần giao diện (đã hoàn thành ở phiên bản hiện tại):
- HTML5 ngữ nghĩa rõ ràng.
- CSS3 với Flexbox, Grid, hoạt ảnh keyframes.
- JavaScript thuần (vanilla), không có thư viện ngoài.
- Google Fonts cho hệ thống chữ tiếng Việt.
- Google Maps nhúng để hiển thị vị trí văn phòng.

Phần xử lý phía máy chủ (sẽ cập nhật ở giai đoạn sau):
- Nền tảng ASP.NET (.NET) cho các API và logic nghiệp vụ.
- Cơ sở dữ liệu SQL Server để lưu trữ thông tin bệnh nhân, bác sĩ, lịch hẹn, hóa đơn.
- Cơ chế xác thực và phân quyền theo vai trò bệnh nhân, bác sĩ, quản trị viên.

## 8. Lộ trình phát triển

- Phiên bản 1.0 (hiện tại): hoàn thiện toàn bộ giao diện tĩnh và luồng đặt lịch mô phỏng.
- Phiên bản 2.0 (dự kiến): tích hợp với máy chủ ASP.NET và cơ sở dữ liệu SQL Server để lưu trữ và xử lý dữ liệu thật.
- Phiên bản 3.0 (dự kiến): bổ sung khám bệnh từ xa qua video, trợ lý sức khỏe sử dụng trí tuệ nhân tạo, ứng dụng di động.

## 9. Người đóng góp

- Nguyễn Hồ Quang Khải - Tác giả và phát triển toàn bộ dự án.

## 10. Giấy phép

Dự án được phát hành theo giấy phép MIT. Bạn có thể tự do sử dụng, sửa đổi và phân phối lại với điều kiện giữ nguyên thông tin bản quyền của tác giả.
