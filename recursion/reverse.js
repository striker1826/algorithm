function reverse(list) {
  if (list.length <= 1) {
    return list;
  }
  return list.slice(-1).concat(reverse(list.slice(0, list.length - 1)));
}

console.log(reverse([1, 2, 3, 4, 5]));
