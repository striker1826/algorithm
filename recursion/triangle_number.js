// 재귀함수를 통해서 푸는 방법
function triangle_number(n) {
  if (n === 1) {
    return 1;
  }
  return triangle_number(n - 1) + n;
}

// // 삼각수 공식을 통해서 푸는 방법
// function triangle_number(n) {
//   return (n * (n + 1)) / 2;
// }

for (let i = 1; i < 11; i++) {
  console.log(triangle_number(i));
}
