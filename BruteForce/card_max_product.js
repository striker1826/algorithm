// 두 개의 카드뭉치로 만들 수 있는 조합에서 가장 큰 수를 구하는 함수
function max_product(left_cards, right_cards) {
  let answer = 0;

  for (let i = 0; i < left_cards.length; i++) {
    for (let j = 0; j < right_cards.length; j++) {
      currentValue = left_cards[i] * right_cards[j];
      if (answer < currentValue) {
        answer = currentValue;
      }
    }
  }

  return answer;
}

max_product([1, 6, 5], [4, 2, 3]);
max_product([1, -9, 3, 4], [2, 8, 3, 1]);
max_product([-1, -7, 3], [-4, 3, 6]);
