const linkedListExample = {
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

/*
fast insertion
fast deletion
ordered
flexible size



down side

slow lookup
more memory
*/


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

  // O(1)
  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode

    this.tail = newNode

    this.length++

    return this
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head

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

    return arr
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

    const previousNode = this.traverse(index - 1)

    const nextNode = previousNode.next

    previousNode.next = newNode

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

    const previousNode = this.traverse(targetIndex -1)

    const removeNode = previousNode.next

    const nextNode = removeNode.next

    previousNode.next = nextNode

    this.length--

    return this.printList()
  }

  // EXERCISE 
  // Create a reverse method
  // O(n)
  reverse() {
    if(this.length === 1) {
      return this.printList()
    }

    let first = this.head

    this.tail = this.head

    let second = first.next

    while (second) {  
      const temp = second.next 

      second.next = first

      first = second

      second = temp
    }

    this.head.next = null

    this.head = first

    return this.printList()
  }
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.reverse());


