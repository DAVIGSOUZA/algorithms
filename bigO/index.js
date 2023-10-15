const performanceWrapper = (fnc) => {
  const t0 = performance.now()

  fnc()

  const t1 = performance.now()

  console.log(`function took ${t1 - t0} miliseconds`);
}

const largeArr = new Array(10000).fill('nemo')

// O(n) -> linear time
function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('found Nemo!');
    }
  }
}

// 0(1) -> constant time
const logFirstItem = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
}

//  0(n) -> linear
const challenge = (input) => {
  let a = 10 
  a = 50 + 3

  for (let i = 0; i < input.length; i++) {
    anotherFunction()
    let stranger = true
    a++
  }

  return a;
}

// O(n) linear time
const anotherChallenge = (input) => {
  let a = 5
  let b = 10
  let c = 50

  for (let i = 0; i < input; i++) {
    let x = i + 1
    let y = i + 2
    let z = i + 3
  }

  for (let j = 0; j < input; j++) {
    let p = j * 2
    let q = j * 2
  }

  let whoAmI = 'i dont know'
}

const boxes = ['a', 'b','c', 'd', 'e']

// O(n^2) quadratic time
const logPairs = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// O(1) = linear
const findFirstAndLast = array => {
  const first = array[0]
  const last = array[array.length -1]

  console.log(first, last);
}


/*
Given 2 arrays, create a function that let's a user know (true/false)
wheter these two arrays contain any common items

example:
arr1 = [a, b, c , x]
arr2 = [z, y, i]
should return false

arr1 = [a, b, c , x]
arr2 = [z, y, x]
should return true
*/

const arr1 = [1, 2, 3, 4, 6]
const arr2 = [33, 55, 66, 11, 22]
const arr3 = [0, -1, 44, 22, 4]

const hasCommonItems = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))



  // O(a + b) 
  // const obj = {}

  // for (let i = 0; i < arr1.length; i++) {
  //   obj[arr1[i]] = true
  // }
  
  // for (let j = 0; j < arr2.length; j++) {
  //   if (obj[arr2[j]]) {
  //     return true
  //   }
  // }

  // return false


  // O(n^2) quadratic

  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       return true
  //     }
  //   }
  // }

  // return false
}

performanceWrapper(() => console.log(hasCommonItems(arr1, arr2))) //false
performanceWrapper(() => console.log(hasCommonItems(arr1, arr3))) //true
performanceWrapper(() => console.log(hasCommonItems(arr2, arr3))) //true

