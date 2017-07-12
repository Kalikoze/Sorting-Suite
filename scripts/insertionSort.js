const letters = ["d", "b", "a", "c"]

const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array;
}

insertionSort(letters);

module.exports = insertionSort;
