class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let item = new DoublyLinkedListNode(val);
    if (this.head === null) {
      this.tail = item;
    }
    if (this.head) {
      item.next = this.head;
      this.head.prev = item;
      this.head = item;
    } else {
      this.head = item;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let item = new DoublyLinkedListNode(val);
    if(this.head===null){
      this.head=item;
      this.length++;
      return;
    }
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      item.prev=current;
      current.next = item;
      this.tail=item;
      this.length++;
      return;
    } 
      this.tail=item;
      this.length++;
  
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
module.exports = DoublyLinkedList;
