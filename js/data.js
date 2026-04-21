/* MediBook - Dữ liệu mẫu cho website */

const SPECIALTIES = [
    {slug:'noi-tong-quat', name:'Nội tổng quát', img:'images/specialties/noi-tong-quat.png', desc:'Khám và điều trị các bệnh lý nội khoa thông thường'},
    {slug:'tim-mach', name:'Tim mạch', img:'images/specialties/tim-mach.png', desc:'Tầm soát, điều trị bệnh lý tim mạch và mạch máu'},
    {slug:'tieu-hoa', name:'Tiêu hóa', img:'images/specialties/tieu-hoa.png', desc:'Bệnh lý dạ dày, gan, mật, đại tràng'},
    {slug:'rang-ham-mat', name:'Răng hàm mặt', img:'images/specialties/rang-ham-mat.png', desc:'Chăm sóc răng miệng và phẫu thuật hàm mặt'},
    {slug:'tai-mui-hong', name:'Tai mũi họng', img:'images/specialties/tai-mui-hong.png', desc:'Khám và điều trị bệnh lý tai mũi họng'},
    {slug:'nhan-khoa', name:'Nhãn khoa', img:'images/specialties/nhan-khoa.png', desc:'Chuyên về các bệnh lý mắt'},
    {slug:'da-lieu', name:'Da liễu', img:'images/specialties/da-lieu.png', desc:'Điều trị các bệnh về da, tóc, móng'},
    {slug:'nhi-khoa', name:'Nhi khoa', img:'images/specialties/nhi-khoa.png', desc:'Khám và điều trị bệnh cho trẻ em'},
    {slug:'san-phu-khoa', name:'Sản phụ khoa', img:'images/specialties/san-phu-khoa.png', desc:'Chăm sóc sức khỏe phụ nữ và thai sản'},
    {slug:'co-xuong-khop', name:'Cơ xương khớp', img:'images/specialties/co-xuong-khop.png', desc:'Bệnh lý xương khớp, cơ và mô mềm'},
    {slug:'ung-buou', name:'Ung bướu', img:'images/specialties/ung-buou.png', desc:'Tầm soát và điều trị ung thư'},
    {slug:'tam-ly', name:'Tâm lý', img:'images/specialties/tam-ly.png', desc:'Tư vấn sức khỏe tâm thần và tâm lý'},
    {slug:'ho-hap', name:'Hô hấp', img:'images/specialties/ho-hap.png', desc:'Bệnh lý phổi và đường hô hấp'},
    {slug:'noi-than-kinh', name:'Nội thần kinh', img:'images/specialties/noi-than-kinh.png', desc:'Bệnh lý thần kinh trung ương'},
    {slug:'noi-tiet', name:'Nội tiết', img:'images/specialties/noi-tiet.png', desc:'Tiểu đường, tuyến giáp và bệnh nội tiết'},
    {slug:'nam-khoa', name:'Nam khoa', img:'images/specialties/nam-khoa.png', desc:'Chăm sóc sức khỏe sinh sản nam giới'},
    {slug:'dinh-duong', name:'Dinh dưỡng', img:'images/specialties/dinh-duong.png', desc:'Tư vấn chế độ ăn và dinh dưỡng lâm sàng'},
    {slug:'y-hoc-co-truyen', name:'Y học cổ truyền', img:'images/specialties/y-hoc-co-truyen.png', desc:'Điều trị bằng y học cổ truyền'}
];

const DOCTORS = [
    {id:1, name:'BS. CKII. Nguyễn Trung Nghĩa', spec:'Tim mạch', specSlug:'tim-mach', img:'images/doctors/dm1.png', exp:'18 năm kinh nghiệm', hospital:'Bệnh viện Đại học Y Dược TP.HCM', rating:4.9, reviews:124, fee:'350.000đ'},
    {id:2, name:'BS. CKI. Vũ Thanh Đỗ', spec:'Nội tổng quát', specSlug:'noi-tong-quat', img:'images/doctors/dm2.png', exp:'12 năm kinh nghiệm', hospital:'Bệnh viện Chợ Rẫy', rating:4.8, reviews:98, fee:'300.000đ'},
    {id:3, name:'ThS. BS. Đinh Thị Lan Phương', spec:'Sản phụ khoa', specSlug:'san-phu-khoa', img:'images/doctors/df1.png', exp:'15 năm kinh nghiệm', hospital:'Bệnh viện Từ Dũ', rating:5.0, reviews:215, fee:'400.000đ'},
    {id:4, name:'ThS. BS. Nguyễn Hồng Vân Khanh', spec:'Nhi khoa', specSlug:'nhi-khoa', img:'images/doctors/df2.png', exp:'10 năm kinh nghiệm', hospital:'Bệnh viện Nhi Đồng 1', rating:4.9, reviews:167, fee:'350.000đ'},
    {id:5, name:'PGS. TS. BS. Dương Anh Hoàng', spec:'Cơ xương khớp', specSlug:'co-xuong-khop', img:'images/doctors/dm3.png', exp:'25 năm kinh nghiệm', hospital:'Bệnh viện Chấn thương Chỉnh hình', rating:4.9, reviews:302, fee:'500.000đ'},
    {id:6, name:'BS. CKI. Trần Minh Khoa', spec:'Da liễu', specSlug:'da-lieu', img:'images/doctors/dm4.png', exp:'8 năm kinh nghiệm', hospital:'Bệnh viện Da Liễu TP.HCM', rating:4.7, reviews:76, fee:'280.000đ'},
    {id:7, name:'BS. Lê Thị Hồng Nhung', spec:'Tai mũi họng', specSlug:'tai-mui-hong', img:'images/doctors/df3.png', exp:'9 năm kinh nghiệm', hospital:'Bệnh viện Tai Mũi Họng TP.HCM', rating:4.8, reviews:88, fee:'300.000đ'},
    {id:8, name:'BS. CKII. Phạm Quốc Hùng', spec:'Tiêu hóa', specSlug:'tieu-hoa', img:'images/doctors/dm5.png', exp:'20 năm kinh nghiệm', hospital:'Bệnh viện 115', rating:4.9, reviews:142, fee:'400.000đ'},
    {id:9, name:'BS. CKI. Hoàng Thị Mai', spec:'Nội tiết', specSlug:'noi-tiet', img:'images/doctors/df4.png', exp:'11 năm kinh nghiệm', hospital:'Bệnh viện Nội tiết TW', rating:4.8, reviews:67, fee:'320.000đ'},
    {id:10, name:'BS. Nguyễn Văn Tâm', spec:'Tâm lý', specSlug:'tam-ly', img:'images/doctors/dm6.png', exp:'13 năm kinh nghiệm', hospital:'Bệnh viện Tâm Thần TP.HCM', rating:4.9, reviews:103, fee:'380.000đ'},
    {id:11, name:'BS. CKI. Đặng Thị Thu', spec:'Nhãn khoa', specSlug:'nhan-khoa', img:'images/doctors/df5.png', exp:'14 năm kinh nghiệm', hospital:'Bệnh viện Mắt TP.HCM', rating:4.8, reviews:91, fee:'350.000đ'},
    {id:12, name:'ThS. BS. Lý Hoàng Sơn', spec:'Hô hấp', specSlug:'ho-hap', img:'images/doctors/dm7.png', exp:'16 năm kinh nghiệm', hospital:'Bệnh viện Phạm Ngọc Thạch', rating:4.9, reviews:118, fee:'380.000đ'},
    {id:13, name:'BS. CKI. Huỳnh Văn Bình', spec:'Răng hàm mặt', specSlug:'rang-ham-mat', img:'images/doctors/dm8.png', exp:'12 năm kinh nghiệm', hospital:'Bệnh viện Răng Hàm Mặt TW', rating:4.8, reviews:112, fee:'320.000đ'},
    {id:14, name:'BS. CKII. Bùi Thị Hương', spec:'Ung bướu', specSlug:'ung-buou', img:'images/doctors/df6.png', exp:'22 năm kinh nghiệm', hospital:'Bệnh viện Ung Bướu TP.HCM', rating:4.9, reviews:198, fee:'500.000đ'},
    {id:15, name:'BS. Võ Minh Quân', spec:'Nội thần kinh', specSlug:'noi-than-kinh', img:'images/doctors/dm9.png', exp:'17 năm kinh nghiệm', hospital:'Bệnh viện Nguyễn Tri Phương', rating:4.8, reviews:87, fee:'400.000đ'},
    {id:16, name:'BS. CKI. Trần Công Danh', spec:'Nam khoa', specSlug:'nam-khoa', img:'images/doctors/dm10.png', exp:'10 năm kinh nghiệm', hospital:'Bệnh viện Bình Dân', rating:4.7, reviews:63, fee:'350.000đ'},
    {id:17, name:'BS. Nguyễn Thị Mỹ Linh', spec:'Dinh dưỡng', specSlug:'dinh-duong', img:'images/doctors/df7.png', exp:'8 năm kinh nghiệm', hospital:'Viện Dinh Dưỡng Quốc Gia', rating:4.9, reviews:74, fee:'300.000đ'},
    {id:18, name:'Lương y. Phạm Văn Hòa', spec:'Y học cổ truyền', specSlug:'y-hoc-co-truyen', img:'images/doctors/dm11.png', exp:'30 năm kinh nghiệm', hospital:'Viện Y dược học Dân tộc', rating:4.8, reviews:145, fee:'280.000đ'},
    {id:19, name:'ThS. BS. Lê Thanh Thảo', spec:'Sản phụ khoa', specSlug:'san-phu-khoa', img:'images/doctors/df8.png', exp:'13 năm kinh nghiệm', hospital:'Bệnh viện Hùng Vương', rating:4.9, reviews:168, fee:'380.000đ'},
    {id:20, name:'BS. CKI. Trương Thị Diễm My', spec:'Nhi khoa', specSlug:'nhi-khoa', img:'images/doctors/df9.png', exp:'9 năm kinh nghiệm', hospital:'Bệnh viện Nhi Đồng 2', rating:4.8, reviews:127, fee:'320.000đ'}
];

const ARTICLES = [
    {id:1, tag:'Tim mạch', title:'Cách phòng ngừa bệnh tim mạch hiệu quả ở người trẻ', img:'images/news/n1.png', date:'15/03/2026', author:'BS. Nguyễn Trung Nghĩa',
        excerpt:'Bệnh tim mạch đang có xu hướng trẻ hóa đáng báo động tại Việt Nam. Theo thống kê mới nhất, tỷ lệ người dưới 40 tuổi mắc các bệnh lý mạch vành, rối loạn nhịp tim, tăng huyết áp đã tăng gấp 3 lần so với một thập kỷ trước. Nguyên nhân chủ yếu đến từ lối sống thiếu vận động, áp lực công việc, chế độ ăn nhiều chất béo bão hòa và thói quen hút thuốc, uống rượu bia. Hãy cùng tìm hiểu 7 nguyên tắc vàng giúp bảo vệ trái tim của bạn ngay từ hôm nay.',
        content:`<p>Bệnh tim mạch không còn là vấn đề của riêng người cao tuổi. Theo thống kê của Bộ Y tế Việt Nam, mỗi năm cả nước ghi nhận hơn 200.000 ca tử vong do bệnh tim mạch, chiếm khoảng 33% tổng số ca tử vong. Đáng lo ngại hơn, tỷ lệ người dưới 40 tuổi mắc bệnh đang gia tăng nhanh chóng do áp lực công việc, lối sống ít vận động và chế độ ăn thiếu khoa học.</p>
<p>Tin vui là có tới 80% các ca bệnh tim mạch có thể phòng ngừa được nếu chúng ta chủ động thay đổi lối sống từ sớm. Dưới đây là 7 nguyên tắc vàng mà mọi người trẻ nên áp dụng:</p>
<h3>1. Duy trì chế độ ăn lành mạnh</h3>
<p>Hạn chế muối dưới 5g/ngày, giảm chất béo bão hòa có trong mỡ động vật, đồ chiên rán. Tăng cường rau xanh, trái cây, ngũ cốc nguyên hạt và cá biển giàu omega-3 (cá hồi, cá thu, cá ngừ) ít nhất 2 lần/tuần. Chế độ ăn Địa Trung Hải được chứng minh giúp giảm 30% nguy cơ bệnh tim.</p>
<h3>2. Tập thể dục đều đặn</h3>
<p>Tối thiểu 150 phút hoạt động cường độ vừa (đi bộ nhanh, đạp xe) hoặc 75 phút cường độ cao (chạy bộ, bơi lội) mỗi tuần. Kết hợp bài tập sức mạnh 2 lần/tuần. Tránh ngồi liên tục quá 2 giờ.</p>
<h3>3. Không hút thuốc lá, hạn chế rượu bia</h3>
<p>Bỏ thuốc lá giúp giảm 50% nguy cơ nhồi máu cơ tim sau 1 năm và gần bằng người không hút sau 15 năm. Rượu bia không quá 2 đơn vị cồn/ngày đối với nam và 1 đơn vị với nữ.</p>
<h3>4. Kiểm soát căng thẳng và ngủ đủ</h3>
<p>Thiền, yoga, hít thở sâu, đi bộ trong thiên nhiên giúp giảm cortisol. Ngủ đủ 7-8 giờ/đêm, tránh thức khuya vì thiếu ngủ làm tăng huyết áp và viêm mạch máu.</p>
<h3>5. Kiểm soát cân nặng</h3>
<p>Duy trì BMI từ 18,5 - 23. Vòng eo dưới 90cm (nam) và 80cm (nữ). Mỗi 5kg giảm cân giúp hạ huyết áp 5mmHg.</p>
<h3>6. Kiểm tra sức khỏe định kỳ</h3>
<p>Người từ 30 tuổi nên đo huyết áp, đường huyết, cholesterol, điện tâm đồ tối thiểu 1 lần/năm. Nếu có tiền sử gia đình bệnh tim, cần tầm soát sớm hơn và chuyên sâu hơn.</p>
<h3>7. Biết các dấu hiệu cảnh báo</h3>
<p>Đau thắt ngực, khó thở khi gắng sức, tim đập nhanh bất thường, chóng mặt, phù chân - hãy đến bệnh viện ngay. Đặt lịch khám Tim mạch tại MediBook để được tư vấn từ các chuyên gia hàng đầu.</p>`},
    {id:2, tag:'Dinh dưỡng', title:'10 thực phẩm giúp tăng cường miễn dịch trong mùa dịch', img:'images/news/n2.png', date:'12/03/2026', author:'BS. Lan Phương',
        excerpt:'Hệ miễn dịch khỏe mạnh chính là lá chắn tự nhiên giúp cơ thể chống lại vi khuẩn, virus và các tác nhân gây bệnh. Trong bối cảnh dịch bệnh diễn biến phức tạp, việc xây dựng chế độ dinh dưỡng khoa học đóng vai trò quan trọng hơn bao giờ hết. Bài viết giới thiệu 10 siêu thực phẩm giàu vitamin C, kẽm, chất chống oxy hóa và probiotic mà bạn nên bổ sung vào bữa ăn hàng ngày để nâng cao sức đề kháng cho cả gia đình.',
        content:`<p>Hệ miễn dịch là tuyến phòng thủ tự nhiên của cơ thể trước các tác nhân gây bệnh. Một chế độ dinh dưỡng đa dạng, cân bằng sẽ cung cấp đủ vi chất để hệ miễn dịch hoạt động tối ưu. Dưới đây là 10 siêu thực phẩm vàng nên có trong bữa ăn hàng ngày:</p>
<h3>1. Trái cây có múi (cam, quýt, bưởi, chanh)</h3>
<p>Giàu vitamin C giúp tăng sản xuất bạch cầu. 1 quả cam cỡ vừa cung cấp khoảng 70mg vitamin C, đáp ứng gần 80% nhu cầu hàng ngày.</p>
<h3>2. Ớt chuông đỏ</h3>
<p>Lượng vitamin C gấp 3 lần cam (190mg/100g), đồng thời giàu beta-caroten - tiền chất của vitamin A tốt cho da và niêm mạc.</p>
<h3>3. Bông cải xanh (súp lơ xanh)</h3>
<p>Dồi dào vitamin A, C, E, chất xơ và chất chống oxy hóa. Nên hấp hoặc xào nhẹ để giữ nguyên dinh dưỡng.</p>
<h3>4. Tỏi</h3>
<p>Chứa allicin có tác dụng kháng khuẩn, kháng virus mạnh. Ăn 1-2 tép tỏi sống/ngày giúp giảm tần suất cảm cúm.</p>
<h3>5. Gừng</h3>
<p>Giảm viêm, giảm đau họng, buồn nôn. Trà gừng mật ong ấm là lựa chọn tuyệt vời vào buổi sáng.</p>
<h3>6. Rau bina (cải bó xôi)</h3>
<p>Giàu beta-caroten, folate, sắt và vitamin C. Kết hợp với chanh để tăng hấp thu sắt.</p>
<h3>7. Sữa chua không đường</h3>
<p>Cung cấp lợi khuẩn probiotic giúp cân bằng hệ vi sinh đường ruột - nơi chiếm 70% tế bào miễn dịch cơ thể.</p>
<h3>8. Hạnh nhân</h3>
<p>Nguồn vitamin E và chất béo lành mạnh. Một nắm 30g hạnh nhân/ngày đã đủ nhu cầu vitamin E.</p>
<h3>9. Nghệ</h3>
<p>Curcumin trong nghệ là chất chống viêm mạnh mẽ, hỗ trợ điều hòa miễn dịch. Kết hợp với tiêu đen để tăng hấp thu.</p>
<h3>10. Trà xanh</h3>
<p>Flavonoid và EGCG giúp tăng cường tế bào T diệt virus. Uống 2-3 tách/ngày sau bữa ăn.</p>
<p><strong>Lưu ý:</strong> Ngoài dinh dưỡng, hãy kết hợp ngủ đủ, vận động và tiêm vaccine đầy đủ để bảo vệ sức khỏe toàn diện.</p>`},
    {id:3, tag:'Nhi khoa', title:'Lịch tiêm chủng đầy đủ cho trẻ từ 0 đến 6 tuổi', img:'images/news/n3.png', date:'10/03/2026', author:'BS. Vân Khanh',
        excerpt:'Tiêm chủng đầy đủ và đúng lịch là phương pháp phòng bệnh hiệu quả nhất, tiết kiệm nhất và an toàn nhất cho trẻ em. Theo khuyến cáo của Tổ chức Y tế Thế giới và Bộ Y tế Việt Nam, cha mẹ cần đảm bảo con được tiêm đủ các mũi vaccine quan trọng trong 6 năm đầu đời để bảo vệ bé khỏi hơn 14 bệnh truyền nhiễm nguy hiểm như lao, bạch hầu, ho gà, uốn ván, viêm gan B, sởi, rubella, thủy đậu...',
        content:`<p>Tiêm chủng là một trong những thành tựu y học vĩ đại nhất, giúp giảm 2-3 triệu ca tử vong trẻ em mỗi năm trên toàn cầu. Dưới đây là lịch tiêm chủng đầy đủ theo khuyến cáo của Bộ Y tế Việt Nam kết hợp chương trình tiêm chủng dịch vụ:</p>
<h3>Sơ sinh (trong 24 giờ đầu)</h3>
<ul><li>Vaccine Lao (BCG) - tiêm trong cánh tay trái</li><li>Viêm gan B mũi 1 (trong 24 giờ đầu sau sinh)</li></ul>
<h3>2 tháng tuổi</h3>
<ul><li>Vaccine 5 trong 1 hoặc 6 trong 1 (bạch hầu, ho gà, uốn ván, bại liệt, Hib, viêm gan B)</li><li>Phế cầu PCV13 mũi 1</li><li>Rotavirus mũi 1 (uống)</li></ul>
<h3>3 tháng tuổi</h3>
<ul><li>Vaccine 5 trong 1/6 trong 1 mũi 2</li><li>Phế cầu PCV13 mũi 2</li><li>Rotavirus mũi 2</li></ul>
<h3>4 tháng tuổi</h3>
<ul><li>Vaccine 5 trong 1/6 trong 1 mũi 3</li><li>Phế cầu PCV13 mũi 3</li><li>Rotavirus mũi 3 (nếu dùng Rotateq)</li></ul>
<h3>6 tháng tuổi</h3>
<ul><li>Cúm mùa mũi 1 (sau đó nhắc lại sau 1 tháng, rồi hàng năm)</li></ul>
<h3>9 tháng tuổi</h3>
<ul><li>Vaccine Sởi đơn</li><li>Viêm não Nhật Bản mũi 1 (Imojev) hoặc hoãn đến 12 tháng với vaccine khác</li></ul>
<h3>12 tháng tuổi</h3>
<ul><li>MMR (Sởi - Quai bị - Rubella) mũi 1</li><li>Thủy đậu mũi 1</li><li>Viêm gan A mũi 1</li><li>Phế cầu PCV13 nhắc lại</li></ul>
<h3>18 tháng tuổi</h3>
<ul><li>Vaccine 5 trong 1/6 trong 1 nhắc lại</li><li>Sởi - Rubella (MR) nhắc</li></ul>
<h3>2-6 tuổi</h3>
<ul><li>Viêm não Nhật Bản mũi nhắc</li><li>Thương hàn</li><li>MMR mũi 2 (4-6 tuổi)</li><li>Thủy đậu mũi 2</li><li>Bạch hầu - ho gà - uốn ván nhắc (DTaP) lúc 4-6 tuổi</li></ul>
<p><strong>Lưu ý quan trọng:</strong> Trước khi tiêm, trẻ cần được khám sàng lọc. Sau tiêm, cha mẹ cần theo dõi ít nhất 30 phút tại cơ sở y tế và 24-48 giờ tại nhà. Đặt lịch tiêm chủng tại MediBook để được các bác sĩ Nhi khoa hàng đầu tư vấn chi tiết.</p>`},
    {id:4, tag:'Da liễu', title:'Cách chăm sóc da mùa hanh khô đúng chuẩn bác sĩ', img:'images/news/n4.png', date:'08/03/2026', author:'BS. Minh Khoa',
        excerpt:'Thời tiết hanh khô, độ ẩm không khí thấp và sự chênh lệch nhiệt độ trong - ngoài nhà khiến làn da mất nước nhanh chóng, dẫn đến khô, bong tróc, nứt nẻ, ngứa rát và thậm chí viêm da cơ địa bùng phát. Bác sĩ Da liễu chia sẻ quy trình chăm sóc da 5 bước khoa học, dễ áp dụng tại nhà với các thành phần và sản phẩm phù hợp cho mọi loại da từ thường, khô đến nhạy cảm.',
        content:`<p>Mùa hanh khô là kẻ thù của làn da. Độ ẩm không khí giảm xuống dưới 40% khiến hàng rào bảo vệ da (lipid barrier) bị tổn thương, gây mất nước qua biểu bì (TEWL) tăng cao. Hậu quả là da khô căng, bong tróc, nhạy cảm, dễ kích ứng. Dưới đây là quy trình 5 bước chuẩn chuyên gia:</p>
<h3>Bước 1: Làm sạch dịu nhẹ</h3>
<p>Chọn sữa rửa mặt không chứa sulfate (SLS, SLES), pH cân bằng 5.5 để không phá vỡ màng acid tự nhiên của da. Rửa mặt bằng nước ấm (không quá nóng) và lau khô bằng khăn mềm, thấm nhẹ không chà xát. Buổi sáng có thể chỉ rửa bằng nước.</p>
<h3>Bước 2: Toner cấp ẩm</h3>
<p>Sử dụng toner chứa Hyaluronic Acid, Panthenol (B5) hoặc Beta-Glucan thay vì toner chứa cồn. Vỗ nhẹ 3-5 lần lên mặt khi da còn ẩm để khóa ẩm tối đa.</p>
<h3>Bước 3: Serum phục hồi</h3>
<p>Lớp serum tập trung các hoạt chất đặc trị: Niacinamide 5% làm dịu và củng cố hàng rào da; Ceramide và Peptides phục hồi; Vitamin C 10-15% sáng da; Retinol 0.3% ban đêm chống lão hóa (tránh dùng chung với Vitamin C).</p>
<h3>Bước 4: Kem dưỡng ẩm khóa ẩm</h3>
<p>Chọn kem dưỡng có kết cấu giàu chứa Shea Butter, Squalane, Ceramide, Cholesterol, Fatty Acids theo tỉ lệ 3:1:1. Ban đêm có thể dùng sleeping mask 1-2 lần/tuần.</p>
<h3>Bước 5: Chống nắng ban ngày</h3>
<p>SPF 30+ PA+++ là tối thiểu, kể cả khi trời râm hay mùa đông. Tia UVA xuyên qua cửa kính và mây. Thoa lại mỗi 2-3 giờ nếu hoạt động ngoài trời.</p>
<h3>Lời khuyên thêm</h3>
<ul><li>Uống đủ 2 lít nước/ngày, bổ sung Omega-3 từ cá, hạt óc chó</li><li>Dùng máy tạo ẩm trong phòng ngủ, duy trì độ ẩm 50-60%</li><li>Tránh tắm nước quá nóng trên 15 phút</li><li>Nếu da bong tróc nặng, mẩn đỏ kéo dài, hãy đặt lịch khám Da liễu ngay</li></ul>`},
    {id:5, tag:'Sản phụ khoa', title:'Những điều mẹ bầu cần biết trong 3 tháng đầu thai kỳ', img:'images/news/n5.png', date:'05/03/2026', author:'BS. Lan Phương',
        excerpt:'Tam cá nguyệt đầu tiên (3 tháng đầu thai kỳ) là giai đoạn vàng quyết định sự phát triển toàn diện của thai nhi. Đây là thời điểm các cơ quan quan trọng như tim, não, tủy sống, tay chân được hình thành và cũng là giai đoạn dễ sảy thai nhất. Bác sĩ Sản phụ khoa hướng dẫn mẹ bầu chế độ dinh dưỡng, vận động, những điều nên và không nên làm, các mốc khám thai quan trọng để có một thai kỳ khỏe mạnh.',
        content:`<p>Ba tháng đầu thai kỳ (từ tuần 1 đến tuần 13) là giai đoạn đặc biệt quan trọng. Các cơ quan quan trọng của thai nhi như ống thần kinh, tim, não, cột sống được hình thành trong những tuần đầu. Đây cũng là thời điểm nguy cơ sảy thai cao nhất, chiếm 80% các ca sảy thai tự nhiên.</p>
<h3>Dinh dưỡng</h3>
<p><strong>Bổ sung acid folic 400-800mcg/ngày</strong> để phòng dị tật ống thần kinh. Nên uống trước khi mang thai 3 tháng và duy trì đến hết tam cá nguyệt đầu.</p>
<p><strong>Sắt 30-60mg/ngày</strong> phòng thiếu máu. <strong>Canxi 1000mg/ngày</strong> từ sữa, cá nhỏ ăn cả xương.</p>
<p>Ăn đủ protein từ thịt nạc, cá, trứng, đậu. Tránh thực phẩm sống (sushi, gỏi), phô mai chưa tiệt trùng, gan động vật, cá biển lớn (chứa thủy ngân).</p>
<h3>Chất kích thích cần tránh</h3>
<ul><li>Tuyệt đối không rượu bia - gây hội chứng rượu bào thai</li><li>Hạn chế caffeine dưới 200mg/ngày (tương đương 1 tách cà phê)</li><li>Không hút thuốc lá, tránh khói thuốc thụ động</li><li>Không tự ý dùng thuốc - luôn hỏi ý kiến bác sĩ</li></ul>
<h3>Khám thai định kỳ</h3>
<ul><li><strong>Tuần 6-8:</strong> Siêu âm xác định tim thai, vị trí làm tổ</li><li><strong>Tuần 11-13+6 ngày:</strong> Siêu âm độ mờ da gáy kết hợp xét nghiệm Double Test hoặc NIPT để tầm soát Down, Edwards, Patau</li><li>Xét nghiệm máu tổng quát, nước tiểu, nhóm máu, Rh, viêm gan B, giang mai, HIV, Rubella</li></ul>
<h3>Vận động và sinh hoạt</h3>
<p>Đi bộ nhẹ 30 phút/ngày, yoga bầu. Tránh nâng vật nặng trên 5kg, tránh đi giày cao gót. Ngủ đủ 8-9 giờ, nằm nghiêng trái khi bụng lớn.</p>
<h3>Dấu hiệu cần đi khám ngay</h3>
<p>Ra máu âm đạo, đau bụng dữ dội, sốt cao, nôn không ngừng, tiểu buốt. Hãy đặt lịch khám Sản phụ khoa tại MediBook để được theo dõi thai kỳ bởi các bác sĩ chuyên gia hàng đầu.</p>`},
    {id:6, tag:'Tâm lý', title:'Stress kéo dài và những hệ lụy không ngờ tới', img:'images/news/n6.png', date:'03/03/2026', author:'BS. Văn Tâm',
        excerpt:'Stress ngắn hạn có thể giúp cơ thể tỉnh táo, tập trung và phản ứng nhanh. Tuy nhiên, khi stress chuyển thành mạn tính kéo dài hàng tuần, hàng tháng, nó có thể tàn phá sức khỏe thể chất và tinh thần theo nhiều cách không ngờ tới. Từ bệnh tim mạch, viêm loét dạ dày đến suy giảm miễn dịch, rối loạn giấc ngủ, trầm cảm - stress mạn tính là kẻ thù thầm lặng mà bất kỳ ai trong xã hội hiện đại cũng cần hiểu rõ và biết cách kiểm soát.',
        content:`<p>Stress là phản ứng tự nhiên của cơ thể trước các tác nhân gây áp lực. Khi stress tích cực giúp chúng ta tập trung và hoàn thành mục tiêu, stress mạn tính lại là kẻ thù âm thầm tàn phá sức khỏe. Theo WHO, stress là "đại dịch sức khỏe" của thế kỷ 21, liên quan đến 75-90% các ca khám bệnh.</p>
<h3>1. Hệ tim mạch</h3>
<p>Cortisol cao liên tục làm tăng huyết áp, nhịp tim, co mạch máu. Nguy cơ nhồi máu cơ tim tăng 27%, đột quỵ tăng 45% ở người stress kéo dài. Cholesterol LDL xấu cũng tăng, dẫn đến xơ vữa động mạch.</p>
<h3>2. Hệ tiêu hóa</h3>
<p>Viêm loét dạ dày, trào ngược thực quản, hội chứng ruột kích thích (IBS), táo bón hoặc tiêu chảy mạn. Stress làm giảm lợi khuẩn đường ruột, tăng vi khuẩn có hại.</p>
<h3>3. Hệ miễn dịch</h3>
<p>Cortisol cao ức chế tế bào T và B, khiến cơ thể dễ nhiễm bệnh, vết thương chậm lành, cảm cúm thường xuyên. Người stress kéo dài có nguy cơ mắc bệnh tự miễn cao hơn.</p>
<h3>4. Sức khỏe tâm thần</h3>
<p>Trầm cảm, lo âu, rối loạn hoảng sợ, mất ngủ, kiệt sức nghề nghiệp (burnout). Stress còn làm teo vùng hippocampus - trung tâm trí nhớ, gây suy giảm nhận thức.</p>
<h3>5. Nội tiết và cân nặng</h3>
<p>Tăng cảm giác thèm ăn đồ ngọt, béo, tăng cân vùng bụng. Mất cân bằng hormone sinh dục gây rối loạn kinh nguyệt, giảm ham muốn, vô sinh.</p>
<h3>6. Da, tóc, móng</h3>
<p>Mụn trứng cá, chàm, vảy nến, rụng tóc, tóc bạc sớm, móng giòn dễ gãy.</p>
<h3>Cách kiểm soát stress hiệu quả</h3>
<ul><li>Thiền chánh niệm (mindfulness) 10-20 phút/ngày</li><li>Tập thể dục đều đặn giải phóng endorphin</li><li>Ngủ đủ 7-9 giờ, giữ giờ ngủ cố định</li><li>Kết nối xã hội, chia sẻ với người thân</li><li>Giới hạn sử dụng mạng xã hội, tin tiêu cực</li><li>Liệu pháp nhận thức hành vi (CBT) với chuyên gia</li></ul>
<p>Nếu stress kéo dài trên 2 tuần ảnh hưởng công việc, giấc ngủ, hãy đặt lịch khám Tâm lý tại MediBook để được hỗ trợ kịp thời.</p>`},
    {id:7, tag:'Nội tiết', title:'Tiểu đường type 2: Phòng ngừa và kiểm soát hiệu quả', img:'images/news/n7.png', date:'01/03/2026', author:'BS. Hoàng Thị Mai',
        excerpt:'Tiểu đường type 2 đang trở thành vấn đề sức khỏe cộng đồng nghiêm trọng tại Việt Nam với hơn 5 triệu người mắc và con số này đang tăng nhanh, đặc biệt ở người trẻ. Điều đáng chú ý là 50% bệnh nhân không biết mình đang mắc bệnh cho đến khi xuất hiện biến chứng nguy hiểm ở mắt, thận, tim mạch, thần kinh. Tin tốt là tiểu đường type 2 hoàn toàn có thể phòng ngừa và kiểm soát hiệu quả nếu hiểu đúng và thay đổi lối sống kịp thời.',
        content:`<p>Tiểu đường type 2 chiếm 90-95% các ca tiểu đường, đặc trưng bởi tình trạng kháng insulin và suy giảm chức năng tế bào beta tuyến tụy. Tại Việt Nam, khoảng 7% người trưởng thành mắc bệnh và đáng báo động là tỷ lệ trẻ hóa ngày càng tăng ở người 30-40 tuổi.</p>
<h3>Yếu tố nguy cơ</h3>
<ul><li>Thừa cân, béo phì (BMI &gt; 23 với người châu Á)</li><li>Vòng eo &gt; 90cm (nam), &gt; 80cm (nữ)</li><li>Tiền sử gia đình có người mắc</li><li>Ít vận động, ăn nhiều đường tinh luyện</li><li>Cao huyết áp, rối loạn lipid máu</li><li>Phụ nữ bị tiểu đường thai kỳ trước đây</li></ul>
<h3>Dấu hiệu cảnh báo</h3>
<p>Khát nước nhiều, tiểu nhiều (đặc biệt ban đêm), sụt cân không rõ lý do, mệt mỏi, nhìn mờ, vết thương lâu lành, nhiễm trùng da và đường tiết niệu tái đi tái lại.</p>
<h3>Chẩn đoán</h3>
<p>Đường huyết lúc đói ≥ 126 mg/dL (7 mmol/L), hoặc đường huyết 2 giờ sau nghiệm pháp dung nạp glucose ≥ 200 mg/dL, hoặc HbA1c ≥ 6.5%.</p>
<h3>5 nguyên tắc vàng phòng ngừa</h3>
<h4>1. Kiểm soát cân nặng</h4>
<p>Duy trì BMI 18.5-23. Giảm 5-7% trọng lượng có thể giảm 58% nguy cơ mắc tiểu đường.</p>
<h4>2. Vận động đều đặn</h4>
<p>150 phút hoạt động vừa/tuần, chia đều các ngày. Đi bộ sau ăn 10-15 phút giúp giảm đường huyết sau ăn.</p>
<h4>3. Ăn ít đường tinh luyện</h4>
<p>Ưu tiên ngũ cốc nguyên hạt (yến mạch, gạo lứt, quinoa), rau xanh, protein nạc. Hạn chế nước ngọt, bánh kẹo, cơm trắng số lượng lớn.</p>
<h4>4. Ngủ đủ và kiểm soát stress</h4>
<p>Thiếu ngủ và stress làm tăng cortisol, kháng insulin. Ngủ 7-8 giờ/đêm.</p>
<h4>5. Tầm soát định kỳ</h4>
<p>Người trên 35 tuổi hoặc có yếu tố nguy cơ nên đo đường huyết, HbA1c mỗi năm.</p>
<h3>Kiểm soát khi đã mắc bệnh</h3>
<p>Kết hợp chế độ ăn - vận động - thuốc theo chỉ định bác sĩ. Đo đường huyết tại nhà, khám mắt và bàn chân định kỳ. Đặt lịch khám Nội tiết tại MediBook để được tư vấn phác đồ cá nhân hóa.</p>`},
    {id:8, tag:'Hô hấp', title:'Hen suyễn ở trẻ em: Dấu hiệu sớm và cách xử trí', img:'images/news/n8.png', date:'27/02/2026', author:'BS. Lý Hoàng Sơn',
        excerpt:'Hen suyễn ở trẻ em thường bị nhầm lẫn với các bệnh cảm cúm, viêm phế quản thông thường khiến nhiều ca phát hiện muộn, ảnh hưởng nghiêm trọng đến sự phát triển thể chất và chất lượng cuộc sống của trẻ. Theo thống kê, hen suyễn là bệnh mạn tính phổ biến nhất ở trẻ em với tỷ lệ 8-10%, và các cơn hen nặng có thể gây tử vong nếu không xử trí kịp thời. Bác sĩ Hô hấp hướng dẫn cha mẹ cách nhận biết sớm, xử trí đúng và phòng ngừa hiệu quả cho con.',
        content:`<p>Hen phế quản (hen suyễn) là bệnh viêm mạn tính đường thở, đặc trưng bởi sự co thắt cơ trơn phế quản, phù nề niêm mạc và tăng tiết dịch nhầy. Ở trẻ em, bệnh thường xuất hiện trước 5 tuổi và có thể kéo dài đến tuổi trưởng thành nếu không được điều trị đúng cách.</p>
<h3>Dấu hiệu nhận biết sớm</h3>
<ul><li><strong>Ho dai dẳng</strong>: đặc biệt về đêm, sáng sớm, sau vận động hoặc cười lớn</li><li><strong>Khò khè</strong>: tiếng rít khi thở, nghe rõ nhất khi trẻ thở ra</li><li><strong>Khó thở</strong>: thở nhanh, thở gấp, cánh mũi phập phồng, rút lõm ngực</li><li><strong>Tức ngực</strong>: trẻ lớn mô tả cảm giác nặng ngực</li><li><strong>Mệt mỏi, giảm hoạt động</strong>: không chơi đùa như bình thường</li></ul>
<h3>Yếu tố khởi phát cơn hen</h3>
<ul><li>Dị nguyên: bụi nhà, mạt bụi, lông thú, phấn hoa, nấm mốc</li><li>Nhiễm virus đường hô hấp trên</li><li>Không khí lạnh, ô nhiễm, khói thuốc lá</li><li>Vận động gắng sức</li><li>Cảm xúc mạnh (khóc, cười to)</li><li>Một số thực phẩm, thuốc (aspirin, NSAIDs)</li></ul>
<h3>Chẩn đoán</h3>
<p>Dựa vào triệu chứng lâm sàng, tiền sử gia đình, đo chức năng hô hấp (FeNO, spirometry) với trẻ trên 5 tuổi. Xét nghiệm dị nguyên để xác định yếu tố khởi phát.</p>
<h3>Xử trí khi trẻ lên cơn hen</h3>
<ol><li><strong>Giữ bình tĩnh</strong>, cho trẻ ngồi thẳng hoặc hơi nghiêng người về phía trước, tránh nằm</li><li><strong>Sử dụng thuốc cắt cơn</strong> (Salbutamol - Ventolin) dạng xịt qua buồng đệm (spacer) theo chỉ định bác sĩ: 2-4 nhát, có thể lặp lại sau 20 phút</li><li><strong>Theo dõi</strong>: nếu sau 20 phút không đỡ, tiếp tục nhát thứ 2</li><li><strong>Gọi cấp cứu 115 hoặc đưa đi bệnh viện ngay</strong> nếu: môi tím tái, không nói được trọn câu, rút lõm lồng ngực nặng, lơ mơ</li></ol>
<h3>Điều trị và phòng ngừa dài hạn</h3>
<ul><li>Thuốc kiểm soát hàng ngày: corticoid dạng hít (ICS) theo bậc điều trị</li><li>Tránh tiếp xúc dị nguyên, giữ nhà sạch, không nuôi thú có lông nếu trẻ dị ứng</li><li>Không hút thuốc trong nhà</li><li>Tiêm vaccine cúm hàng năm, phế cầu</li><li>Khám định kỳ mỗi 3-6 tháng</li></ul>
<p>Đặt lịch khám Hô hấp Nhi tại MediBook để được tư vấn kế hoạch điều trị cá nhân hóa cho bé yêu của bạn.</p>`}
];

const HOSPITALS = [
    {id:1,  name:'Bệnh viện Đại học Y Dược TP.HCM', address:'215 Hồng Bàng, Q.5, TP.HCM', img:'images/hospitals/h1.png',  doctors:120, phone:'028 3855 4269', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Y+D%C6%B0%E1%BB%A3c+TP.HCM&output=embed'},
    {id:2,  name:'Bệnh viện Chợ Rẫy',                address:'201B Nguyễn Chí Thanh, Q.5, TP.HCM', img:'images/hospitals/h2.png',  doctors:180, phone:'028 3855 4137', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+Ch%E1%BB%A3+R%E1%BA%ABy&output=embed'},
    {id:3,  name:'Bệnh viện Từ Dũ',                  address:'284 Cống Quỳnh, Q.1, TP.HCM',        img:'images/hospitals/h3.png',  doctors:95,  phone:'028 5404 2829', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+T%E1%BB%AB+D%C5%A9&output=embed'},
    {id:4,  name:'Bệnh viện Nhi Đồng 1',             address:'341 Sư Vạn Hạnh, Q.10, TP.HCM',      img:'images/hospitals/h4_nhidong1.png',  doctors:88,  phone:'028 3927 1119', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+Nhi+%C4%90%E1%BB%93ng+1&output=embed'},
    {id:5,  name:'Bệnh viện Bạch Mai',               address:'78 Giải Phóng, Đống Đa, Hà Nội',     img:'images/hospitals/h5.png',  doctors:210, phone:'024 3869 3731', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+B%E1%BA%A1ch+Mai&output=embed'},
    {id:6,  name:'Bệnh viện Tâm Anh',                address:'2B Phổ Quang, Tân Bình, TP.HCM',     img:'images/hospitals/h6.png',  doctors:140, phone:'1900 1066',     map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+T%C3%A2m+Anh&output=embed'},
    {id:7,  name:'Bệnh viện Vinmec Central Park',    address:'208 Nguyễn Hữu Cảnh, Bình Thạnh, TP.HCM', img:'images/hospitals/h7.png', doctors:160, phone:'028 3622 1166', map:'https://www.google.com/maps?q=Vinmec+Central+Park&output=embed'},
    {id:8,  name:'Bệnh viện FV',                     address:'6 Nguyễn Lương Bằng, Quận 7, TP.HCM', img:'images/hospitals/h8.png', doctors:110, phone:'028 5411 3333', map:'https://www.google.com/maps?q=FV+Hospital+TP.HCM&output=embed'},
    {id:9,  name:'Bệnh viện Hoàn Mỹ Sài Gòn',        address:'60-60A Phan Xích Long, Phú Nhuận, TP.HCM', img:'images/hospitals/h9.png', doctors:95, phone:'028 3990 2468', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+Ho%C3%A0n+M%E1%BB%B9+S%C3%A0i+G%C3%B2n&output=embed'},
    {id:10, name:'Bệnh viện Quốc tế City',           address:'3 Đường Số 17A, Bình Tân, TP.HCM',   img:'images/hospitals/h10.png', doctors:80,  phone:'028 6280 3333', map:'https://www.google.com/maps?q=City+International+Hospital+TPHCM&output=embed'},
    {id:11, name:'Bệnh viện Pasteur TP.HCM',         address:'167 Pasteur, Quận 3, TP.HCM',        img:'images/hospitals/h11.png', doctors:75,  phone:'028 3823 0352', map:'https://www.google.com/maps?q=Vi%E1%BB%87n+Pasteur+TPHCM&output=embed'},
    {id:12, name:'Bệnh viện Quận Thủ Đức',           address:'29 Phú Châu, TP. Thủ Đức, TP.HCM',   img:'images/hospitals/h12.png', doctors:120, phone:'028 3896 9019', map:'https://www.google.com/maps?q=B%E1%BB%87nh+vi%E1%BB%87n+TP.+Th%E1%BB%A7+%C4%90%E1%BB%A9c&output=embed'}
];

const TESTIMONIALS = [
    {name:'Nguyễn Thu Hà', role:'Sinh viên Y khoa - ĐH Y Dược', img:'images/testimonials/t1.png', rating:5, text:'Đặt lịch nhanh gọn, bác sĩ tận tâm. MediBook giúp tôi tiết kiệm hàng giờ chờ đợi.'},
    {name:'Trần Minh Quân', role:'Kỹ sư phần mềm - Bình Thạnh', img:'images/testimonials/t2.png', rating:5, text:'Giao diện thân thiện, chọn bác sĩ theo đánh giá rất minh bạch. Đã giới thiệu cho cả công ty.'},
    {name:'Phạm Thị Lan', role:'Giáo viên - Tân Bình', img:'images/testimonials/t3.png', rating:5, text:'Mẹ tôi lớn tuổi nên tôi đặt lịch online giúp bà. Có nhắc lịch qua SMS rất tiện.'},
    {name:'Lê Hoàng Nam', role:'Doanh nhân - Q.7', img:'images/testimonials/t4.png', rating:5, text:'Khám trực tuyến qua video call rất mượt. Bác sĩ chuyên nghiệp, đơn thuốc gửi qua email.'},
    {name:'Võ Thị Mai Anh', role:'Sinh viên - HUTECH', img:'images/testimonials/t5.png', rating:5, text:'Mình đã đặt lịch khám da liễu, được tư vấn chi tiết. Giá hợp lý cho sinh viên.'},
    {name:'Nguyễn Văn Tùng', role:'Lập trình viên - Quận 2', img:'images/testimonials/t6.png', rating:4, text:'App tốt, đặt được nhiều bác sĩ ở các bệnh viện lớn. Cần cải thiện thêm tính năng tìm kiếm.'},
    {name:'Hoàng Thị Phương', role:'Nhân viên văn phòng - Q.10', img:'images/testimonials/t7.png', rating:5, text:'Lần đầu dùng đã ấn tượng. Có nhắc lịch tiêm chủng cho bé rất chu đáo.'},
    {name:'Lý Quốc Bảo', role:'Sinh viên - ĐH Bách Khoa', img:'images/testimonials/t8.png', rating:5, text:'Khám sức khỏe định kỳ chỉ mất 30 phút. Hồ sơ bệnh án lưu trên app rất tiện.'},
    {name:'Đỗ Thị Hồng Nhung', role:'Kế toán - Quận 3', img:'images/testimonials/t9.png', rating:5, text:'Bác sĩ Tâm Lý trên MediBook giúp tôi vượt qua giai đoạn khó khăn. Cảm ơn rất nhiều!'},
    {name:'Phan Văn Hải', role:'Giám đốc - Phú Nhuận', img:'images/testimonials/t10.png', rating:5, text:'Đã sử dụng 2 năm cho cả gia đình. Dịch vụ ngày càng cải thiện, đáng tin cậy.'},
    {name:'Trương Thị Yến Nhi', role:'Sinh viên Dược - ĐHQG', img:'images/testimonials/t11.png', rating:5, text:'Là sinh viên Dược, mình đánh giá cao thông tin bác sĩ minh bạch và chính xác.'},
    {name:'Bùi Quang Minh', role:'Bác sĩ Nội trú', img:'images/testimonials/t12.png', rating:5, text:'Tôi vừa là bác sĩ vừa là người dùng. MediBook là nền tảng chuyên nghiệp nhất hiện nay.'},
    {name:'Cao Thị Tuyết Mai', role:'Mẹ bỉm sữa - Tân Phú', img:'images/testimonials/t13.png', rating:5, text:'Đặt lịch khám cho con vô cùng tiện lợi. Có cả tính năng tư vấn từ xa khi bé sốt đêm.'},
    {name:'Đinh Thanh Tùng', role:'Marketer - Quận 1', img:'images/testimonials/t14.png', rating:4, text:'UI/UX rất tốt. Nên có thêm chương trình ưu đãi cho khách hàng thân thiết.'},
    {name:'Lưu Thị Bích Trâm', role:'Sinh viên Báo chí', img:'images/testimonials/t15.png', rating:5, text:'Mình recommend MediBook cho tất cả bạn bè. Dịch vụ chăm sóc sau khám cũng rất tốt.'},
    {name:'Hồ Văn Thành', role:'Tài xế công nghệ', img:'images/testimonials/t16.png', rating:5, text:'Khám tổng quát giá tốt, đặt lịch bằng app rất dễ. Bác sĩ tận tâm với người lao động.'},
    {name:'Trần Mỹ Duyên', role:'Designer - Quận 7', img:'images/testimonials/t17.png', rating:5, text:'Giao diện đẹp, intuitive. Là designer mình rất ưng ý với cách bố trí thông tin.'},
    {name:'Vũ Khắc Long', role:'Sinh viên CNTT - HCMUS', img:'images/testimonials/t18.png', rating:5, text:'Performance app rất ổn, mượt trên cả Android cũ. Code chắc tối ưu tốt!'},
    {name:'Nguyễn Thanh Hằng', role:'Quản lý nhân sự', img:'images/testimonials/t19.png', rating:5, text:'Công ty chúng tôi dùng MediBook cho gói khám sức khỏe nhân viên. Rất hài lòng!'},
    {name:'Phạm Anh Tuấn', role:'Sinh viên - ĐH Kinh tế', img:'images/testimonials/t20.png', rating:5, text:'Đặt lịch nha khoa cuối tuần, bác sĩ vẫn nhiệt tình tư vấn. 10 điểm cho MediBook!'}
];

const SPONSORS = [
    {name:'Bệnh viện Tâm Anh',     logo:'images/sponsors/tamanh.png'},
    {name:'Bệnh viện Hoàn Mỹ',     logo:'images/sponsors/hoanmy.png'},
    {name:'FV Hospital',           logo:'images/sponsors/fv.png'},
    {name:'Bệnh viện An Sinh',     logo:'images/sponsors/ansinh.png'},
    {name:'Viện Pasteur TP.HCM',   logo:'images/sponsors/pasteur.png'},
    {name:'MEDLATEC',              logo:'images/sponsors/medlatec.png'},
    {name:'BV Đa khoa Xanh Pôn',   logo:'images/sponsors/xanhpon.png'}
];
