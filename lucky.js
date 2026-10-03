const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your date of birth (DD/MM/YYYY): ", (dob) => {

    // Remove /
    let date = dob.replace(/\//g, "");

    // Calculate sum of individual digits
    let sum = 0;

    for (let i = 0; i < date.length; i++) {
        sum += Number(date[i]);
    }

    // Convert to single digit
    while (sum >= 10) {
        let temp = 0;

        while (sum > 0) {
            temp += sum % 10;
            sum = Math.floor(sum / 10);
        }

        sum = temp;
    }

    console.log("\nLucky Number:", sum);

    // Meaning of lucky number
    switch (sum) {
        case 1:
            console.log("Born to be a leader");
            break;

        case 2:
            console.log("Peaceful and cooperative");
            break;

        case 3:
            console.log("Creative and expressive");
            break;

        case 4:
            console.log("Hardworking and practical");
            break;

        case 5:
            console.log("Adventurous and freedom-loving");
            break;

        case 6:
            console.log("Caring and responsible");
            break;

        case 7:
            console.log("Wise and thoughtful");
            break;

        case 8:
            console.log("Ambitious and successful");
            break;

        case 9:
            console.log("Compassionate and generous");
            break;
    }

    rl.close();
});
