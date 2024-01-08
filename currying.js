// 1. Currying is a function that takes one argument at a time,
// and returns a new function expecting the next argument

// 2. Make functions which are callable as f(a, b), as f(a)(b)

// 3. Currying are created by chaining closures by immediately returning their inner functions simulataneously.

// Significance
// 1. To encourage code reusability
// 2. To create HOCs

// Exaxmple 1
function f(a) {
  return function (b) {
    return a + b;
  };
}

// console.log(f(1)(2));

// Example 2
function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(currySum(1)(2)(3));

// Example 3
function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "substract":
          return a - b;

        case "multiply":
          return a * b;

        case "divide":
          return a / b;

        default:
          return a + b;
      }
    };
  };
}

// const multiply = evaluate("multiply");
// console.log(multiply(2)(3));
// console.log(multiply(4)(5));

// console.log(evaluate("sum")(2)(1));
// console.log(evaluate("substract")(2)(1));
// console.log(evaluate("multiply")(2)(1));
// console.log(evaluate("divide")(2)(1));

// Example 4: Infinite Currying
// sum(1)(2)(3)...(n)()

function curryAdd(a) {
  return function (b) {
    if (b) return curryAdd(a + b);
    return a;
  };
}

// console.log(curryAdd(1)(2)(3)());
// console.log(curryAdd(5)(4)());

// Example 5: Currying vs Partial Application
// Partial Application transforms a function into another function with small arity (number of arguments)
// No of function calls in Partial Application < No of currying
function curryPartialSum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(curryPartialSum(1)(2, 3));

// Example 6: Manipulating DOM
//

// Example 7: Convert a f(a, b, c,) into f(a)(b)(c)
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));
