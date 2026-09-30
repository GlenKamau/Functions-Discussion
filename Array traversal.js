const numbers = [3, 7, 8, 11, -4, 15, 2];

for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];

    // 1. Check for negative numbers first to stop the loop entirely
    if (currentNum < 0) {
        break; 
    }

    // 2. Check for even numbers to skip them
    if (currentNum % 2 === 0) {
        continue; 
    }

    // 3. This only runs if the number is odd and positive
    console.log(currentNum);
}
// Output logs: 3, 7, 11