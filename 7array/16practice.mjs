let isPalindrome = (input) => {
  if (input === input.split("").reverse().join("")) {
    return true;
  }
};
let input = "MOM";
let output = isPalindrome(input);
if (output === true) {
  console.log(`${input} is palindrome`);
} else {
  console.log(`${input} is not palindrome`);
}
