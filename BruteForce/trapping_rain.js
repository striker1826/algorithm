// 건물 사이에 담기는 빗물의 총량을 구하는 함수
function trapping_rain(buildings) {
  let total_height = 0;
  for (let i = 1; i < buildings.length - 1; i++) {
    // 왼쪽과 오른쪽의 가장 높은 빌딩을 찾는다.
    const left_max = Math.max(...buildings.slice(0, i));
    const right_max = Math.max(...buildings.slice(i + 1));

    // 왼쪽과 오른쪽을 비교하여 낮은 빌딩을 찾는다.
    const upper_bound = Math.min(left_max, right_max);

    // upper_bound에서 현재 인덱스의 건물 높이를 뺀다. (단, 결과가 음수일 경우는 0을 리턴)
    total_height += Math.max(0, upper_bound - buildings[i]);
  }

  console.log(total_height);
}

trapping_rain([3, 0, 0, 2, 0, 4]);
trapping_rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
