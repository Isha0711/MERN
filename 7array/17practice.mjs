//to get the longest palindrome word
let isPalindrome = (input) => {
  if (input === input.split("").reverse().join("")) {
    return true;
  }
};
let longestPalindrome = (input) => {
  let temp1 = input.split(" "); //["my","mom","is","beautiful","but","i","like","madam"]
  let temp2 = temp1.filter((word) => {
    return isPalindrome(word);
  }); //["mom","madam"]
  let tempWord = ""; //"madam"
  temp2.forEach((word) => {
    if (word.length > tempWord.length) {
      tempWord = word;
    }
  });
  return tempWord;
};

console.log(longestPalindrome("I don't know what to write lol so abababa"));
