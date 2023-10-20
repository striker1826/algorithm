function consecutive_sum(start, end) {
  if (end === start) {
    return start;
  }

  let mid = Math.floor((start + end) / 2);

  return consecutive_sum(start, mid) + consecutive_sum(mid + 1, end);
}

console.log(consecutive_sum(1, 4));
