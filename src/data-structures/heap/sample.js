/**
 * Heap - Code Ví Dụ Chi Tiết
 * 
 * Heap là cây nhị phân hoàn chỉnh với tính chất:
 * Max Heap: cha > con
 * Min Heap: cha < con
 */

// ============ Max Heap Class ============
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Lấy vị trí cha - O(1)
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Lấy vị trí con trái - O(1)
  leftChild(index) {
    return 2 * index + 1;
  }

  // Lấy vị trí con phải - O(1)
  rightChild(index) {
    return 2 * index + 2;
  }

  // Hoán đổi 2 phần tử
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = 
    [this.heap[index2], this.heap[index1]];
  }

  // Thêm phần tử - O(log n)
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  // Sift Up: so sánh với cha, hoán đổi nếu cần
  siftUp(index) {
    while (index > 0 && 
           this.heap[this.parent(index)] < this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Lấy phần tử lớn nhất (root) - O(log n)
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

  // Sift Down: so sánh với con, hoán đổi nếu cần
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

  // Xem phần tử lớn nhất - O(1)
  peek() {
    return this.heap[0];
  }

  // Kiểm tra rỗng
  isEmpty() {
    return this.heap.length === 0;
  }

  // Lấy kích thước
  size() {
    return this.heap.length;
  }

  // Hiển thị heap
  display() {
    console.log("Heap:", this.heap);
  }
}

// ============ Min Heap Class ============
class MinHeap {
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

  // Thêm - O(log n)
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  siftUp(index) {
    while (index > 0 && 
           this.heap[this.parent(index)] > this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Lấy phần tử nhỏ nhất - O(log n)
  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }

    return min;
  }

  siftDown(index) {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && 
        this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && 
        this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  display() {
    console.log("Heap:", this.heap);
  }
}

// ============ 1. Cơ Bản - Insert & Extract ============
console.log("=== 1. Cơ Bản - Max Heap ===");

const maxHeap = new MaxHeap();
console.log("Max Heap rỗng?", maxHeap.isEmpty()); // true

// Thêm phần tử
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);
maxHeap.insert(5);

console.log("Sau insert 10, 20, 15, 30, 5:");
maxHeap.display(); // [30, 20, 15, 10, 5]

// Lấy max
console.log("Extract Max:", maxHeap.extractMax()); // 30
console.log("Extract Max:", maxHeap.extractMax()); // 20
console.log("Sau 2 lần extract:");
maxHeap.display(); // [15, 10, 5]

// Peek
console.log("Peek:", maxHeap.peek()); // 15

// ============ 2. Min Heap ============
console.log("\n=== 2. Cơ Bản - Min Heap ===");

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);
minHeap.insert(8);

console.log("Min Heap sau insert 10, 5, 20, 2, 8:");
minHeap.display(); // [2, 5, 20, 10, 8]

console.log("Extract Min:", minHeap.extractMin()); // 2
console.log("Extract Min:", minHeap.extractMin()); // 5
console.log("Sau 2 lần extract:");
minHeap.display(); // [8, 10, 20]

// ============ 3. Priority Queue ============
console.log("\n=== 3. Priority Queue (Hàng Đợi Ưu Tiên) ===");

class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }

  toString() {
    return `${this.name} (ưu tiên: ${this.priority})`;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = new MaxHeap();
  }

  enqueue(task, priority) {
    // Lưu trữ [priority, task]
    this.heap.insert({ priority, task: task.name });
    console.log(`➕ Thêm: ${task.toString()}`);
  }

  dequeue() {
    if (!this.heap.isEmpty()) {
      const item = this.heap.extractMax();
      console.log(`✅ Thực hiện: ${item.task} (ưu tiên: ${item.priority})`);
      return item;
    }
  }

  size() {
    return this.heap.size();
  }
}

const pq = new PriorityQueue();
pq.enqueue(new Task("Đọc email"), 1);
pq.enqueue(new Task("Sửa bug"), 5);
pq.enqueue(new Task("Viết báo cáo"), 3);
pq.enqueue(new Task("Gặp khách hàng"), 4);

console.log("Hàng đợi ưu tiên - Thực hiện theo thứ tự:");
while (pq.size() > 0) {
  pq.dequeue();
}

// ============ 4. K Phần Tử Lớn Nhất ============
console.log("\n=== 4. K Phần Tử Lớn Nhất ===");

function findKLargest(arr, k) {
  const minHeap = new MinHeap();

  for (let num of arr) {
    minHeap.insert(num);

    // Giữ heap có kích thước k
    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  // Lấy tất cả từ heap (sắp xếp tăng)
  const result = [];
  while (!minHeap.isEmpty()) {
    result.push(minHeap.extractMin());
  }

  return result.reverse(); // Đảo ngược để sắp xếp giảm
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Array:", numbers);
console.log("3 phần tử lớn nhất:", findKLargest(numbers, 3)); // [9, 6, 5]
console.log("5 phần tử lớn nhất:", findKLargest(numbers, 5)); // [9, 6, 5, 5, 5]

// ============ 5. Heap Sort ============
console.log("\n=== 5. Heap Sort ===");

function heapSort(arr) {
  const heap = new MaxHeap();

  // Thêm tất cả phần tử vào heap
  for (let num of arr) {
    heap.insert(num);
  }

  // Lấy ra theo thứ tự (giảm)
  const sorted = [];
  while (!heap.isEmpty()) {
    sorted.push(heap.extractMax());
  }

  return sorted;
}

const unsorted = [20, 10, 50, 40, 30];
console.log("Array gốc:", unsorted);
console.log("Sau heap sort (giảm):", heapSort(unsorted)); // [50, 40, 30, 20, 10]

// ============ 6. Median Finder ============
console.log("\n=== 6. Median Finder ===");

class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap(); // Lưu nửa trái
    this.minHeap = new MinHeap(); // Lưu nửa phải
  }

  addNum(num) {
    // Thêm vào maxHeap trước
    this.maxHeap.insert(num);

    // Đảm bảo maxHeap <= minHeap
    if (!this.maxHeap.isEmpty() && 
        !this.minHeap.isEmpty() && 
        this.maxHeap.peek() > this.minHeap.peek()) {
      const val = this.maxHeap.extractMax();
      this.minHeap.insert(val);
    }

    // Cân bằng kích thước
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      const val = this.maxHeap.extractMax();
      this.minHeap.insert(val);
    }

    if (this.minHeap.size() > this.maxHeap.size()) {
      const val = this.minHeap.extractMin();
      this.maxHeap.insert(val);
    }
  }

  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    }

    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
}

const mf = new MedianFinder();
const nums = [1, 2, 3, 4, 5];

console.log("Thêm:", nums);
for (let num of nums) {
  mf.addNum(num);
  console.log(`Sau thêm ${num}, median: ${mf.findMedian()}`);
}

// ============ 7. Last Stone Weight ============
console.log("\n=== 7. Last Stone Weight ===");

function lastStoneWeight(stones) {
  const heap = new MaxHeap();

  for (let stone of stones) {
    heap.insert(stone);
  }

  while (heap.size() > 1) {
    const first = heap.extractMax();
    const second = heap.extractMax();

    if (first > second) {
      heap.insert(first - second);
    }
  }

  return heap.isEmpty() ? 0 : heap.peek();
}

const stones = [2, 7, 4, 1, 8, 1];
console.log("Stones:", stones);
console.log("Last stone weight:", lastStoneWeight(stones));
// Giải thích:
// 8 - 7 = 1 → [2, 4, 1, 1, 1]
// 4 - 2 = 2 → [2, 1, 1, 1]
// 2 - 1 = 1 → [1, 1, 1]
// 1 - 1 = 0 → [1]
// Kết quả: 1

// ============ 8. Top K Frequent Elements ============
console.log("\n=== 8. Top K Phần Tử Tần Suất Cao ===");

function topKFrequent(arr, k) {
  // Đếm tần suất
  const frequencyMap = {};
  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Sử dụng Min Heap để giữ K phần tử tần suất cao nhất
  const minHeap = new MinHeap();

  for (let num in frequencyMap) {
    minHeap.insert({
      value: Number(num),
      frequency: frequencyMap[num]
    });

    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  // Lấy kết quả
  const result = [];
  while (!minHeap.isEmpty()) {
    result.push(minHeap.extractMin().value);
  }

  return result.reverse();
}

const arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4];
console.log("Array:", arr);
console.log("Top 2 phần tử tần suất cao:", topKFrequent(arr, 2)); // [3, 1]
console.log("Top 3 phần tử tần suất cao:", topKFrequent(arr, 3)); // [3, 1, 2]

console.log("\n=== Hết ===");
