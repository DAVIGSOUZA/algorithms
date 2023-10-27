class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode

      this.last = newNode
    }

    this.length++
  }

  dequeue() {
    if (this.length === 0) {
      return null
    }

    if (this.length === 1) {
      this.last = null
    }

    const removeNode = this.first
    
    this.first = this.first.next

    this.length--

    return removeNode
  }
}

class StackQueue{
  constructor() {
    this.incoming = []
    this.outgoing = []
  }

  push(value) {
    this.incoming.push(value)
  }

  pop() {
    if (!this.outgoing.length) {
      while (this.incoming.length) {
        const outgoingElement = this.incoming.pop()
        this.outgoing.push(outgoingElement)
      }
    }

    return this.outgoing.pop()
  }

  peek() {
    if (this.outgoing.length) {
      return this.outgoing[this.outgoing.length - 1]
    }

    if (this.incoming.length) {
      return this.incoming[0]
    }
  }

  empty() {
    return this.incoming.length === 0 && this.outgoing.length === 0
  }
}