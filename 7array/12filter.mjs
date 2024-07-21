let ar1 = [1, 2, 6, 3];
let ar2 = ar1.filter((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ar2); //[2,6]
