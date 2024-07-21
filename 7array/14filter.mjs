let ar1 = ["a", 1, "b", 3, "isha"];
let ar2 = ar1.filter((value, i) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
});
console.log(ar2);
