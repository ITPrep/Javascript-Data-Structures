# Stack (Ngăn Xếp) - Lý Thuyết Chi Tiết

## Stack Là Gì?

**Stack** (Ngăn Xếp) là cấu trúc dữ liệu tuân theo nguyên tắc **LIFO** = **L**ast **I**n **F**irst **O**ut (Vào Sau Ra Trước).

### Hình Ảnh Trực Quan
```
Thêm vào:  
           🟡 ← thêm 40
    🔵 ← thêm 30  
🟢 ← thêm 20
🔴 ← thêm 10 (đầu tiên)

Lấy ra:
🟡 (40) ← Lấy ra đầu tiên (thêm vào cuối cùng)
🔵 (30) ← Lấy ra thứ hai
🟢 (20)
🔴 (10) ← Lấy ra cuối cùng (thêm vào đầu tiên)

Quy tắc: LIFO - Vào Sau, Ra Trước!
```

## Các Đặc Điểm

| Đặc Điểm | Giải Thích |
|---------|---------|
| **LIFO** | Phần tử thêm vào cuối cùng lấy ra đầu tiên |
| **Tuyến Tính** | Phần tử sắp xếp thành hàng |
| **Động** | Kích thước có thể tăng giảm |
| **Truy Cập Hạn Chế** | Chỉ có thể truy cập phần tử ở đầu |

## Các Phép Toán Cơ Bản

### 1. push(element) - Thêm Vào Đầu
```javascript
stack.push(10);  // Stack: [10]
stack.push(20);  // Stack: [10, 20]
stack.push(30);  // Stack: [10, 20, 30]
```
**Độ Phức Tạp: O(1)** ⚡

### 2. pop() - Lấy Ra Từ Đầu
```javascript
stack.pop();  // Trả về 30, Stack: [10, 20]
stack.pop();  // Trả về 20, Stack: [10]
stack.pop();  // Trả về 10, Stack: []
stack.pop();  // undefined (stack rỗng)
```
**Độ Phức Tạp: O(1)** ⚡

### 3. peek() - Xem Phần Tử Ở Đầu
```javascript
stack.peek();  // Trả về phần tử đầu (không lấy ra)
// Không thay đổi stack
```
**Độ Phức Tạp: O(1)** ⚡

### 4. isEmpty() - Kiểm Tra Rỗng
```javascript
stack.isEmpty();  // true hoặc false
```
**Độ Phức Tạp: O(1)** ⚡

### 5. size() - Lấy Kích Thước
```javascript
stack.size();  // Số phần tử trong stack
```
**Độ Phức Tạp: O(1)** ⚡

## Ứng Dụng Thực Tế

### 1. Nút Back Trình Duyệt

```
Bạn truy cập:
1. Google.com
2. Wikipedia.org  
3. GitHub.com

Stack: [Google.com] → [Wikipedia.org] → [GitHub.com] ← Đang xem

Nhấn Back:
→ Pop GitHub.com
→ Stack: [Google.com] → [Wikipedia.org] ← Đang xem
→ Pop Wikipedia.org  
→ Stack: [Google.com] ← Đang xem
```

### 2. Hoàn Tác (Undo)

```
Bạn gõ: H → i → ! 

Stack Undo:
[] → [H] → [H, i] → [H, i, !]

Nhấn Ctrl+Z (Undo):
→ Pop !
→ Văn bản: "Hi"

Nhấn Ctrl+Z lần nữa:
→ Pop i
→ Văn bản: "H"
```

### 3. Call Stack (Cuộc Gọi Hàm)

```javascript
function a() { b(); }
function b() { c(); }
function c() { console.log('Done'); }

a();

Call Stack:
1. main()
2. a()
3. b()  
4. c()
5. c() → Pop (kết thúc)
6. b() → Pop (kết thúc)
7. a() → Pop (kết thúc)
8. main() → Pop (kết thúc)
```

### 4. Kiểm Tra Ngoặc Cân Bằng

```javascript
Biểu thức: "({[]})"

Quá trình:
( → Push (
{ → Push {
[ → Push [
] → Check: [ khớp ], Pop [
} → Check: { khớp }, Pop {
) → Check: ( khớp ), Pop (

Stack rỗng → Ngoặc cân bằng ✅

Biểu thức: "({[})"
{ → Push {
[ → Push [
} → Check: [ không khớp } → Lỗi ❌
```

## So Sánh: Stack vs Queue

| Điểm | Stack | Queue |
|-----|-------|-------|
| **Nguyên Tắc** | LIFO - Vào Sau Ra Trước | FIFO - Vào Trước Ra Trước |
| **Thêm** | Vào đầu - push() | Vào cuối - enqueue() |
| **Lấy** | Từ đầu - pop() | Từ đầu - dequeue() |
| **Hình Ảnh** | Chồng cạp | Hàng đợi |
| **Ứng Dụng** | Hoàn tác, lịch sử | Lập lịch, máy in |

## Hiện Thực Stack

### Cách 1: Sử Dụng Array (Đơn Giản)
```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Sử dụng
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());  // 2
```

### Cách 2: Sử Dụng Object (Hiệu Quả Hơn)
```javascript
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}
```

## Độ Phức Tạp Thời Gian

| Phép Toán | Độ Phức Tạp |
|---------|---------|
| push() | O(1) |
| pop() | O(1) |
| peek() | O(1) |
| isEmpty() | O(1) |
| size() | O(1) |

**Tất cả phép toán đều O(1)** = **Rất nhanh!**

## Lưu Trữ Bộ Nhớ

### Trong Memory:
```
Stack với push(10), push(20), push(30):

0x1000: 10 ← index 0
0x1004: 20 ← index 1  
0x1008: 30 ← index 2 ← top (đầu)

pop() → Lấy 30 từ index 2, count = 2
pop() → Lấy 20 từ index 1, count = 1
pop() → Lấy 10 từ index 0, count = 0
pop() → undefined, stack rỗng
```

## Câu Hỏi Phỏng Vấn

### Q1: Tại Sao Stack Là O(1)?
**Trả Lời:** Vì push() chỉ thêm vào cuối, pop() chỉ lấy từ cuối. Không phụ thuộc vào kích thước stack.

### Q2: Hiện Thực Min Stack (Lấy Min Được)
```javascript
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
```

### Q3: Kiểm Tra Biểu Thức Có Ngoặc Hợp Lệ Không?
```javascript
function isValid(str) {
  const stack = new Stack();
  const pairs = { '(': ')', '{': '}', '[': ']' };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
```

## Lưu Ý Quan Trọng

1. **Stack là LIFO** - Vào Sau Ra Trước
2. **Tất cả phép toán là O(1)** - Rất nhanh
3. **Chỉ truy cập được phần tử ở đầu** - Không truy cập ngẫu nhiên
4. **Dùng cho hoàn tác, lịch sử** - Ứng dụng chính
5. **Đừng quên kiểm tra isEmpty()** trước pop()

## Liên Kết Liên Quan

- [Xem Code Ví Dụ](sample.js)
- [Queue - Cấu Trúc Tương Tự](../queue/README.vi.md)
- [Trở Lại README Chính](../../README.vi.md)

---

**Stack là nền tảng cho nhiều ứng dụng thực tế!**
