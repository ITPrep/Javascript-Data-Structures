/**
 * Linked List - Code Ví Dụ Chi Tiết
 * 
 * Linked List là cấu trúc dữ liệu gồm các node liên kết với nhau
 * Ưu điểm: chèn/xóa O(1) ở đầu
 * Nhược điểm: truy cập O(n)
 */

// ============ Node Class ============
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ============ Linked List Class ============
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Thêm vào cuối - O(n) (hoặc O(1) nếu giữ tail)
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = newNode;
  }

  // Thêm vào đầu - O(1)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // Chèn sau node cụ thể - O(1) nếu có node
  insertAfter(prevData, data) {
    let current = this.head;

    while (current && current.data !== prevData) {
      current = current.next;
    }

    if (!current) return;

    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;

    if (!newNode.next) {
      this.tail = newNode;
    }
  }

  // Xóa node - O(n)
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        return;
      }
      current = current.next;
    }
  }

  // Tìm kiếm - O(n)
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Hiển thị danh sách
  display() {
    if (!this.head) {
      console.log("null");
      return;
    }

    let result = "";
    let current = this.head;
    while (current) {
      result += current.data + " → ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // Lấy kích thước - O(n)
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Lấy phần tử ở vị trí i - O(n)
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }

    return null;
  }
}

// ============ 1. Cơ Bản - Thêm, Xóa, Tìm ============
console.log("=== 1. Cơ Bản ===");

const list = new LinkedList();
console.log("Linked List rỗng:");
list.display(); // null

// Thêm vào cuối
list.append(10);
list.append(20);
list.append(30);
console.log("\nSau append(10, 20, 30):");
list.display(); // 10 → 20 → 30 → null

// Thêm vào đầu
list.prepend(5);
console.log("\nSau prepend(5):");
list.display(); // 5 → 10 → 20 → 30 → null

// Kích thước
console.log("Kích thước:", list.size()); // 4

// Tìm kiếm
console.log("Có 20?", list.search(20)); // true
console.log("Có 100?", list.search(100)); // false

// ============ 2. Chèn Sau Node ============
console.log("\n=== 2. Chèn Sau Node ===");

list.insertAfter(20, 25);
console.log("Sau insertAfter(20, 25):");
list.display(); // 5 → 10 → 20 → 25 → 30 → null

// ============ 3. Xóa Node ============
console.log("\n=== 3. Xóa Node ===");

list.delete(20);
console.log("Sau delete(20):");
list.display(); // 5 → 10 → 25 → 30 → null

list.delete(5);
console.log("Sau delete(5):");
list.display(); // 10 → 25 → 30 → null

// ============ 4. Lấy Phần Tử Ở Vị Trí ============
console.log("\n=== 4. Lấy Phần Tử Ở Vị Trí ===");

console.log("Vị trí 0:", list.getAt(0)); // 10
console.log("Vị trí 1:", list.getAt(1)); // 25
console.log("Vị trí 2:", list.getAt(2)); // 30

// ============ 5. Đảo Ngược Linked List ============
console.log("\n=== 5. Đảo Ngược Linked List ===");

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
}

const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);

console.log("Trước đảo ngược:");
list2.display(); // 1 → 2 → 3 → 4 → null

list2.head = reverseLinkedList(list2.head);
console.log("Sau đảo ngược:");
list2.display(); // 4 → 3 → 2 → 1 → null

// ============ 6. Kiểm Tra Cycle ============
console.log("\n=== 6. Kiểm Tra Cycle ===");

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const list3 = new LinkedList();
list3.append(1);
list3.append(2);
list3.append(3);
list3.append(4);

console.log("Linked List thông thường - Có cycle?", hasCycle(list3.head)); // false

// Tạo cycle: 4 → 2
let current = list3.head;
let node2 = list3.head.next;
while (current.next) {
  current = current.next;
}
current.next = node2; // Tạo cycle

console.log("Sau tạo cycle - Có cycle?", hasCycle(list3.head)); // true

// ============ 7. Node Ở Vị Trí K Từ Cuối ============
console.log("\n=== 7. Node Ở Vị Trí K Từ Cuối ===");

function findKthFromEnd(head, k) {
  let fast = head;
  let slow = head;

  // Fast đi k bước trước
  for (let i = 0; i < k; i++) {
    if (!fast) return null;
    fast = fast.next;
  }

  // Cả hai di chuyển đến fast là null
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

const list4 = new LinkedList();
list4.append(1);
list4.append(2);
list4.append(3);
list4.append(4);
list4.append(5);

console.log("Linked List:");
list4.display(); // 1 → 2 → 3 → 4 → 5 → null

const kthNode = findKthFromEnd(list4.head, 2);
console.log("Node vị trí 2 từ cuối:", kthNode.data); // 4

// ============ 8. Merge 2 Sorted Linked List ============
console.log("\n=== 8. Merge 2 Sorted Linked List ===");

function mergeSortedLists(l1, l2) {
  const dummy = new Node(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.data <= l2.data) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Nối phần còn lại
  current.next = l1 || l2;

  return dummy.next;
}

const list5 = new LinkedList();
list5.append(1);
list5.append(3);
list5.append(5);

const list6 = new LinkedList();
list6.append(2);
list6.append(4);
list6.append(6);

console.log("List 1:");
list5.display(); // 1 → 3 → 5 → null

console.log("List 2:");
list6.display(); // 2 → 4 → 6 → null

const merged = new LinkedList();
merged.head = mergeSortedLists(list5.head, list6.head);

console.log("Merged:");
merged.display(); // 1 → 2 → 3 → 4 → 5 → 6 → null

// ============ 9. Remove Duplicates ============
console.log("\n=== 9. Remove Duplicates ===");

function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

const list7 = new LinkedList();
list7.append(1);
list7.append(1);
list7.append(2);
list7.append(2);
list7.append(3);

console.log("Trước remove duplicates:");
list7.display(); // 1 → 1 → 2 → 2 → 3 → null

list7.head = removeDuplicates(list7.head);
console.log("Sau remove duplicates:");
list7.display(); // 1 → 2 → 3 → null

// ============ 10. Playlist - Ứng Dụng Thực Tế ============
console.log("\n=== 10. Playlist Nhạc ===");

class Song {
  constructor(name, artist) {
    this.name = name;
    this.artist = artist;
  }

  toString() {
    return `"${this.name}" - ${this.artist}`;
  }
}

class Playlist {
  constructor() {
    this.list = new LinkedList();
    this.currentNode = null;
  }

  addSong(name, artist) {
    const song = new Song(name, artist);
    this.list.append(song);
    if (!this.currentNode) {
      this.currentNode = this.list.head;
    }
  }

  play() {
    if (this.currentNode) {
      console.log("🎵 Đang phát:", this.currentNode.data.toString());
    }
  }

  next() {
    if (this.currentNode && this.currentNode.next) {
      this.currentNode = this.currentNode.next;
      this.play();
    } else {
      console.log("⏹️  Hết playlist");
    }
  }

  showPlaylist() {
    console.log("📋 Playlist:");
    let current = this.list.head;
    let index = 1;
    while (current) {
      console.log(`  ${index}. ${current.data.toString()}`);
      current = current.next;
      index++;
    }
  }
}

const playlist = new Playlist();
playlist.addSong("Hành", "Ca Sĩ A");
playlist.addSong("Người Yêu Tôi", "Ca Sĩ B");
playlist.addSong("Em", "Ca Sĩ C");

playlist.showPlaylist();
playlist.play();
playlist.next();
playlist.next();
playlist.next();

console.log("\n=== Hết ===");
