class Node {
  constructor(value) {
    this.value = value,
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  // O(1)
  append(value) {
    const newNode = new Node(value)

    newNode.prev = this.tail

    this.tail.next = newNode

    this.tail = newNode

    this.length++

    return this
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head

    this.head.prev = newNode

    this.head = newNode

    this.length++

    return this
  }

  // O(n)
  printList() {
    const arr = []

    let currentNode = this.head

    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }

    return {values: arr, length: this.length}
  }

  // O(n)
  traverse(index) {
    let counter = 0
    let currentNode = this.head

    if (index <= 0) {
      return currentNode
    }

    while (counter !== index) {
      currentNode = currentNode.next
      counter ++
    }

    return currentNode
  }

  // O(n)
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    if (index <= 0) {
      return this.prepend(value)
    }

    const newNode = new Node(value)

    const prevNode = this.traverse(index - 1)

    const nextNode = prevNode.next

    prevNode.next = newNode

    newNode.next = nextNode

    this.length++

    return this.printList()
  }

  // O(n)
  remove(index) {
    if (index <= 0) {
      this.head = this.head.next

      this.length--

      return this.printList()
    }

    let targetIndex = index

    if (index >= this.length) {
      targetIndex = this.length - 1
    }

    const prevNode = this.traverse(targetIndex -1)

    const nodeToRemove = prevNode.next

    const nextNode = nodeToRemove.next

    prevNode.next = nextNode

    if (index < this.length) {
      nextNode.prev =  prevNode
    }

    this.length--

    return this.printList()
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10)

console.log(myDoublyLinkedList.append(5));
console.log(myDoublyLinkedList.append(16));
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.insert(2, 99));
console.log(myDoublyLinkedList.remove(50));