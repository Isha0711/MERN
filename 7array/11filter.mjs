// we can use filter in the following cases:
// [1,2,10]= [1,2]
// [1,2,10]= [1]
// however we cannot use filter for:
// [1,2,10]=[1,4]

let input = [1, 2, 3, 4, 5];
let output = input.filter((value, i) => {
  if (value >= 3) {
    return true;
  } else {
    return false;
  }
});
console.log(output); // [3, 4, 5];
