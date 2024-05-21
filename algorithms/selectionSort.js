const arr = Array.from({length: 10}, ((_, i) => i + Math.floor(Math.random() * 30)))

// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i
    for (let j = i + 1 ; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[smallestIndex]
    arr[smallestIndex] = temp
  }
  return arr
}

console.log(arr)

console.log(selectionSort(arr))