// function merge(list1, list2) {
//   i = 0;
//   j = 0;
//   let merged_list = [];

// while (i < list1.length && j < list2.length) {
//   if (list1[i] < list2[j]) {
//     merged_list.push(list1[i]);
//     i += 1;
//   } else {
//     merged_list.push(list2[j]);
//     j += 1;
//   }
// }

//   if (i === list1.length) {
//     merged_list = merged_list.concat(list2.slice(j, list2.length));
//   } else if (j === list2.length) {
//     merged_list = merged_list.push(list1.slice(i, list1.length));
//   }
//   return merged_list;
// }

function merge2(list1, list2) {
  let i = 0;
  let j = 0;

  let merged_list = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      merged_list.push(list1[i]);
      i += 1;
    } else if (list1[i] > list2[j]) {
      merged_list.push(list2[j]);
      j += 1;
    }
  }

  if (i === list1.length) {
    merged_list = merged_list.concat(list2.slice(j, list2.length));
  } else if (j === list2.length) {
    merged_list = merged_list.concat(list1.slice(i, list1.length));
  }
  return merged_list;
}
console.log(merge2([1], []));
console.log(merge2([1, 2, 3, 4], [5, 6, 7, 8]));
