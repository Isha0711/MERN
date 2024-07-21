// ["my","nAme","is","isHa"] -> ["My","Name","Is","Isha"]

// if input array and output array has the same length,then always use map

let firstLetterCapital = (input) => {
  let inputArr = input.split("");
  let inputArr1 = inputArr.map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  });
  let output = inputArr1.join("");
  return output;
};
let realInput = ["my", "nAme", "is", "isHa"];
let realOutput = realInput.map((value, i) => {
  return firstLetterCapital(value);
});
console.log(realOutput); //["My","Name","Is","Isha"]
