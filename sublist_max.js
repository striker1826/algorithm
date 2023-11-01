function sublist_max(profits) {
  let maximumProfit = profits[0];

  for (let i = 0; i < profits.length; i++) {
    let total = 0;
    for (let j = i; j < profits.length; j++) {
      total += profits[j];

      if (maximumProfit < total) {
        maximumProfit = total;
      }
    }
  }
  return maximumProfit;
}

console.log(sublist_max([7, -3, 4, -8]));
console.log(sublist_max([4, 3, 8, -2, -5, -3, -5, -3]));
console.log(sublist_max([2, 3, 1, -1, -2, 5, -1, -1]));
console.log(sublist_max([7, -3, 14, -8, -5, 6, 8, -5, -4, 10, -1, 8]));
