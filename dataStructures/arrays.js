const strings = ['a', 'b', 'c', 'd']

// access - O(1)
strings[2]

// add element to the end - O(1) or O(n) 
// the computar may need copy the entire array to 
// alocate memory accordinly the new size of the array
strings.push('e')

// remove last item - O(1)
strings.pop()

// add to begin - O(n)
strings.unshift('x')

// delete or insert element - O(n)
strings.splice(2, 0, 'z')


// array implementation
class CustomArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  // O(1)
  get(index) {
    return this.data[index]
  }

  // O(1)
  push(item) {
    this.data[this.length] = item
    this.length++

    return this.length
  }

  // O(1)
  pop() {
    const lastItem = this.data[this.length -1]

    delete this.data[this.length - 1]

    this.length--

    return lastItem
  }

  // O(n)
  delete(index) {
    const item = this.data[index]
    
    this.shiftItems(index)

    return item
  }

  // O(n)
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]

    this.length--
  }
}

// EXERCISES

// Create a function that reverses a string

// O(n)
function reverseStr(str) {
  let reverseStr = ''

  for (let i = str.length - 1; i >= 0 ; i--) {
    reverseStr += str[i]
  }

  return reverseStr
}

// with built-in methods
function reverseStr2(str) {
  return str.split('').reverse().join('') 
}

// with spread operator
const reverseStr3 = str => [...str].reverse().join('') 


// create a function that merges and sort array

// O(a + b)
const mergedSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b)

// O(a + b)
const mergedSortedArrays2 = (arr1, arr2) => {
  if (arr1.length === 0) {
    return arr1
  }
  
  if (arr2.length === 0) {
    return arr2
  }

  const mergedArray = []

  let arr1Index = 1
  let arr2Index = 1
  
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item)
      arr1Item = arr1[arr1Index]
      arr1Index++
    } else {
      mergedArray.push(arr2Item)
      arr2Item = arr2[arr2Index]
      arr2Index++
    }
  }

  return mergedArray
}