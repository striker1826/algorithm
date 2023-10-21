function max_list(list) {
  // base case
  if (list.length === 1) {
    return list[0];
  }

  // recursion case
  const maxValue = max_list(list.slice(0, list.length - 1));
  if (maxValue >= list[list.length - 1]) {
    return maxValue;
  } else {
    return list[list.length - 1];
  }
}

console.log(max_list([1, 2, 3]));
console.log(max_list([1, 3, 2, 5, 6, 3, 2, 1]));
