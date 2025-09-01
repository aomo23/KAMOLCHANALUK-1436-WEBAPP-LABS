function isPositiveInteger(value) {
    let num = Number(value);
    return Number.isInteger(num) && num > 0;
}

function isNegativeInteger(value) {
    let num = Number(value);
    return Number.isInteger(num) && num < 0;
}

function readInput() {
    let numbers = [];
    while (true) {
        let input = prompt("Enter an integer (a negative integer to quit):");
        if (input === null) continue; 

        if (!Number.isInteger(Number(input))) {
            continue;
        }

        if (isNegativeInteger(input)) break;

        if (isPositiveInteger(input)) {
            numbers.push(Number(input));
        }
    }
    return numbers;
}

function displayStats(list) {
    let avg = list.length > 0 
        ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) 
        : 0;
    let min = list.length > 0 ? Math.min(...list) : 0;
    let max = list.length > 0 ? Math.max(...list) : 0;

    alert(
        `For the list ${list.join(",")}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`
    );
}

window.onload = function() {
    let list = readInput();
    displayStats(list);

    document.getElementById("message").innerHTML = `
        <h2>Statistics Calculator!</h2>
        <h1>Write the web app to prompt accepting for positive integers until the user enters a negative integer
</h1>
        <ul class="circle">
            <li>If the entered text is not a positive integer number, then the web app will keep asking for a number until the valid positive integer is entered</li>
            <li>If the entered text is a negative integer, then the web app will show the statistics (average, min, max) of all entered positive integers</li>
        </ul>
        <h3>Note:</h3>
        <ol class="numlist">
            <li>You need to implement functions to check whether an entered text is a positive integer or not and whether an entered text is a negative integer or not</li>
            <li>You need to implement functions to compute average, min, and max of a list of integers</li>
        </ol>
    `;
};
