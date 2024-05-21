const arr = Array.from({length: 10}, ((_, i) => i + Math.floor(Math.random() * 30)))


// O(n^2)
function bubbleSort(arr) {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j+1]) {
        // swap numbers
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  return arr
}


console.log(arr)
console.log(bubbleSort(arr))