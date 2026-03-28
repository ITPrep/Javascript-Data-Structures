# Array (Mảng) - Lý Thuyết Chi Tiết

## Mảng Là Gì?

**Array (Mảng)** là cấu trúc dữ liệu cơ bản dùng để lưu trữ **nhiều giá trị cùng kiểu** trong **một danh sách có thứ tự**.

Mỗi phần tử trong mảy được **xác định bằng chỉ số** (index) bắt đầu từ **0**.

### Ví Dụ Hình Ảnh
```
const students = ['Hùng', 'Linh', 'Nam', 'Ánh'];

Index:  0      1      2      3
Value: Hùng   Linh   Nam    Ánh

// Truy cập:
students[0]  // 'Hùng' - phần tử đầu
students[2]  // 'Nam' - phần tử thứ 3
students.length  // 4 - độ dài mảy
```

## Đặc Điểm Chính Của Array

| Đặc Điểm | Giải Thích |
|---------|---------|
| **Được Lập Chỉ Mục** | Mỗi phần tử có vị trí (0, 1, 2, ...) |
| **Có Thứ Tự** | Phần tử được sắp xếp theo thứ tự chèn |
| **Linh Hoạt** | Có thể chứa bất kỳ kiểu dữ liệu nào |
| **Có Thể Thay Đổi** | Có thể thêm, sửa, xóa phần tử |
| **Kích Thước Động** | Tự động tăng khi thêm phần tử |

## Tạo Array

### Cách 1: Literal Notation (Khuyên Dùng)
```javascript
const numbers = [1, 2, 3, 4, 5];
const fruits = ['Táo', 'Chuối', 'Cam'];
const mixed = [1, 'hello', true, { name: 'John' }];
```

### Cách 2: Constructor
```javascript
const arr = new Array(1, 2, 3);
```

### Cách 3: Mảy Rỗng
```javascript
const empty = [];
```

## Lưu Trữ Trong Bộ Nhớ

```
Memory Address: 0x1000  0x1004  0x1008  0x100C  0x1010
                 |      |      |      |      |
Array:           [1,    2,    3,    4,    5]
Index:            0     1     2     3     4

// Truy cập arr[2]:
- JavaScript đi tới địa chỉ 0x1000 + (2 * 4 bytes) = 0x1008
- Lấy giá trị 3 → O(1) thời gian!
```

## Các Phép Toán Trên Array

### 1. Truy Cập Phần Tử

```javascript
const arr = [10, 20, 30, 40, 50];

arr[0]              // 10 - phần tử đầu
arr[2]              // 30 - phần tử thứ 3
arr[arr.length - 1] // 50 - phần tử cuối
arr[10]             // undefined - vượt ngoài
```

**Độ Phức Tạp: O(1)**  - Truy cập tức thời, không phụ thuộc kích thước

### 2. Thêm Phần Tử

#### push() - Thêm vào cuối
```javascript
const arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.push(5, 6);     // [1, 2, 3, 4, 5, 6]
```
**Độ Phức Tạp: O(1)**  - Thêm vào cuối rất nhanh

#### unshift() - Thêm vào đầu
```javascript
const arr = [2, 3, 4];
arr.unshift(1);     // [1, 2, 3, 4]
arr.unshift(-1, 0); // [-1, 0, 1, 2, 3, 4]
```
**Độ Phức Tạp: O(n)**  - Phải dịch chuyển tất cả phần tử

#### splice() - Thêm ở giữa
```javascript
const arr = [1, 2, 3, 5, 6];
arr.splice(3, 0, 4);  // [1, 2, 3, 4, 5, 6]
```
**Độ Phức Tạp: O(n)**  - Phải dịch chuyển các phần tử sau nó

### 3. Xóa Phần Tử

#### pop() - Xóa từ cuối
```javascript
const arr = [1, 2, 3, 4, 5];
arr.pop();  // [1, 2, 3, 4], trả về 5
```
**Độ Phức Tạp: O(1)** 

#### shift() - Xóa từ đầu
```javascript
const arr = [1, 2, 3, 4, 5];
arr.shift();  // [2, 3, 4, 5], trả về 1
```
**Độ Phức Tạp: O(n)**  - Phải dịch chuyển tất cả phần tử

#### splice() - Xóa ở giữa
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);  // [1, 2, 5], xóa 2 phần tử từ vị trí 2
```
**Độ Phức Tạp: O(n)** 

### 4. Tìm Kiếm

#### indexOf() - Tìm vị trí
```javascript
const arr = [10, 20, 30, 20, 40];
arr.indexOf(20);  // 1 (lần xuất hiện đầu tiên)
arr.indexOf(99);  // -1 (không tìm thấy)
```
**Độ Phức Tạp: O(n)**  - Phải kiểm tra từng phần tử

#### includes() - Kiểm tra tồn tại
```javascript
const arr = [1, 2, 3, 4, 5];
arr.includes(3);   // true
arr.includes(99);  // false
```
**Độ Phức Tạp: O(n)** 

#### find() - Tìm phần tử khớp điều kiện
```javascript
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];
const user = users.find(u => u.id === 2);  // { id: 2, name: 'Jane' }
```
**Độ Phức Tạp: O(n)** 

### 5. Sắp Xếp & Biến Đổi

#### sort() - Sắp xếp
```javascript
const numbers = [30, 10, 50, 20];
numbers.sort((a, b) => a - b);  // [10, 20, 30, 50] - tăng dần
```
**Độ Phức Tạp: O(n log n)** 

#### map() - Biến đổi từng phần tử
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);  // [2, 4, 6]
```
**Độ Phức Tạp: O(n)**  - Duyệt qua tất cả phần tử

#### filter() - Lọc phần tử
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
```
**Độ Phức Tạp: O(n)** 

#### reduce() - Tích lũy
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 10
```
**Độ Phức Tạp: O(n)** 

## So Sánh: Array vs Các Cấu Trúc Khác

| Phép Toán | Array | Linked List | Stack | Queue |
|---------|-------|------------|-------|-------|
| **Truy Cập** | O(1)  | O(n)  | O(n)  | O(n)  |
| **Chèn Cuối** | O(1)  | O(n)  | O(1)  | O(1)  |
| **Xóa Cuối** | O(1)  | O(n)  | O(1)  | O(1)  |
| **Chèn Đầu** | O(n)  | O(1)  | O(1)  | O(1)  |
| **Xóa Đầu** | O(n)  | O(1)  | O(1)  | O(1)  |

## Khi Nào Dùng Array?

 **DÜ DÙNG:**
- Cần truy cập nhanh vào phần tử
- Giá trị không thay đổi nhiều
- Lưu trữ dữ liệu tương tự (danh sách điểm, danh sách tên)

 **KHÔNG DÙNG:**
- Cần thêm/xóa ở đầu hoặc giữa mảy thường xuyên
- Không biết kích thước trước (ngoài JavaScript)

## Mẹo & Trick Hữu Ích

### 1. Loại Bỏ Trùng Lặp
```javascript
const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];  // [1, 2, 3]
```

### 2. Đảo Ngược Mảy
```javascript
const arr = [1, 2, 3, 4];
arr.reverse();  // [4, 3, 2, 1] (sửa mảy gốc)

// Hoặc không sửa gốc:
const reversed = [...arr].reverse();
```

### 3. Làm Phẳng Mảy Lồng Nhau
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(Infinity);  // [1, 2, 3, 4, 5, 6]
```

### 4. Tìm Max/Min
```javascript
const arr = [5, 2, 9, 1, 7];
Math.max(...arr);  // 9
Math.min(...arr);  // 1
```

## Câu Hỏi Phỏng Vấn Thường Gặp

### Q1: Tại Sao Truy Cập Array Là O(1)?
**Trả Lời:** Vì Array lưu trữ liên tiếp trong bộ nhớ. Để truy cập phần tử ở index i, JavaScript tính địa chỉ = địa chỉ_base + i * kích_thước_phần_tử. Không phụ thuộc vào kích thước mảy.

### Q2: push() vs unshift() Khác Nhau Ở Đâu?
- **push()**: Thêm vào cuối O(1) - nhanh
- **unshift()**: Thêm vào đầu O(n) - chậm (phải dịch chuyển)

### Q3: Hãy Đảo Ngược Mảy In-place
```javascript
function reverse(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
// O(n) thời gian, O(1) không gian
```

### Q4: Tìm Hai Số Có Tổng Bằng Target
```javascript
function twoSum(arr, target) {
  const seen = {};
  for (let num of arr) {
    const needed = target - num;
    if (needed in seen) {
      return [seen[needed], arr.indexOf(num)];
    }
    seen[num] = arr.indexOf(num);
  }
  return null;
}
// O(n) thời gian, O(n) không gian
```

## Kiến Thức Cần Nhớ

1. **Array được lập chỉ mục từ 0** - phần tử đầu là index 0
2. **Truy cập là O(1)** - nhanh nhất
3. **Thêm/xóa ở đầu là O(n)** - chậm vì phải dịch chuyển
4. **Thêm/xóa ở cuối là O(1)** - nhanh
5. **Duyệt Array là O(n)** - phải kiểm tra tất cả
6. **Sắp xếp là O(n log n)** - khá chậm với mảy lớn

## Liên Kết Liên Quan

-  [Xem Code Ví Dụ](sample.js)
-  [Tài Liệu MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-  [Trở Lại README Chính](../../README.vi.md)

---

**Hiểu Array là bước đầu tiên để làm chủ cấu trúc dữ liệu!** 

