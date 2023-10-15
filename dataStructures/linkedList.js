const linkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode

    this.tail = newNode

    this.length++

    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head

    this.head = newNode

    this.length++

    return this
  }

  printList() {
    const arr = []

    let currentNode = this.head

    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }

    return arr
  }

  // O(n)
  traverse(index) {
    let counter = 0
    let currentNode = this.head

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

    if (index === 0) {
      return this.prepend(value)
    }

    const newNode = new Node(value)

    const targetNode = this.traverse(index - 1)

    const nextNode = targetNode.next

    targetNode.next = newNode

    newNode.next = nextNode

    this.length++

    return this.printList()
  }

  remove(index) {
    // TODO
  }
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 99));

