const age = 30;

if (age < 0) {
console.log("Invalid age");
} else if (age < 5) {
console.log("Free entry");
} else if (age <= 17) {
console.log("Child discount");
} else if (age <= 64) {
console.log("Full price");
} else {
console.log("Senior discount");
}