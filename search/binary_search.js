// 이진 탐색
function binary_search(element, array) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid_point = Math.round((start + end) / 2);

    if (element === array[mid_point]) {
      return mid_point;
    } else if (element < array[mid_point]) {
      end = mid_point - 1;
    } else if (element > array[mid_point]) {
      start = mid_point + 1;
    }
  }

  return "None";
}

console.log(binary_search(2, [2, 3, 5, 7, 11]));
console.log(binary_search(0, [2, 3, 5, 7, 11]));
console.log(binary_search(5, [2, 3, 5, 7, 11]));
console.log(binary_search(3, [2, 3, 5, 7, 11]));
console.log(binary_search(11, [2, 3, 5, 7, 11]));
