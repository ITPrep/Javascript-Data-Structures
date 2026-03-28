/**
 * Array - Code Ví Dụ Chi Tiết
 * 
 * Array là cấu trúc dữ liệu lưu trữ dữ liệu liên tục trong bộ nhớ
 * Truy cập O(1), nhưng chèn/xóa giữa là O(n)
 */

// ============ 1. Tạo và Truy Cập Array ============
console.log("=== 1. Tạo và Truy Cập Array ===");

const numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);
console.log("Phần tử ở index 0:", numbers[0]); // 10
console.log("Phần tử ở index 2:", numbers[2]); // 30
console.log("Độ dài:", numbers.length); // 5

// ============ 2. Thêm/Xóa Phần Tử ============
console.log("\n=== 2. Thêm/Xóa Phần Tử ===");

const arr = [1, 2, 3];
console.log("Ban đầu:", arr);

// push() - Thêm vào cuối, O(1)
arr.push(4);
console.log("Sau push(4):", arr); // [1, 2, 3, 4]

// pop() - Xóa cuối, O(1)
arr.pop();
console.log("Sau pop():", arr); // [1, 2, 3]

// unshift() - Thêm vào đầu, O(n)
arr.unshift(0);
console.log("Sau unshift(0):", arr); // [0, 1, 2, 3]

// shift() - Xóa đầu, O(n)
arr.shift();
console.log("Sau shift():", arr); // [1, 2, 3]

// ============ 3. Sắp Xếp và Tìm Kiếm ============
console.log("\n=== 3. Sắp Xếp và Tìm Kiếm ===");

const unsorted = [30, 10, 40, 20, 50];
console.log("Ban đầu:", unsorted);

// sort() - Sắp xếp
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("Sau sort:", sorted); // [10, 20, 30, 40, 50]

// indexOf() - Tìm vị trí
console.log("Vị trí của 30:", unsorted.indexOf(30)); // 0
console.log("Vị trí của 20:", unsorted.indexOf(20)); // 3

// includes() - Kiểm tra tồn tại
console.log("Có 40?", unsorted.includes(40)); // true
console.log("Có 100?", unsorted.includes(100)); // false

// ============ 4. Map - Chuyển Đổi Dữ Liệu ============
console.log("\n=== 4. Map - Chuyển Đổi ===");

const originalArr = [1, 2, 3, 4, 5];
console.log("Array gốc:", originalArr);

// Tăng gấp đôi mỗi phần tử
const doubled = originalArr.map(num => num * 2);
console.log("Gấp đôi:", doubled); // [2, 4, 6, 8, 10]

// Bình phương mỗi phần tử
const squared = originalArr.map(num => num ** 2);
console.log("Bình phương:", squared); // [1, 4, 9, 16, 25]

// Chuyển đổi object
const users = [
  { name: "Tài", age: 25 },
  { name: "Huyền", age: 23 },
  { name: "Minh", age: 24 }
];
const names = users.map(user => user.name);
console.log("Tên users:", names); // ['Tài', 'Huyền', 'Minh']

// ============ 5. Filter - Lọc Dữ Liệu ============
console.log("\n=== 5. Filter - Lọc ===");

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array ban đầu:", numbers2);

// Lọc số chẵn
const evens = numbers2.filter(num => num % 2 === 0);
console.log("Số chẵn:", evens); // [2, 4, 6, 8, 10]

// Lọc số > 5
const moreThan5 = numbers2.filter(num => num > 5);
console.log("Số > 5:", moreThan5); // [6, 7, 8, 9, 10]

// Lọc user có tuổi > 23
const adults = users.filter(user => user.age > 23);
console.log("User tuổi > 23:", adults);
// [{ name: 'Tài', age: 25 }, { name: 'Minh', age: 24 }]

// ============ 6. Reduce - Tính Toán ============
console.log("\n=== 6. Reduce - Tính Toán ===");

const nums = [10, 20, 30, 40];
console.log("Array:", nums);

// Tính tổng
const sum = nums.reduce((total, num) => total + num, 0);
console.log("Tổng:", sum); // 100

// Tính tích
const product = nums.reduce((total, num) => total * num, 1);
console.log("Tích:", product); // 24000000

// Đếm số lần xuất hiện
const arrWithDupes = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = arrWithDupes.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log("Đếm từ:", count); // { a: 3, b: 2, c: 1 }

// ============ 7. Find & FindIndex ============
console.log("\n=== 7. Find & FindIndex ===");

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

// find() - Trả về phần tử
const found = products.find(p => p.price < 400);
console.log("Sản phẩm < 400:", found); // { id: 3, name: "Tablet", price: 300 }

// findIndex() - Trả về vị trí
const index = products.findIndex(p => p.name === "Phone");
console.log("Vị trí Phone:", index); // 1

// ============ 8. Some & Every ============
console.log("\n=== 8. Some & Every ===");

const scores = [85, 90, 78, 92, 88];

// some() - Có người ≥ 90?
const hasHigh = scores.some(score => score >= 90);
console.log("Có ai ≥ 90?", hasHigh); // true

// every() - Tất cả ≥ 70?
const allPassed = scores.every(score => score >= 70);
console.log("Tất cả ≥ 70?", allPassed); // true

// ============ 9. Slice & Splice ============
console.log("\n=== 9. Slice & Splice ===");

const original = ['a', 'b', 'c', 'd', 'e'];
console.log("Ban đầu:", original);

// slice() - Cắt không sửa đổi gốc
const sliced = original.slice(1, 4);
console.log("slice(1, 4):", sliced); // ['b', 'c', 'd']
console.log("Array gốc:", original); // Không thay đổi

// splice() - Sửa đổi gốc
const spliced = [...original];
spliced.splice(2, 1, 'X');
console.log("splice(2, 1, 'X'):", spliced); // ['a', 'b', 'X', 'd', 'e']

// ============ 10. Reverse & Join ============
console.log("\n=== 10. Reverse & Join ===");

const letters = ['H', 'O', 'L', 'A'];
console.log("Ban đầu:", letters);

// reverse() - Đảo ngược
const reversed = [...letters].reverse();
console.log("Đảo ngược:", reversed); // ['A', 'L', 'O', 'H']

// join() - Nối thành string
const joined = letters.join("-");
console.log("join('-'):", joined); // 'H-O-L-A'

// ============ 11. Nested Array (Mảng Lồng Nhau) ============
console.log("\n=== 11. Nested Array ===");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Ma trận:");
console.log(matrix);

console.log("Phần tử [1][2]:", matrix[1][2]); // 6

// Duyệt từng phần tử
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`[${i}][${j}] = ${matrix[i][j]}`);
  }
}

// ============ 12. Tìm 2 Số Có Tổng = Target ============
console.log("\n=== 12. Two Sum Problem ===");

function twoSum(arr, target) {
  const seen = new Set();
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return null;
}

const testArr = [2, 7, 11, 15];
console.log("Array:", testArr, "Target: 9");
console.log("Kết quả:", twoSum(testArr, 9)); // [2, 7]

// ============ 13. Remove Duplicates ============
console.log("\n=== 13. Remove Duplicates ===");

const withDupes = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log("Với trùng lặp:", withDupes);

// Cách 1: Set
const unique1 = [...new Set(withDupes)];
console.log("Cách 1 (Set):", unique1);

// Cách 2: Filter
const unique2 = withDupes.filter((item, index) => 
  withDupes.indexOf(item) === index
);
console.log("Cách 2 (Filter):", unique2);

// ============ 14. Flatten Array ============
console.log("\n=== 14. Flatten Array ===");

const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Lồng nhau:", nested);

// flat() - Làm phẳng
const flattened = nested.flat(2);
console.log("Sau flat(2):", flattened); // [1, 2, 3, 4, 5, 6]

console.log("\n=== Hết ===");
