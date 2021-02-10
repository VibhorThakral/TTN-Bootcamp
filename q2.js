// Is palindrome string
const input_string = prompt("Enter the String to check pallindrome");

function check_pallindrome(input_string) {
  const reverse_string = input_string.split('').reverse().join('');
  let result = reverse_string === input_string;

  console.log(result ? `${input_string} is pallindrome` : `${input_string} is not a pallindrome`);
}

check_pallindrome(input_string);