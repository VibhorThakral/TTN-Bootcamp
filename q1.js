// Prompt for amount, interest rate and no. of years and calculate simple interest.

let principal_amount = prompt("Enter the Amount: ");
let int_rate = prompt("Enter the interest rate: ");
let time = prompt("Enter the Number of years: ");

let simple_int = (principal_amount * int_rate * time) / 100;

console.log(`
  <!---------- Question 1 ---------->
  Principal Amount: ${principal_amount}
  Interest Rate: ${int_rate}
  Number of Years: ${time}

  Simple Interest is: ${simple_int}
  <!---------- Question 1 ---------->
`);