const is_palindrome = (word) => {
  // base case
  if (word.length <= 1) {
    return word;
  }

  // recursion case
  return word[word.length - 1] + is_palindrome(word.slice(0, word.length - 1));
};

console.log(is_palindrome("토마토"));
