# Heap (Đống) - Lý Thuyết Chi Tiết

## Heap Là Gì?

**Heap** (Đống) là một **cây nhị phân hoàn chỉnh** tuân theo **tính chất heap**:
- **Max Heap**: Nút cha lớn hơn hoặc bằng các nút con
- **Min Heap**: Nút cha nhỏ hơn hoặc bằng các nút con

### Hình Ảnh Trực Quan

#### Max Heap (Đống Cực Đại)
```
       50         ← Root (lớn nhất)
      /  \
    30    20
   / \    /
  10  5  2

Tính chất: 50 > 30, 50 > 20, 30 > 10, 30 > 5, 20 > 2
```

#### Min Heap (Đống Cực Tiểu)
```
       2          ← Root (nhỏ nhất)
      / \
    10   5
   / \   /
  20  15 8

Tính chất: 2 < 10, 2 < 5, 10 < 20, 10 < 15, 5 < 8
```

## Đặc Điểm Heap

| Đặc Điểm | Giải Thích |
|---------|---------|
| **Cây Nhị Phân** | Mỗi node tối đa 2 con |
| **Hoàn Chỉnh** | Các level lấp đầy từ trái sang phải |
| **Tính Chất Heap** | Cha > con (Max) hoặc Cha < con (Min) |
| **Root Đặc Biệt** | Lớn nhất (Max) hoặc nhỏ nhất (Min) |

## Biểu Diễn Bằng Array

Heap thường được lưu trữ dưới dạng **mảy** để **tiết kiệm bộ nhớ**:

```
Array: [50, 30, 20, 10, 5, 2]
Index:  0   1   2   3   4  5

Cây từ array:
       50 (index 0)
      /  \
    30    20      (index 1, 2)
   / \    /
  10  5  2        (index 3, 4, 5)

Công thức quan hệ:
- Cha của index i: (i - 1) / 2
- Con trái của index i: 2 * i + 1
- Con phải của index i: 2 * i + 2
```

## Các Phép Toán Cơ Bản

### 1. insert() - Thêm Phần Tử

```javascript
// Thêm 40 vào Max Heap [50, 30, 20]
// B1: Thêm vào cuối: [50, 30, 20, 40]
// B2: Sift Up - So sánh cha và con, hoán đổi nếu cần

[50, 30, 20, 40]
     ↓ So sánh 40 với cha (30)
[50, 40, 20, 30]  ← Hoán đổi (40 > 30)
     ↓ So sánh 40 với cha (50)
[50, 40, 20, 30]  ← Không hoán đổi (40 < 50)
     ↓ Hoàn tất
```

**Độ Phức Tạp: O(log n)**  - Chiều cao của cây

### 2. extractMax() / extractMin() - Lấy Root

```javascript
// Lấy 50 từ Max Heap [50, 30, 20, 10, 5, 2]
// B1: Lưu root: 50
// B2: Đưa phần tử cuối lên root: [2, 30, 20, 10, 5]
// B3: Sift Down - So sánh với con, hoán đổi nếu cần

[2, 30, 20, 10, 5]
   ↓ So sánh 2 với con (30, 20), lấy max (30)
[30, 2, 20, 10, 5]  ← Hoán đổi
   ↓ So sánh 2 với con (10), hoán đổi
[30, 10, 20, 2, 5]  ← Hoàn tất

Kết quả: 50, Heap mới: [30, 10, 20, 2, 5]
```

**Độ Phức Tạp: O(log n)**  - Chiều cao của cây

### 3. heapify() - Xây Dựng Heap

```javascript
// Xây Max Heap từ array [20, 10, 50, 40, 30]
// Chạy Sift Down cho tất cả node không phải leaf

Ban đầu: [20, 10, 50, 40, 30]
Sau heapify: [50, 40, 30, 20, 10]

       50
      /  \
    40    30
   / \
  20  10
```

**Độ Phức Tạp: O(n)**  - Nhanh hơn insert n lần

## Ứng Dụng Thực Tế

### 1.  Priority Queue (Hàng Đợi Ưu Tiên)

```javascript
Bệnh nhân ở phòng cấp cứu:
- Nhân Viên IT (ưu tiên 1)
- Bệnh Nhân Đau Đầu (ưu tiên 3)
- Bệnh Nhân Chấn Thương (ưu tiên 5) ← Thăm khám trước

Min Heap theo ưu tiên:
       1
      / \
    3    5
```

### 2.  K Phần Tử Lớn Nhất

```javascript
// Tìm 3 điểm số cao nhất
Điểm: [90, 45, 87, 65, 92, 34, 88, 76]

Sử dụng Min Heap có kích thước 3:
[87, 92, 90] → Lấy 3 điểm cao nhất
```

### 3.  Dijkstra's Algorithm

```javascript
// Tìm đường đi ngắn nhất trong đồ thị
Sử dụng Min Heap để luôn lấy khoảng cách nhỏ nhất
```

### 4.  Heap Sort

```javascript
// Sắp xếp mảy sử dụng Heap
Array: [20, 10, 50, 40, 30]

B1: Xây Max Heap: [50, 40, 30, 20, 10]
B2: Extract Max 5 lần: 50, 40, 30, 20, 10
→ Kết quả: [10, 20, 30, 40, 50]

Độ phức tạp: O(n log n)
```

## Hiện Thực Max Heap

```javascript
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = 
    [this.heap[index2], this.heap[index1]];
  }

  // Thêm phần tử
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  siftUp(index) {
    while (index > 0 && 
           this.heap[this.parent(index)] < this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Lấy Max
  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }
    return max;
  }

  siftDown(index) {
    let largest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && 
        this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && 
        this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.siftDown(largest);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
```

## Độ Phức Tạp Thời Gian

| Phép Toán | Độ Phức Tạp |
|---------|---------|
| insert() | O(log n)  |
| extractMax/Min() | O(log n)  |
| heapify() | O(n)  |
| peek() | O(1)  |
| Heap Sort | O(n log n)  |

## So Sánh: Heap vs Các Cấu Trúc Khác

| Cấu Trúc | Insert | Extract Min | Peek |
|---------|--------|-------------|------|
| **Array** | O(1) | O(n) | O(n) |
| **Linked List** | O(1) | O(n) | O(n) |
| **Binary Search Tree** | O(log n) | O(log n) | O(log n) |
| **Heap** | O(log n) | O(log n) | O(1)  |

## Câu Hỏi Phỏng Vấn

### Q1: Tại Sao Insert/Extract Là O(log n)?
**Trả Lời:** Vì Heap là cây nhị phân hoàn chỉnh, chiều cao là log n. Sift Up/Down đi từ root hoặc leaf, phải đi qua tối đa log n node.

### Q2: Heap Sort
```javascript
function heapSort(arr) {
  // Xây Max Heap
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // Extract từ heap
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }

  return arr;
}
```

### Q3: K Phần Tử Lớn Nhất
```javascript
function findKLargest(arr, k) {
  const minHeap = new MinHeap();

  for (let num of arr) {
    minHeap.insert(num);
    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  return minHeap.heap;
}
```

## Lưu Ý Quan Trọng

1. **Heap là cây nhị phân hoàn chỉnh** - Không cân bằng
2. **Max Heap:** Cha > con | **Min Heap:** Cha < con
3. **Lưu trong array** - index i có con ở 2i+1, 2i+2
4. **Insert/Extract:** O(log n) - rất nhanh
5. **Sift Up:** từ leaf lên | **Sift Down:** từ root xuống

## Liên Kết Liên Quan

-  [Xem Code Ví Dụ](sample.js)
-  [Linked List - So Sánh](../linked-list/README.vi.md)
-  [Trở Lại README Chính](../../README.vi.md)

---

**Heap là cấu trúc dữ liệu tuyệt vời cho Priority Queue!** 

