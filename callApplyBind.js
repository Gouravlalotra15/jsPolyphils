//? call() polyfill
Function.prototype.myCall = function (thisArg, ...args) {
  const context = thisArg || window;

  const uniqueKey = Symbol();
  context[uniqueKey] = this;

  // Invoking the function
  const result = context[uniqueKey](...args);

  // deleting the key
  delete context[uniqueKey];

  return result;
};

//? apply() polyfill
Function.prototype.myApply = function (thisArg, argsArray) {
  const context = thisArg || window;

  const uniqueKey = Symbol();
  // we can also use timestamp or something like that for creating a random key
  // But Symbol is more appropriate to use here, since it guarantees to be unique
  context[uniqueKey] = this;

  // Invoking the function
  const result = context[uniqueKey](...argsArray);

  // deleting the key
  delete context[uniqueKey];

  return result;
};

//? bind() polyfill
Function.prototype.myBind = function (context, ...args1) {
  const originalFunction = this; // The original function to be bound

  return function (...args2) {
    return originalFunction.apply(context, [...args1, ...args2]);
  };
};
