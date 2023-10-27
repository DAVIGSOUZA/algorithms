// write 2 function that returns the factorial of a given number.
// One function should use recursion the other should use loops

// O(n)
function recursiveFactorial(number) {
  if(number <= 2) {
    return number
  }

  return number * recursiveFactorial(number - 1)
}


// O(n)
function loopFactorial(number) {
  let result = 1

  for (let i = 2; i <= number; i++) {
    result = result * i
  }

  return result
}


// console.log(loopFactorial(8))
// console.log(recursiveFactorial(8))

// write 2 function that returns the fibonacci number of a given index.
// One function should use recursion the other should use loops


// O(2^n)
function recursiveFibo(index) {
  if (index < 2) {
    return index
  }

  return recursiveFibo(index -1) + recursiveFibo(index - 2)
}


// O(n)
function loopFibo(index) {
  let prev = 0
  let current = 1

  if (index < 2) {
    return index
  }
  
  for (let i = 1; i < index; i++) {
    const temp = prev
    prev = current
    current = temp + prev
  }

  return current
}

// console.log(loopFibo(7));
// console.log(recursiveFibo(7));

// reverse string

function recursiveRevert(str){
  if (str === '' ) {
    return ''
  } 
  return recursiveRevert(str.substr(1)) + str.charAt(0)
}

function loopRevert(str){
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i]
  }
  return newStr
}


// console.log(loopRevert('test'));
// console.log(recursiveRevert('test'));