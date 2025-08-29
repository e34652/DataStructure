function selectionSort(array) {
  const n = array.length - 1;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // let temp = array[i]
      // array[i]= array[minIndex];
      // array[minIndex] = temp;
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

console.log(selectionSort([77, 42, 6, 4, 3, 5, 1, 35, 22, 11]));
