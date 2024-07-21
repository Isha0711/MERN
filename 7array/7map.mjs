let input = ["n", "i", "T", "A", "n"];
let output = input.map((value, i) => {
  if (i === 0) {
    return value.toUpperCase();
  } else {
    return value.toLowerCase();
  }
});
console.log(output);  //N i t a n
