// 유클리드 거리를 구하는 함수 - 두 점 간의 직선 거리를 계산
function distance(store1, store2) {
  const x = store1[0] - store2[0];
  const y = store1[1] - store2[1];

  return Math.sqrt(x * x + y * y);
}

// 직선 거리가 가장 가까운 매장 두개를 리턴하는 함수
function closest_pair(store_position) {
  let answer = [];
  let shortestDistance = distance(store_position[0], store_position[1]);

  for (let i = 0; i < store_position.length; i++) {
    for (let j = i + 1; j < store_position.length; j++) {
      const currentDistance = distance(store_position[i], store_position[j]);
      if (currentDistance < shortestDistance) {
        shortestDistance = currentDistance;
        answer = [store_position[i], store_position[j]];
      }
    }
  }

  console.log(answer);
}

closest_pair([
  [2, 3],
  [12, 30],
  [40, 50],
  [5, 1],
  [12, 10],
  [3, 4],
]);
