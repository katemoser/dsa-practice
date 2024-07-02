/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

function zero(...args) {
  if (args.length === 0) return 0;
  const [fn] = args;

  return fn(0);
}


function one(...args) {
  if (args.length === 0) return 1;
  const [fn] = args;

  return fn(1);
}
function two(...args) {
  if (args.length === 0) return 2;
  const [fn] = args;

  return fn(2);
}
function three(...args) {
  if (args.length === 0) return 3;
  const [fn] = args;

  return fn(3);
}

function four(...args) {
  if (args.length === 0) return 4;
  const [fn] = args;

  return fn(4);
}

function five(...args) {
  if (args.length === 0) return 5;
  const [fn] = args;

  return fn(5);
}
function six(...args) {
  if (args.length === 0) return 6;
  const [fn] = args;

  return fn(6);
}
function seven(...args) {
  if (args.length === 0) return 7;
  const [fn] = args;

  return fn(7);
}
function eight(...args) {
  if (args.length === 0) return 8;
  const [fn] = args;

  return fn(8);
}
function nine(...args) {
  if (args.length === 0) return 9;
  const [fn] = args;

  return fn(9);
}

function plus(num) {

  function add(n) {
    return n + num;
  }

  return add;
}


function minus(num) {
  function subtract(n) {
    return n - num;
  }
  return subtract;

}


function times(num) {
  function multiply(n) {
    return n * num;
  }
  return multiply;
}

function dividedBy(num) {
  function divide(n) {
    return Math.floor(n / num);
  }
  return divide;
}