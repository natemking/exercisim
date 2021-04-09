//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  getIndexOf(value) {
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      if( node.value === value) {
        return i;
      } 
      node = node.next;
    }
    return 'Error: Value not found'
  }

  push(value) {
    const newNode = new LinkedListNode(value);
    let last = this.head;
    
    if(this.length <= 0) { this.head = newNode }
    
    for (let i = 0; i < this.length; i++) {
      if(last.next === null){
        last.next = newNode;
        newNode.previous = last.value;
      }
      last = last.next
    }

    this.length++;   
  }

  pop() {
    let value; 
    if (this.length <= 0){
      return 'Error: Nothing to pop.'
    } else if (this.length < 2) {
      value = this.head.value;
      this.head = null;
    } else {
      const newTail = this.getByIndex(this.length - 2);
      value = newTail.next.value;
      newTail.next = null;
    }

    this.length--;
    return value;
  }

  shift() {
    let value;

    if (this.length <= 0) {
      return 'Error: Nothing to shift.'
    } else {
      value = this.head.value;

      if (this.length > 1) {
        this.head = this.head.next
        this.head.previous = null;
      } else {
        delete this.head
      }
    }

    this.length--;
    return value;
  }

  unshift(value) {
    const newNode = new LinkedListNode(value);
    const oldHead = this.head;
    
    if(this.length < 1){
      this.head = newNode
    } else {
      oldHead.previous = value;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
  }

  delete(value) {
    let index = this.getIndexOf(value);
    let previousNode = this.getByIndex(index - 1);
    
    if (index === 'Error: Value not found'){
      return 'Error: Cannot delete value. Value not found';
    }else if(index === 0){
      this.shift();
    } else if(index === this.length - 1){
      this.pop();
    } else {
      previousNode.next = previousNode.next.next;
      previousNode.next.previous = previousNode.value;
      this.length--;
    }

  }

  count() {
    return this.length;
  }
}

class LinkedListNode  {
  constructor(value) {  
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

