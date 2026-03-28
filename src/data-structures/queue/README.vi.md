# Queue (Hàng Đợi) - Lý Thuyết Chi Tiết

## Queue Là Gì?

**Queue** (Hàng Đợi) là cấu trúc dữ liệu tuân theo nguyên tắc **FIFO** = **F**irst **I**n **F**irst **O**ut (Vào Trước Ra Trước).

### Hình Ảnh Trực Quan
```
Hàng Đợi In Ấn:

Người xếp hàng:
1. Tài Liệu A (vào trước) ← Lấy ra đầu tiên
2. Tài Liệu B
3. Tài Liệu C  
4. Tài Liệu D (vào sau)  ← Lấy ra cuối cùng

Quy tắc: FIFO - Vào Trước, Ra Trước!
```

## Các Đặc Điểm

| Đặc Điểm | Giải Thích |
|---------|---------|
| **FIFO** | Phần tử vào trước lấy ra trước |
| **Tuyến Tính** | Phần tử sắp xếp thành hàng |
| **Động** | Kích thước có thể tăng giảm |
| **Truy Cập Hạn Chế** | Chỉ truy cập được đầu và cuối |

## Các Phép Toán Cơ Bản

### 1. enqueue(element) - Thêm Vào Cuối
```javascript
queue.enqueue(10);  // Queue: [10]
queue.enqueue(20);  // Queue: [10, 20]
queue.enqueue(30);  // Queue: [10, 20, 30]
```
**Độ Phức Tạp: O(1)** 

### 2. dequeue() - Lấy Ra Từ Đầu
```javascript
queue.dequeue();  // Trả về 10, Queue: [20, 30]
queue.dequeue();  // Trả về 20, Queue: [30]
queue.dequeue();  // Trả về 30, Queue: []
queue.dequeue();  // undefined (queue rỗng)
```
**Độ Phức Tạp: O(1)** 

### 3. front() - Xem Phần Tử Ở Đầu
```javascript
queue.front();  // Trả về phần tử đầu (không lấy ra)
```
**Độ Phức Tạp: O(1)** 

### 4. isEmpty() - Kiểm Tra Rỗng
```javascript
queue.isEmpty();  // true hoặc false
```
**Độ Phức Tạp: O(1)** 

### 5. size() - Lấy Kích Thước
```javascript
queue.size();  // Số phần tử trong queue
```
**Độ Phức Tạp: O(1)** 

## Ứng Dụng Thực Tế

### 1.  Hàng Đợi Máy In

```
Những tài liệu cần in:
1. Report.docx (in trước)
2. Slides.ppt
3. Invoice.xlsx
4. Resume.pdf (in sau)

Quá trình:
→ In Report.docx, Queue: [Slides.ppt, Invoice.xlsx, Resume.pdf]
→ In Slides.ppt, Queue: [Invoice.xlsx, Resume.pdf]
→ In Invoice.xlsx, Queue: [Resume.pdf]
→ In Resume.pdf, Queue: []
```

### 2.  Customer Service - Xác Định Lượt Phục Vụ

```javascript
Khách hàng xếp hàng:
Alice (số vé 1) ← Phục vụ trước
Bob (số vé 2)
Charlie (số vé 3)
Diana (số vé 4) ← Phục vụ sau

Phục vụ:
→ Gọi Alice, Queue: [Bob, Charlie, Diana]
→ Gọi Bob, Queue: [Charlie, Diana]
→ Gọi Charlie, Queue: [Diana]
→ Gọi Diana, Queue: []
```

### 3.  Lập Lịch Tác Vụ (OS)

```
CPU cần xử lý:
Task 1 (5ms) ← Xử lý trước
Task 2 (3ms)
Task 3 (7ms)
Task 4 (2ms) ← Xử lý sau

Quá trình (time slice = 4ms):
→ Task 1: 5ms, không hoàn thành → vào cuối: Task 2, 3, 4, 1(1ms)
→ Task 2: 3ms, hoàn thành
→ Task 3: 7ms, không hoàn thành → vào cuối
...
```

### 4.  BFS - Tìm Kiếm Theo Chiều Rộng

```javascript
Biểu đồ:
      A
     / \
    B   C
   / \
  D   E

BFS từ A:
Queue: [A] → [B, C] → [C, D, E] → [D, E] → [E]
Kết quả: A → B → C → D → E
```

## So Sánh: Stack vs Queue

| Điểm | Stack | Queue |
|-----|-------|-------|
| **Nguyên Tắc** | LIFO | FIFO |
| **Thêm Vào** | Đầu - push() | Cuối - enqueue() |
| **Lấy Ra** | Từ Đầu - pop() | Từ Đầu - dequeue() |
| **Ứng Dụng** | Hoàn tác | Lập lịch |
| **Ví Dụ** | Chồng cạp | Hàng đợi |

## Hiện Thực Queue

### Cách 1: Sử Dụng Array (Có Vấn Đề)
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();  //  O(n) - chậm!
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```
**Vấn Đề:** shift() là O(n), phải dịch chuyển tất cả phần tử

### Cách 2: Sử Dụng Object (Khuyên Dùng)
```javascript
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return result;
  }

  front() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  size() {
    return this.tail - this.head;
  }
}
```
**Ưu Điểm:** dequeue() là O(1) - nhanh!

## Độ Phức Tạp Thời Gian

| Phép Toán | Array Shift | Object |
|---------|---------|---------|
| enqueue() | O(1)  | O(1)  |
| dequeue() | O(n)  | O(1)  |
| front() | O(1)  | O(1)  |
| isEmpty() | O(1)  | O(1)  |
| size() | O(1)  | O(1)  |

**Kết luận:** Dùng Object để dequeue() là O(1)!

## Lưu Trữ Bộ Nhớ

### Object Implementation:
```
Sau khi enqueue(10, 20, 30, 40):

items: {
  0: 10,
  1: 20,
  2: 30,
  3: 40
}
head = 0 (đầu)
tail = 4

dequeue() → Lấy items[0] = 10, head = 1
dequeue() → Lấy items[1] = 20, head = 2

items: {
  2: 30,
  3: 40
}
head = 2 (đầu mới)
tail = 4
```

## Deque - Queue Hai Đầu

**Deque** cho phép thêm/lấy ở **cả hai đầu**:

```javascript
class Deque {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  addFront(element) {
    this.head--;
    this.items[this.head] = element;
  }

  addBack(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;
    this.tail--;
    const result = this.items[this.tail];
    delete this.items[this.tail];
    return result;
  }
}
```

## Câu Hỏi Phỏng Vấn

### Q1: Tại Sao Không Dùng Array.shift()?
**Trả Lời:** Vì shift() là O(n) - phải dịch chuyển tất cả phần tử. Object implementation là O(1) - nhanh hơn.

### Q2: Hiện Thực LRU Cache (Least Recently Used)
```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}
```

### Q3: Sliding Window Maximum
```javascript
function maxSlidingWindow(nums, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Xóa phần tử ngoài window
    while (queue.length > 0 && queue[0] < i - k + 1) {
      queue.shift();
    }

    // Xóa phần tử nhỏ hơn
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    queue.push(i);

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
}
```

## Lưu Ý Quan Trọng

1. **Queue là FIFO** - Vào Trước Ra Trước
2. **Dùng Object, không phải Array** - dequeue() sẽ là O(1)
3. **Tất cả phép toán là O(1)** - Rất nhanh
4. **Dùng cho lập lịch, BFS** - Ứng dụng chính
5. **Deque linh hoạt hơn** - Thêm/lấy ở cả hai đầu

## Liên Kết Liên Quan

-  [Xem Code Ví Dụ](sample.js)
-  [Stack - Cấu Trúc Khác](../stack/README.vi.md)
-  [Trở Lại README Chính](../../README.vi.md)

---

**Queue là nền tảng cho lập lịch tác vụ và BFS!** 

