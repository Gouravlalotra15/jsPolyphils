// The ability of a function to access all the variables and functions that are out of its scope is called closure.
// The function bounded with its outer lexical scope is called as a Closure

// Used for memoization
// Currying is also based on this
const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log(`fetching from cahce for args ${argsToString}`);
      return cache[argsToString];
    } else {
      console.log(`computing values for args ${argsToString}`);
      const result = fn.apply(this, args);
      cache[argsToString] = result;
      return result;
    }
  };
};

const addThreeNums = (a, b, c) => a + b + c;
const add = memoize(addThreeNums);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));

const memoizedFactorial = memoize((x) => {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
});

// console.log(memoizedFactorial(5));
// console.log(memoizedFactorial(6));
