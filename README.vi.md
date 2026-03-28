# JavaScript Data Structures - Hướng Dẫn Toàn Diện

> **Tạo bởi:** ITPrep Team  
> **Mục Đích:** Giúp bạn làm chủ các cấu trúc dữ liệu JavaScript từ cơ bản đến nâng cao

 **Kho tài liệu SEO-friendly về Cấu Trúc Dữ Liệu JavaScript** - Từ lý thuyết đến thực hành

## Cấu Trúc Dữ Liệu Là Gì?

Cấu trúc dữ liệu là cách **tổ chức và lưu trữ dữ liệu** trong bộ nhớ máy tính để có thể **truy cập và sửa đổi dữ liệu một cách hiệu quả**. 

Mỗi cấu trúc dữ liệu có những **ưu và nhược điểm** khác nhau. Việc chọn cấu trúc dữ liệu phù hợp là **kỹ năng quan trọng** trong lập trình.

## Tại Sao Phải Học Cấu Trúc Dữ Liệu?

 **80% câu hỏi phỏng vấn kỹ thuật** liên quan đến cấu trúc dữ liệu  
 **Viết code tối ưu** - hiểu được hiệu suất của từng cấu trúc  
 **Giải quyết vấn đề phức tạp** - chọn cấu trúc phù hợp cho bài toán  
 **Nên tảng vững chắc** cho các chủ đề nâng cao: thuật toán, hệ thống, AI  

## Các Cấu Trúc Dữ Liệu JavaScript

### 1. **Array (Mảng)** - Cấu Trúc Cơ Bản
**Khái niệm:** Lưu trữ nhiều giá trị trong một danh sách có thứ tự  
**Ứng dụng:** Lưu danh sách sinh viên, tích điểm, chứng chỉ  
**Thời gian truy cập:** O(1) - **Nhanh nhất**  
**Thời gian chèn/xóa:** O(n) - phụ thuộc vị trí

 **[Tìm hiểu thêm](src/data-structures/array/README.vi.md)** | **[Xem ví dụ code](src/data-structures/array/sample.js)**

---

### 2. **Stack (Ngăn Xếp - LIFO)** - Vào Sau Ra Trước
**Khái niệm:** Phần tử được thêm vào **cuối cùng** sẽ được lấy ra **đầu tiên**  
**Hình ảnh:** Như chồng cạp - bạn lấy từ trên cùng  
**Ứng dụng thực tế:**
- **Nút Back** trên trình duyệt (quay lại trang trước)
-  **Hoàn tác/Làm lại** (Ctrl+Z / Ctrl+Y)
- **Call Stack** trong JavaScript Engine

 **[Tìm hiểu thêm](src/data-structures/stack/README.vi.md)** | **[Xem ví dụ code](src/data-structures/stack/sample.js)**

---

### 3. **Queue (Hàng Đợi - FIFO)** - Vào Trước Ra Trước
**Khái niệm:** Phần tử được thêm vào **đầu tiên** sẽ được lấy ra **đầu tiên**  
**Hình ảnh:** Như xếp hàng ở quầy vé - ai đến trước được phục vụ trước  
**Ứng dụng thực tế:**
- **Hàng đợi in** (lệnh in được xử lý theo thứ tự)
- **Customer Service** (khách hàng chờ tới lượt)
- **Lập lịch tác vụ** (CPU xử lý theo thứ tự)
- **BFS - Tìm kiếm theo chiều rộng** (duyệt đồ thị)

 **[Tìm hiểu thêm](src/data-structures/queue/README.vi.md)** | **[Xem ví dụ code](src/data-structures/queue/sample.js)**

---

### 4. **Linked List (Danh Sách Liên Kết)** - Chuỗi Các Nút
**Khái niệm:** Mỗi phần tử (nút) chứa **dữ liệu** và **con trỏ** tới phần tử tiếp theo  
**Ưu điểm:** Chèn/xóa nhanh - O(1)  
**Nhược điểm:** Truy cập chậm - O(n)  
**Ứng dụng:**
- **Playlist nhạc** (bài này dẫn tới bài tiếp theo)
- **Quản lý bộ nhớ** của hệ điều hành
- **Liên kết trong HTML** (chuyển hướng trang)

 **[Tìm hiểu thêm](src/data-structures/linked-list/README.vi.md)** | **[Xem ví dụ code](src/data-structures/linked-list/sample.js)**

---

### 5. **Heap (Đống)** - Cây Nhị Phân Đặc Biệt
**Khái niệm:** Cây nhị phân có **tính chất đặc biệt** - cha luôn lớn hơn (Max Heap) hoặc nhỏ hơn (Min Heap) con  
**Ứng dụng:**
- **Độ ưu tiên** (xử lý cấp độ cao trước)
- **Tìm K phần tử lớn nhất/nhỏ nhất**
- **Dijkstra's Algorithm** (tìm đường đi ngắn nhất)
- **Sorting hiệu quả** (Heap Sort)

 **[Tìm hiểu thêm](src/data-structures/heap/README.vi.md)** | **[Xem ví dụ code](src/data-structures/heap/sample.js)**

---

## So Sánh Nhanh Các Cấu Trúc Dữ Liệu

| Cấu Trúc | Truy Cập | Chèn | Xóa | Khi Nào Dùng |
|---------|---------|------|------|---------|
| **Array** | O(1) | O(n) | O(n) | Truy cập nhanh |
| **Stack** | O(n) | O(1) | O(1) | Hoàn tác, lịch sử |
| **Queue** | O(n) | O(1) | O(1) | Lập lịch, in |
| **Linked List** | O(n) | O(1) | O(1) | Chèn/xóa nhiều |
| **Heap** | O(1) | O(log n) | O(log n) | Ưu tiên, sắp xếp |

## Lộ Trình Học Tập

```
Tuần 1: Nền Tảng
├─ Hiểu Big O Notation (O(1), O(n), O(log n)...)
└─ Array - cấu trúc cơ bản

Tuần 2: LIFO & FIFO
├─ Stack - ứng dụng Hoàn tác/Làm lại
└─ Queue - ứng dụng Lập lịch

Tuần 2: Cấu Trúc Liên Kết
└─ Linked List - Nút & Con trỏ

Tuần 2: Cấu Trúc Nâng Cao
└─ Heap - Cây nhị phân đặc biệt
```

## Big O Notation - Độ Phức Tạp Thuật Toán

**Đây là kiến thức QUAN TRỌNG** để hiểu hiệu suất của từng cấu trúc dữ liệu:

| Ký Hiệu | Tên Gọi | Ví Dụ | Tốc Độ |
|---------|---------|--------|--------|
| O(1) | Constant | Truy cập phần tử mảy | Nhanh nhất |
| O(log n) | Logarithmic | Binary Search | Rất nhanh |
| O(n) | Linear | Vòng lặp qua mảy | Trung bình |
| O(n log n) | Linearithmic | Merge Sort | Chậm |
| O(n²) | Quadratic | Bubble Sort | Rất chậm |
| O(2ⁿ) | Exponential | Brute Force | Rất rất chậm |

**Tip:** Với n = 1,000,000:
- O(1) = 1 phép toán
- O(log n) = 20 phép toán
- O(n) = 1 triệu phép toán
- O(n²) = 1 tỷ tỷ phép toán

## Bắt Đầu Học

### Bước 1: Chọn Cấu Trúc Để Học
Nhấp vào một trong những cấu trúc ở trên để xem:
- Lý thuyết chi tiết (README.vi.md)
- Ví dụ code có comment (sample.js)

### Bước 2: Đọc Lý Thuyết
Mỗi file README.vi.md bao gồm:
- Định nghĩa và khái niệm
- Ứng dụng trong thực tế
- So sánh với cấu trúc khác
- Câu hỏi phỏng vấn thường gặp

### Bước 3: Nghiên Cứu Code Ví Dụ
File sample.js chứa:
- Hiện thực từng phương thức
- Ví dụ thực tế có comment chi tiết
- Cách sử dụng từng hàm

### Bước 4: Thực Hành
Sao chép code ví dụ và:
- Chạy trong Node.js hoặc trình duyệt
- Sửa đổi và thử nghiệm
- Viết thêm ví dụ của riêng bạn

## Mục Tiêu Học Tập

**Sau khi hoàn thành khóa học này, bạn sẽ:**

- Hiểu **kỹ lưỡng** từng cấu trúc dữ liệu
- Biết **khi nào dùng** từng cấu trúc
- Có thể **viết code hiệu quả** với hiệu suất tốt
- **Tự tin** trả lời câu hỏi phỏng vấn
- Có **nền tảng vững** cho các chủ đề nâng cao

## Thứ Tự Đề Xuất Để Học

### Dành Cho Người Mới Bắt Đầu
1. Array (cấu trúc cơ bản)
2. Stack (dễ hiểu, ứng dụng nhiều)
3. Queue (tương tự Stack nhưng nguyên tắc khác)
4. Linked List (khái niệm con trỏ)
5. Heap (cấp độ cao hơn)

### Dành Cho Người Có Kinh Nghiệm
- Stack & Queue (ứng dụng phức tạp)
- Linked List (các biến thể)
- Heap (Heap Sort, Priority Queue)

## Liên Kết Nhanh

| Cấu Trúc | Lý Thuyết | Code Ví Dụ |
|---------|---------|---------|
| Array | [Đọc](src/data-structures/array/README.vi.md) | [Xem](src/data-structures/array/sample.js) |
| Stack | [Đọc](src/data-structures/stack/README.vi.md) | [Xem](src/data-structures/stack/sample.js) |
| Queue | [Đọc](src/data-structures/queue/README.vi.md) | [Xem](src/data-structures/queue/sample.js) |
| Linked List | [Đọc](src/data-structures/linked-list/README.vi.md) | [Xem](src/data-structures/linked-list/sample.js) |
| Heap | [Đọc](src/data-structures/heap/README.vi.md) | [Xem](src/data-structures/heap/sample.js) |

## Mẹo Học Hiệu Quả

1. **Đọc lý thuyết trước** - Hiểu khái niệm
2. **Chạy code ví dụ** - Thấy nó hoạt động
3. **Sửa đổi code** - Hiểu sâu hơn
4. **Viết code của riêng bạn** - Thực hành
5. **Giải quyết vấn đề** - Áp dụng kiến thức

## Câu Hỏi Thường Gặp

**Q: Tôi cần học all các cấu trúc không?**  
A: Không! Bắt đầu với Array, Stack, Queue. Những cái này chiếm 80% phỏng vấn.

**Q: Mất bao lâu để học?**  
A: - tuần với - giờ học/ngày nếu bạn thực hành.

**Q: Tôi cần biết JavaScript nâng cao không?**  
A: Không! JavaScript cơ bản là đủ.

**Q: Những cấu trúc này có trong thực tế không?**  
A: Có! Mỗi cấu trúc đều có ứng dụng thực tế trong lập trình hàng ngày.

##  Bonus: Ứng Dụng Thực Tế

### Stack được dùng trong:
- ⏮ Nút Back/Forward của trình duyệt
-  Hoàn tác/Làm lại (Ctrl+Z / Ctrl+Y)
-  Kiểm tra dấu ngoặc cân bằng
-  Call Stack của JavaScript

### Queue được dùng trong:
-  Hàng đợi máy in
-  Customer Service (xác định lượt phục vụ)
-  Lập lịch tác vụ trong OS
-  BFS (tìm kiếm theo chiều rộng)

### Linked List được dùng trong:
-  Playlist nhạc (bài này → bài tiếp theo)
-  Quản lý bộ nhớ của máy tính
-  Undo History
- Tính năng sao chép trong trình duyệt

### Heap được dùng trong:
- Priority Queue (xử lý theo độ ưu tiên)
- Tìm K phần tử lớn nhất/nhỏ nhất
- Dijkstra's Algorithm
- Heap Sort

## Tạo Bởi

**ITPrep Team** - Đội ngũ giáo dục lập trình

## Liên Hệ & Hỗ Trợ

- Email: itprepteam@gmail.com
- Báo lỗi: [GitHub Issues]
- Đề xuất: [GitHub Discussions]

## Giấy Phép

MIT License - Bạn có thể sử dụng tự do!

---

## Hãy Bắt Đầu Ngay!

Chọn một cấu trúc dữ liệu ở trên và bắt đầu hành trình học tập của bạn. 

**Hãy nhớ:** Hiểu được cấu trúc dữ liệu là bước đầu tiên để trở thành lập trình viên giỏi!

