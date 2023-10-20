const is_palindrome = (word) => {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
};

console.log(is_palindrome("토마토"));
