// 삽입 정렬
function insertion_sort(array) {
  for (let i = 0; i < array.length; i++) {
    const current_value = array[i];
    let left = i - 1;

    while (left >= 0 && array[left] > current_value) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = current_value;
  }

  return array;
}

console.log(insertion_sort([1, 5, 4, 0, 2]));
