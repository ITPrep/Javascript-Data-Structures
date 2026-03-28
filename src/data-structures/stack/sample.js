/**
 * Stack - Code Ví Dụ Chi Tiết
 * 
 * Stack là cấu trúc dữ liệu LIFO (Last In First Out)
 * Ứng dụng: hoàn tác, gọi hàm, kiểm tra dấu ngoặc
 */

// ============ Stack Class ============
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  // Thêm phần tử vào đỉnh stack - O(1)
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Lấy phần tử từ đỉnh - O(1)
  pop() {
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // Xem phần tử đầu mà không lấy - O(1)
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  // Kiểm tra stack rỗng - O(1)
  isEmpty() {
    return this.count === 0;
  }

  // Lấy kích thước - O(1)
  size() {
    return this.count;
  }

  // Xóa tất cả phần tử - O(1)
  clear() {
    this.items = {};
    this.count = 0;
  }

  // Chuyển thành string
  toString() {
    if (this.isEmpty()) return "";
    let result = "";
    for (let i = 0; i < this.count; i++) {
      result += this.items[i] + " ";
    }
    return result.trim();
  }
}

// ============ 1. Cơ Bản - Thêm Vào và Lấy Ra ============
console.log("=== 1. Cơ Bản - Push & Pop ===");

const stack = new Stack();
console.log("Stack rỗng?", stack.isEmpty()); // true

// Thêm phần tử
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Sau push 10, 20, 30:", stack.toString()); // 10 20 30

// Lấy ra
console.log("Pop:", stack.pop()); // 30
console.log("Pop:", stack.pop()); // 20
console.log("Stack hiện tại:", stack.toString()); // 10

console.log("Peek:", stack.peek()); // 10
console.log("Kích thước:", stack.size()); // 1

// ============ 2. Đảo Ngược Chuỗi ============
console.log("\n=== 2. Đảo Ngược Chuỗi ===");

function reverseString(str) {
  const stack = new Stack();
  
  // Đưa từng ký tự vào stack
  for (let char of str) {
    stack.push(char);
  }

  // Lấy ra sẽ được chuỗi đảo ngược
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  
  return reversed;
}

console.log("String gốc: 'HELLO'");
console.log("Đảo ngược:", reverseString("HELLO")); // OLLEH

console.log("String gốc: 'JAVASCRIPT'");
console.log("Đảo ngược:", reverseString("JAVASCRIPT")); // TPIRCSVAJ

// ============ 3. Kiểm Tra Dấu Ngoặc Hợp Lệ ============
console.log("\n=== 3. Kiểm Tra Dấu Ngoặc ===");

function isValidParentheses(str) {
  const stack = new Stack();
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log("'()':", isValidParentheses("()")); // true
console.log("'([{}])':", isValidParentheses("([{}])")); // true
console.log("'([)]':", isValidParentheses("([)]")); // false
console.log("'(':", isValidParentheses("(")); // false

// ============ 4. Chuyển Thập Phân Sang Nhị Phân ============
console.log("\n=== 4. Thập Phân → Nhị Phân ===");

function decimalToBinary(num) {
  const stack = new Stack();
  
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  let binary = "";
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
}

console.log("10 → nhị phân:", decimalToBinary(10)); // 1010
console.log("25 → nhị phân:", decimalToBinary(25)); // 11001
console.log("255 → nhị phân:", decimalToBinary(255)); // 11111111

// ============ 5. Browser Back Button - Lịch Sử Duyệt ============
console.log("\n=== 5. Lịch Sử Duyệt Web ===");

class BrowserHistory {
  constructor() {
    this.backStack = new Stack();
    this.forwardStack = new Stack();
    this.currentPage = "Home";
  }

  visit(page) {
    console.log(`Truy cập: ${page}`);
    this.backStack.push(this.currentPage);
    this.currentPage = page;
    this.forwardStack.clear(); // Xóa forward history
  }

  back() {
    if (!this.backStack.isEmpty()) {
      this.forwardStack.push(this.currentPage);
      this.currentPage = this.backStack.pop();
      console.log(`← Quay lại: ${this.currentPage}`);
    }
  }

  forward() {
    if (!this.forwardStack.isEmpty()) {
      this.backStack.push(this.currentPage);
      this.currentPage = this.forwardStack.pop();
      console.log(`→ Tới: ${this.currentPage}`);
    }
  }

  getCurrentPage() {
    return this.currentPage;
  }
}

const browser = new BrowserHistory();
browser.visit("Google.com");
browser.visit("GitHub.com");
browser.visit("Stack Overflow.com");
console.log("Trang hiện tại:", browser.getCurrentPage());
browser.back();
browser.back();
console.log("Trang hiện tại:", browser.getCurrentPage());
browser.forward();
console.log("Trang hiện tại:", browser.getCurrentPage());

// ============ 6. Undo & Redo ============
console.log("\n=== 6. Undo & Redo ===");

class UndoRedo {
  constructor() {
    this.undoStack = new Stack();
    this.redoStack = new Stack();
    this.currentState = "";
  }

  type(char) {
    this.undoStack.push(this.currentState);
    this.currentState += char;
    this.redoStack.clear(); // Xóa redo khi có action mới
    console.log(`Gõ '${char}' → "${this.currentState}"`);
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      this.redoStack.push(this.currentState);
      this.currentState = this.undoStack.pop();
      console.log(`↶ Undo → "${this.currentState}"`);
    }
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      this.undoStack.push(this.currentState);
      this.currentState = this.redoStack.pop();
      console.log(`↷ Redo → "${this.currentState}"`);
    }
  }
}

const editor = new UndoRedo();
editor.type("H");
editor.type("i");
editor.undo();
console.log("Trạng thái:", editor.currentState); // H
editor.redo();
console.log("Trạng thái:", editor.currentState); // Hi

// ============ 7. Min Stack - Stack Với Phép Toán Min ============
console.log("\n=== 7. Min Stack ===");

class MinStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  push(value) {
    this.stack.push(value);
    
    if (this.minStack.isEmpty()) {
      this.minStack.push(value);
    } else {
      this.minStack.push(Math.min(value, this.minStack.peek()));
    }
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  getMin() {
    if (!this.minStack.isEmpty()) {
      return this.minStack.peek();
    }
    return null;
  }
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(1);
minStack.push(4);
minStack.push(1);
minStack.push(5);

console.log("Min sau push 3,1,4,1,5:", minStack.getMin()); // 1
minStack.pop();
console.log("Min sau pop:", minStack.getMin()); // 1
minStack.pop();
console.log("Min sau pop:", minStack.getMin()); // 1

// ============ 8. Next Greater Element ============
console.log("\n=== 8. Next Greater Element ===");

function nextGreaterElement(arr) {
  const stack = new Stack();
  const result = new Array(arr.length).fill(-1);

  // Duyệt từ phải sang trái
  for (let i = arr.length - 1; i >= 0; i--) {
    // Xóa các phần tử nhỏ hơn hoặc bằng
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }

    // Phần tử lớn hơn gần nhất
    if (!stack.isEmpty()) {
      result[i] = stack.peek();
    }

    stack.push(arr[i]);
  }

  return result;
}

const input = [1, 5, 0, 3, 4, 5];
console.log("Array:", input);
console.log("Next Greater:", nextGreaterElement(input));
// [5, -1, 3, 4, 5, -1]
// Giải thích:
// 1 → 5 (lớn nhất tiếp theo)
// 5 → -1 (không có)
// 0 → 3
// 3 → 4
// 4 → 5
// 5 → -1 (không có)

console.log("\n=== Hết ===");
