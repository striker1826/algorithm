// 1부터 n까지의 합 --> 재귀적 풀이
function consecutive_sum(start, end) {
  if (start === end) {
    return start;
  }
  return consecutive_sum(start, end - 1) + end;
}

// 1부터 n까지의 합 --> 분할 정복식 풀이
function consecutive_sum2(start, end) {
  if (start === end) {
    return start;
  }
  const mid = Math.floor((start + end) / 2);
  return consecutive_sum2(start, mid) + consecutive_sum2(mid + 1, end);
}

console.log(consecutive_sum2(3, 4));
console.log(consecutive_sum2(1, 10));
console.log(consecutive_sum2(1, 100));
