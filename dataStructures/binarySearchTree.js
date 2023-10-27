class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return
    }

    let currentNode = this.root

    while(true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        } 
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        } 
        currentNode = currentNode.right
      }
    }
  }

  lookup(value) {
    let currentNode = this.root

    if (!this.root) {
      return null
    }

    while(currentNode) {
      if (value === currentNode.value) {
        return currentNode
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return null
  }

  remove(value) {
    if (!this.root) {
      return
    }

    let currentNode = this.root

    let parentNode = null

    while (currentNode) {
      if (value === currentNode.value) {

        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left
          } else {
            parentNode.right = currentNode.left
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
            
          } else {

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }

          }
        } else {
          let leftMost = currentNode.right.left
          let leftMostParent = currentNode.right

          while (leftMost.left !== null) {
            leftMostParent = leftMost
            leftMost = leftMost.left
          }

          leftMostParent.left = leftMost.right
          leftMost.left = currentNode.left
          leftMost.right = currentNode.right

          if (parentNode === null) {
            this.root = leftMost
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost
            }
          }
        }
      }

      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else {
        parentNode = currentNode
        currentNode = currentNode.right
      }
    }
  }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root), null, 2))

console.log(JSON.stringify(tree.lookup(4)))
console.log(JSON.stringify(tree.lookup(20)))
console.log(JSON.stringify(tree.lookup(15)))

function traverse(node) {
  const tree = {value: node.value}
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}