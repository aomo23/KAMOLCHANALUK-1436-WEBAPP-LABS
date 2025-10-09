import readline from "readline";

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error("Please enter two numbers");
    process.exit(1);
}

const num1Str = args[0];
const num2Str = args[1];

const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
    console.error("Please enter two numbers");
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('add | subtract ', (operatorInput) => {
    rl.close(); 

    const operator = operatorInput.toLowerCase().trim(); 
    let result;
    let displayOperator;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            displayOperator = '+';
            break;
        case 'subtract':
            result = num1 - num2;
            displayOperator = '-';
            break;
        default:
            console.error("Unknown operator");
            process.exit(1);
    }

    console.log(`${num1} ${displayOperator} ${num2} = ${result}`);
});
