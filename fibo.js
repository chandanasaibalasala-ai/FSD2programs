const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (input) => {
    let n = Number(input);

    let a = 0;
    let b = 1;
    let found = false;

    while (a <= n) {
        if (a === n) {
            found = true;
            break;
        }

        let c = a + b;
        a = b;
        b = c;
    }

    if (found) {
        console.log(n + " is a Fibonacci number");
    } else {
        console.log(n + " is not a Fibonacci number");
    }

    rl.close();
});
