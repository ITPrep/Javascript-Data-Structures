/**
 * Queue - Code Ví Dụ Chi Tiết
 * 
 * Queue là cấu trúc dữ liệu FIFO (First In First Out)
 * Ứng dụng: in ấn, xếp hàng, BFS
 */

// ============ Queue Class ============
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  // Thêm phần tử vào cuối - O(1)
  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  // Lấy phần tử từ đầu - O(1)
  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return result;
  }

  // Xem phần tử đầu mà không lấy - O(1)
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  // Kiểm tra queue rỗng - O(1)
  isEmpty() {
    return this.tail - this.head === 0;
  }

  // Lấy kích thước - O(1)
  size() {
    return this.tail - this.head;
  }

  // Xóa tất cả - O(1)
  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  // Chuyển thành string
  toString() {
    if (this.isEmpty()) return "";
    let result = "";
    for (let i = this.head; i < this.tail; i++) {
      result += this.items[i] + " ";
    }
    return result.trim();
  }
}

// ============ 1. Cơ Bản - Enqueue & Dequeue ============
console.log("=== 1. Cơ Bản - Enqueue & Dequeue ===");

const queue = new Queue();
console.log("Queue rỗng?", queue.isEmpty()); // true

// Thêm phần tử
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Sau enqueue 10, 20, 30:", queue.toString()); // 10 20 30

// Lấy ra
console.log("Dequeue:", queue.dequeue()); // 10
console.log("Dequeue:", queue.dequeue()); // 20
console.log("Queue hiện tại:", queue.toString()); // 30

console.log("Front:", queue.front()); // 30
console.log("Kích thước:", queue.size()); // 1

// ============ 2. Hàng Đợi Máy In ============
console.log("\n=== 2. Hàng Đợi Máy In ===");

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addDocument(doc) {
    console.log(`📄 Thêm tài liệu: ${doc.name} (${doc.pages} trang)`);
    this.queue.enqueue(doc);
  }

  printNext() {
    if (this.queue.isEmpty()) {
      console.log("❌ Không có tài liệu để in");
      return;
    }

    const doc = this.queue.dequeue();
    console.log(`🖨️  In: ${doc.name} (${doc.pages} trang)`);
    return doc;
  }

  showQueue() {
    console.log("📋 Hàng đợi:");
    let current = this.queue.head;
    let position = 1;
    while (current < this.queue.tail) {
      const doc = this.queue.items[current];
      console.log(`  ${position}. ${doc.name} (${doc.pages} trang)`);
      position++;
      current++;
    }
  }
}

const printer = new PrinterQueue();
printer.addDocument({ name: "Report.pdf", pages: 5 });
printer.addDocument({ name: "Slides.pptx", pages: 20 });
printer.addDocument({ name: "Invoice.xlsx", pages: 1 });

printer.showQueue();
printer.printNext();
printer.printNext();
printer.showQueue();

// ============ 3. Dịch Vụ Khách Hàng - Ticket System ============
console.log("\n=== 3. Dịch Vụ Khách Hàng ===");

class CustomerService {
  constructor() {
    this.queue = new Queue();
    this.ticketNumber = 0;
  }

  addCustomer(name) {
    this.ticketNumber++;
    const ticket = {
      number: this.ticketNumber,
      name: name,
      timestamp: new Date().toLocaleTimeString()
    };
    this.queue.enqueue(ticket);
    console.log(`✅ ${name} nhận vé số ${this.ticketNumber}`);
  }

  callNext() {
    if (this.queue.isEmpty()) {
      console.log("❌ Không có khách hàng đang chờ");
      return;
    }

    const customer = this.queue.dequeue();
    console.log(`📢 Vé số ${customer.number}: ${customer.name} - Bộ phận phục vụ`);
    return customer;
  }

  getQueueLength() {
    return this.queue.size();
  }
}

const service = new CustomerService();
service.addCustomer("Tài Anh");
service.addCustomer("Huyền");
service.addCustomer("Minh");
console.log("Người chờ:", service.getQueueLength()); // 3
service.callNext();
service.callNext();
console.log("Người chờ:", service.getQueueLength()); // 1

// ============ 4. BFS - Tìm Kiếm Theo Chiều Rộng ============
console.log("\n=== 4. BFS - Biểu Đồ ===");

function bfs(graph, start) {
  const visited = new Set();
  const queue = new Queue();
  const result = [];

  queue.enqueue(start);
  visited.add(start);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    result.push(node);

    // Thêm tất cả node kề chưa thăm
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }

  return result;
}

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

console.log("Biểu đồ:", graph);
console.log("BFS từ A:", bfs(graph, 'A')); 
// ['A', 'B', 'C', 'D', 'E', 'F']

// ============ 5. Round Robin Scheduler ============
console.log("\n=== 5. Round Robin CPU Scheduling ===");

class Task {
  constructor(id, timeNeeded) {
    this.id = id;
    this.timeNeeded = timeNeeded;
  }
}

function roundRobinScheduling(tasks, timeSlice) {
  const queue = new Queue();
  tasks.forEach(task => queue.enqueue(task));

  const executionOrder = [];
  let totalTime = 0;

  while (!queue.isEmpty()) {
    const task = queue.dequeue();

    if (task.timeNeeded <= timeSlice) {
      // Task hoàn thành
      totalTime += task.timeNeeded;
      executionOrder.push(`${task.id}: ${task.timeNeeded}ms`);
      console.log(`✅ Task ${task.id} hoàn thành (${task.timeNeeded}ms)`);
    } else {
      // Task chưa hoàn thành, vào lại hàng đợi
      task.timeNeeded -= timeSlice;
      totalTime += timeSlice;
      console.log(`⏳ Task ${task.id} thực thi ${timeSlice}ms, còn ${task.timeNeeded}ms`);
      queue.enqueue(task);
    }
  }

  return executionOrder;
}

const tasks = [
  new Task("A", 8),
  new Task("B", 4),
  new Task("C", 2),
  new Task("D", 3)
];

console.log("Time slice: 4ms");
roundRobinScheduling(tasks, 4);

// ============ 6. Sliding Window Maximum ============
console.log("\n=== 6. Sliding Window Maximum ===");

function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // Xóa phần tử ngoài window
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Xóa phần tử nhỏ hơn từ cuối
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Thêm max của window vào result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

const nums = [1, 3, 1, 2, 0, 5];
const k = 3;
console.log("Array:", nums, "Window size:", k);
console.log("Max sliding window:", maxSlidingWindow(nums, k));
// [3, 3, 2, 5]

// ============ 7. Đảo Ngược Hàng Đợi ============
console.log("\n=== 7. Đảo Ngược Queue ===");

function reverseQueue(queue) {
  const stack = [];

  // Đưa tất cả vào stack
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  // Đưa lại từ stack vào queue
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }
}

const queueToReverse = new Queue();
queueToReverse.enqueue(1);
queueToReverse.enqueue(2);
queueToReverse.enqueue(3);
queueToReverse.enqueue(4);

console.log("Queue trước:", queueToReverse.toString()); // 1 2 3 4
reverseQueue(queueToReverse);
console.log("Queue sau:", queueToReverse.toString()); // 4 3 2 1

// ============ 8. Deque - Queue Hai Đầu ============
console.log("\n=== 8. Deque ===");

class Deque {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else {
      this.head--;
      this.items[this.head] = element;
    }
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

  isEmpty() {
    return this.tail - this.head === 0;
  }

  toString() {
    if (this.isEmpty()) return "";
    let result = "";
    for (let i = this.head; i < this.tail; i++) {
      result += this.items[i] + " ";
    }
    return result.trim();
  }
}

const deque = new Deque();
deque.addBack(1);
deque.addBack(2);
deque.addBack(3);
console.log("Deque:", deque.toString()); // 1 2 3

deque.addFront(0);
console.log("Sau addFront(0):", deque.toString()); // 0 1 2 3

console.log("RemoveFront:", deque.removeFront()); // 0
console.log("RemoveBack:", deque.removeBack()); // 3
console.log("Deque cuối:", deque.toString()); // 1 2

console.log("\n=== Hết ===");
