function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
      }
    }
  }
  return arr;
}










