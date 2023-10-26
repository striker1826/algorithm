function merge(list1, list2) {
  let i = 0;
  let j = 0;
  let merged_list = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      merged_list.push(list1[i]);
      i++;
    } else if (list1[i] > list2[j]) {
      merged_list.push(list2[j]);
      j++;
    }
  }

  if (i === list1.length) {
    merged_list = merged_list.concat(list2.slice(j, list2.length));
    return merged_list;
  }

  if (j === list2.length) {
    merged_list = merged_list.concat(list1.slice(i, list1.length));
    return merged_list;
  }
}

console.log(merge([1], []));
console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]));
