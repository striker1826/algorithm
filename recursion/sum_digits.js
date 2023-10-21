function sum_digits(n) {
  // base case: n이 한 자릿수 일때 그대로 리턴
  if (n < 10) {
    return n;
  }
  /** recursion case
   *   Math.floor(n/ 10) --> 숫자의 마지막 자리 제거
   *   n % 10 --> 숫자의 마지막 자리 가져오기
   * */
  return sum_digits(Math.floor(n / 10)) + (n % 10);
}

console.log(sum_digits(22541));
