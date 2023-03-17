class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    this.tail = undefined;
  }

  addToHead(val) {
    // Your code here
    let item = new LinkedListNode(val);
    if (this.head === null) {
      this.head = item;
      this.length++;
      return;
    }

    item.next = this.head;
    this.head = item;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let item = new LinkedListNode(val);
    if (this.head === null) {
      this.head = item;
      this.length++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = item;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
