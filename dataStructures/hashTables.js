const user = {
  age: 11,
  name: 'fulano'
}

user.name // O(1)
user.age // O(1)

user.adress = 'maple street' // O(1)

// cause memory is limited, we can have collisions
// in this case we have the same info stored in the same space address
// in this cases we have O(n) for lookups


// objects can only have string as keys
// Maps enables other datatypes as keys
// mantain insertions order
const map = new Map()

// Sets only stores the keys
const set = new Set()


// Hash table implementation

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length
    }
    return hash
  }

  // O(1)
  set(key, value) {
    const address = this._hash(key)

    if (!this.data[address]) {
      this.data[address] = []
    } 

    this.data[address].push([key, value])
  }


  // O(1) => O(n) if collisions
  get(key) {
    const address = this._hash(key)

    const bucket = this.data[address]
    
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) 
          return bucket[i][1]
      }
    }

    return undefined
  }

  // O(n^2)
  keys() {
    const keysArr = []

    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArr.push(this.data[i][j][0])
          }
        } else {
          keysArr.push(this.data[i][0][0])
        }
      }
    }

    return keysArr
  }


}

// const basket = new HashTable(50)

// basket.set('grapes', 100)
// basket.set('apples', 50)
// basket.set('oranges', 2)
// basket.set('kiwis', 1)
// basket.set('bananas', 6)
// basket.set('pears', 3)

// console.log(basket.get('grapes'))
// console.log(basket.keys())


// EXERCISES

// functions that returns the first repeated element

// O(n^2)
function naiveFindRepeated(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1 ; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }
  return undefined
}

// O(n)
function findRepeated(arr) {
  const map = {}

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i]
    } else {
      map[arr[i]] = i
    }
  }

  return undefined
}


