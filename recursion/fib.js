// 피보나치 수열
// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   const a = fib(n - 2) + fib(n - 1);
//   console.log(a);
//   return a;
// }

function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

console.log(fib(4));
