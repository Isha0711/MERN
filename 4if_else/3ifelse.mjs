let age = 20;
if (age >= 0 && age <= 18) {
  console.log("Underage");
} else if (age >= 19 && age <= 60) {
  console.log("Adult");
} else if (age >= 61 && age <= 150) {
  console.log("old");
} else {
  console.log("Invalid age. The range should be between 0 and 150 years.");
}
