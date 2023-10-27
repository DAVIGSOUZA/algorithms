class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class LinkedListStack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const prevTop = this.top
      this.top = newNode
      this.top.next = prevTop
    }
    this.length++
  }

  pop() {
    if (!this.top) {
      return
    }

    const prevTop = this.top
    this.top = this.top.next

    this.length--

    return prevTop
  }

  isEmpty() {
    return this.length === 0
  }
}

class ArrayStack {
  constructor() {
    this.stack = []
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  push(value) {
    return this.stack.push(value)
  }

  pop() {
    return this.stack.pop()
  }

  isEmpty() {
    return this.stack.length === 0
  }
}

const myStack = new ArrayStack()

console.log(myStack.isEmpty());
myStack.push('a')
console.log(myStack.peek());
myStack.push('b')
console.log(myStack.peek());
myStack.push('c')
console.log(myStack.peek());
myStack.push('d')
console.log(myStack.peek());
myStack.pop()
console.log(myStack.peek());
