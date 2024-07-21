let ar1 = [-1, -100,-9, 0, 2, -8,6, 3];
let ar2 = ar1.filter((value, i) => {
  if (value < 0) {
    return false;
  } else {
    return true;
  }
});
console.log(ar2);
