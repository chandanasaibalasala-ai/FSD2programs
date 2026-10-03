const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a positive integer: ", (input) => {
    let num = Number(input);

    // Check whether the number is prime
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (!isPrime) {
        console.log("Not prime");
    } else {
        // Find the next palindrome
        let next = num + 1;

        while (true) {
            let str = String(next);
            let reverse = str.split("").reverse().join("");

            if (str === reverse) {
                console.log("Next palindrome:", next);
                break;
            }

            next++;
        }
    }

    rl.close();
});
