const arr = Array.from({length: 10}, ((_, i) => i + Math.floor(Math.random() * 30)))

const insertionSort = (arr) => {
  debugger
  for (let i = 0; i < arr.length; i++) {
    const firstElement = arr[0]

    const currentElement = arr[i]

    if (currentElement < firstElement) {
      // remove element from its current position in the array 
      // then inserts the element at the start of the array
      arr.unshift(arr.splice(i,1)[0])

      console.log({firstElement});

      console.log({currentElement});

      console.log(arr);
    } else {
      if (arr[i] < arr[i-1]) {
        for (let j = 1; j < i; j++) {
          const baseElement = arr[i]

          const previusToCurrent = arr[j-1]

          const currentElement = arr[j]

          if (arr[i] >= arr[j-1] && arr[i] < arr[j]) {
            arr.splice(j, 0, arr.splice(i,1)[0])
            
            console.log({baseElement});

            console.log({previusToCurrent});

            console.log({currentElement});

            console.log(arr);
          }
        }
      }
    }
  }
    
  return arr
}

console.log(arr);
console.log(insertionSort(arr));