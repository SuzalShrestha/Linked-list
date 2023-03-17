const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let linkedList=new LinkedList();
console.log("Linked List ");
console.log("Addtohead");
for(i=1;i<=10000000;i*=10){
    let time1=Date.now();
    for(j=1;j<i;j++){
        linkedList.addToHead(j);
    }
    let time2=Date.now();
    console.log(`time:${time2-time1} at ${i}`);
}
console.log("addToHead is O(1) time complexity");
console.log("Addtotail");
for(i=1;i<=1000;i*=10){
    let time1=Date.now();
    for(j=1;j<i;j++){
        linkedList.addToTail(j);
    }
    let time2=Date.now();
    console.log(`time:${time2-time1} at ${i}`);
}
console.log("addToTail is O(n) time complexity");
