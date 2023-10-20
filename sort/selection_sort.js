// 선택 정렬
function selection_sort(some_list) {
  for (let i = 0; i < some_list.length; i++) {
    let min_value_index = i;

    for (let j = i + 1; j < some_list.length; j++) {
      if (some_list[min_value_index] > some_list[j]) {
        min_value_index = j;
      }
    }
    let swap = some_list[min_value_index];
    some_list[min_value_index] = some_list[i];
    some_list[i] = swap;
  }
  return some_list;
}

console.log(selection_sort([1, 5, 4, 0, 2]));
