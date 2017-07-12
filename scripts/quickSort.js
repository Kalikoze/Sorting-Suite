const letters = ["d", "b", "a", "c"]

const quickSort = (array) => {
  var pivot = array[0];
  var leftSide = [];
  var rightSide = [];

  if(array.length < 2) {
    return array;
  }

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      leftSide.push(array[i]);
    } else {
      rightSide.push(array[i]);
    }
  }

  return quickSort(leftSide).concat(pivot, quickSort(rightSide));
}

quickSort(letters);

module.exports = quickSort
