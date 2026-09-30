// Scores on three assessments

const test1 = 88;
const test2 = 92;
const test3 = 79;

// Arithmetic: average score

const score = (test1 + test2 + test3) / 3;
const tens = Math.floor(score / 10);

let grade;

switch (tens) {
case 10: // a perfect 100
case 9:
    grade = "A";
    break;
case 8:
    grade = "B";
    break;
case 7:
    grade = "C";
    break;
case 6:
    grade = "D";
    break;
default:
    grade = "F";
}

console.log(`Average score: ${score.toFixed(1)}`);
console.log(`Final grade: ${grade}`);

