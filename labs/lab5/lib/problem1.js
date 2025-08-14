function validateInput(input) {
  const num = Number(input);
  return Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
  const primes = [];
  outer: for (let num = 2; num <= limit; num++) {
    for (let div = 2; div <= Math.sqrt(num); div++) {
      if (num % div === 0) continue outer;
    }
    primes.push(num);
  }
  return primes;
}

(function startApp() {
  let number;
  while (true) {
    const userInput = prompt("Enter a positive integer");
    if (validateInput(userInput)) {
      number = Number(userInput);
      break;
    } else {
      continue;
    }
  }

  const primes = findPrimes(number);
  if (primes.length > 0) {
    alert(`For n = ${number}, prime numbers are ${primes.join(", ")}`);
  } 

  document.getElementById("message").innerHTML = `
    <h2>Prime Numbers Finder!</h2>
    <h1>
     Write the web app to prompt accepting for a positive integer number
    </h1>
    <ul class="circle">
        <li>If the entered text is not a positive integer number, then the web app will keep asking for a number until the valid positive integer is entered</li>
        <li>If the entered text is a positive integer, then the web app will add into a list of prime numbers</li>
    </ul>
    <h1>Hints :</h1>
    <ol class="numlist">
        <li>You may want to use loop with label</li>
        <li>You may want to use array with push function</li>
    </ol>
  `;
})();
