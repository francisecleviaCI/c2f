/*******************************************************************************
 * Your code here!
 ******************************************************************************/

 //1.
//console.log(process.argv[2])

// -- getInput(n) & process.argv refers to the 'node main.js #' input in 
//the terminal. node = 0, main.js = 1, user input = 2.
//That's why [n+2] below is used to capture the user input.--

function getInput(n) {
  return process.argv[n + 2];
}
//--the 'input' variable below stores the return value into a variable.--
let input = getInput(0)
console.log(input)
//const celsius = process.argv[0];

//2.
//-- 'celsius' is the parameter(which can be named anything)
//which serves as a placeholder because we don't always know
//what the input will be. When the 'input' is put into the
//function, it produces a return value. --
function conversion(celsius){
  return (celsius * 9/5) + 32;
}

//3.
//-- 'answer' below is a variable that stores the output --
let answer = conversion(input);
answer; 
console.log('Fahrenheit is ' + answer)

// //4.

const result = 'The concatenated result is ' + input + answer;

// //5.

console.log(result)


/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  first one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
