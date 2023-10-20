// 선형 탐색
function linear_search(element, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (element === array[j]) {
        return j;
      }
    }
  }

  return "None";
}

console.log(linear_search(2, [2, 3, 5, 7, 11]));
console.log(linear_search(0, [2, 3, 5, 7, 11]));
console.log(linear_search(5, [2, 3, 5, 7, 11]));
console.log(linear_search(11, [2, 3, 5, 7, 11]));
