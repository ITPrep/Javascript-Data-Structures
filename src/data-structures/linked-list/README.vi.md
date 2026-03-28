# Linked List (Danh Sách Liên Kết) - Lý Thuyết Chi Tiết

## Linked List Là Gì?

**Linked List** (Danh Sách Liên Kết) là cấu trúc dữ liệu gồm **các nút (node)** được **liên kết với nhau** bằng **con trỏ (pointer)**.

Mỗi nút chứa:
- **Dữ liệu** (data)
- **Con trỏ** tới nút tiếp theo (next)

### Hình Ảnh Trực Quan
```
Linked List: 10 → 20 → 30 → 40 → null

┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ data: 10│    │ data: 20│    │ data: 30│    │ data: 40│
│ next:───┼───→│ next:───┼───→│ next:───┼───→│ next:───┼──→ null
└─────────┘    └─────────┘    └─────────┘    └─────────┘
   Node 1         Node 2         Node 3         Node 4
```

## So Sánh: Array vs Linked List

| Đặc Điểm | Array | Linked List |
|---------|-------|-------------|
| **Truy Cập** | O(1)  | O(n)  |
| **Chèn Đầu** | O(n)  | O(1)  |
| **Chèn Cuối** | O(1)  | O(n)  hoặc O(1)* |
| **Xóa Đầu** | O(n)  | O(1)  |
| **Xóa Cuối** | O(1)  | O(n)  |
| **Bộ Nhớ** | Liên tục | Phân tán |
| **Kích Thước** | Cố định | Động |

*Nếu giữ tail pointer

## Các Phép Toán Cơ Bản

### 1. append(data) - Thêm Vào Cuối

```javascript
// Tạo node mới
const newNode = new Node(data);

// Nếu danh sách rỗng
if (this.head === null) {
  this.head = newNode;
  return;
}

// Duyệt tới cuối
let current = this.head;
while (current.next !== null) {
  current = current.next;
}

// Liên kết
current.next = newNode;
```

**Độ Phức Tạp: O(n)**  - Phải duyệt qua hết

### 2. prepend(data) - Thêm Vào Đầu

```javascript
const newNode = new Node(data);
newNode.next = this.head;
this.head = newNode;
```

**Độ Phức Tạp: O(1)**  - Chỉ thay đổi con trỏ head

### 3. insertAfter(prevNode, data) - Chèn Sau Node

```javascript
if (prevNode === null) return;

const newNode = new Node(data);
newNode.next = prevNode.next;
prevNode.next = newNode;
```

**Độ Phức Tạp: O(1)**  - Chỉ thay đổi con trỏ

### 4. deleteNode(data) - Xóa Node

```javascript
// Nếu node cần xóa là head
if (this.head.data === data) {
  this.head = this.head.next;
  return;
}

// Tìm node trước node cần xóa
let current = this.head;
while (current && current.next) {
  if (current.next.data === data) {
    current.next = current.next.next;
    return;
  }
  current = current.next;
}
```

**Độ Phức Tạp: O(n)**  - Phải tìm node

### 5. search(data) - Tìm Kiếm

```javascript
let current = this.head;
while (current) {
  if (current.data === data) {
    return current;
  }
  current = current.next;
}
return null;
```

**Độ Phức Tạp: O(n)**  - Duyệt từng node

### 6. display() - Hiển Thị

```javascript
let current = this.head;
let result = '';
while (current) {
  result += current.data + ' → ';
  current = current.next;
}
result += 'null';
console.log(result);
```

**Độ Phức Tạp: O(n)**  - Duyệt từng node

## Ứng Dụng Thực Tế

### 1.  Playlist Nhạc

```javascript
Song 1 "Hành" → Song 2 "Người" → Song 3 "Yêu" → null

// Phát nhạc
current = Song 1
→ Phát "Hành"
→ current = Song 2
→ Phát "Người"
→ current = Song 3
→ Phát "Yêu"
→ current = null → Hết

// Thêm bài mới
new Song "Tôi" → Song 1
// Linked List mới bắt đầu từ "Tôi"
```

### 2.  Quản Lý Bộ Nhớ

```
Hệ điều hành quản lý các block bộ nhớ:
[Block 1: 1000 bytes] → [Block 2: 500 bytes] → [Block 3: 2000 bytes]

Cấp phát: 800 bytes từ Block 1
→ Block 1: 200 bytes trống
→ Block 2: 500 bytes
→ Block 3: 2000 bytes
```

### 3.  Undo History

```javascript
Action 1 "Gõ H" → Action 2 "Gõ i" → Action 3 "Gõ !" → null

Undo:
→ current = Action 3
→ current = Action 2
→ current = Action 1
→ current = null → Hết
```

### 4.  LRU Cache

```javascript
Recently used: User A → User B → User C → ...

Truy cập User B:
→ Xóa User B khỏi vị trí cũ
→ Thêm User B vào đầu
→ Danh sách mới: User B → User A → User C → ...
```

## Hiện Thực Linked List

### Node Class
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

### Linked List Class
```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' → ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}
```

### Sử Dụng
```javascript
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.display();  // 5 → 10 → 20 → 30 → null
```

## 🔀 Các Biến Thể Linked List

### 1. Doubly Linked List (Danh Sách Liên Kết Kép)

```javascript
10  20  30  null

// Node chứa con trỏ tới cả trước và sau
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;  // Con trỏ tới node trước
  }
}
```

**Ưu Điểm:** Duyệt 2 chiều  
**Nhược Điểm:** Tốn thêm bộ nhớ

### 2. Circular Linked List (Danh Sách Liên Kết Vòng)

```javascript
10 → 20 → 30 → 10 → 20 → ...

// Node cuối trỏ lại node đầu
last.next = head;
```

**Ứng Dụng:** Hàng đợi vòng tròn

## Độ Phức Tạp Thời Gian

| Phép Toán | Độ Phức Tạp | Ghi Chú |
|---------|---------|---------|
| append() | O(n)  | Phải duyệt qua hết |
| prepend() | O(1)  | Thay đổi head |
| insertAfter() | O(1)  | Nếu có node trước |
| deleteNode() | O(n)  | Phải tìm node |
| search() | O(n)  | Duyệt từng node |
| display() | O(n)  | Duyệt từng node |

## Câu Hỏi Phỏng Vấn

### Q1: Đảo Ngược Linked List
```javascript
function reverse(head) {
  let prev = null;
  let current = head;
  
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Trước: 1 → 2 → 3 → null
// Sau: 3 → 2 → 1 → null
```

### Q2: Tìm Node Ở Vị Trí K Từ Cuối
```javascript
function findKthFromEnd(head, k) {
  let fast = head;
  let slow = head;
  
  // fast đi tới vị trí k
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  
  // Cả hai đi đến fast là null
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  
  return slow;
}
```

### Q3: Kiểm Tra Cycle Trong Linked List
```javascript
function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true;  // Có cycle
    }
  }
  
  return false;  // Không có cycle
}
```

## Lưu Ý Quan Trọng

1. **Linked List ≠ Array** - Khác nhau cách tổ chức bộ nhớ
2. **Chèn/xóa ở đầu** - O(1) với Linked List, O(n) với Array
3. **Truy cập** - O(1) với Array, O(n) với Linked List
4. **Tail pointer** - Lưu pointer cuối giúp append() là O(1)
5. **Doubly Linked** - Linh hoạt hơn nhưng tốn bộ nhớ

## Liên Kết Liên Quan

-  [Xem Code Ví Dụ](sample.js)
-  [Array - So Sánh](../array/README.vi.md)
-  [Trở Lại README Chính](../../README.vi.md)

---

**Linked List là cơ sở cho nhiều cấu trúc dữ liệu phức tạp!** 

