//? ---- array.map() polyfill ----
Array.prototype.myMap = function (callbackFn, thisArg) {
  // If callbackFn is not a function, then exit
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const newArr = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    newArr[i] = callbackFn.call(thisArg, this[i], i, this);
  }

  return newArr;
};

//? ---- array.filter() polyfill ----
Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(thisArg, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

//? ---- array.reduce() polyfill ----
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  if (this.length === 0 && initialValue === undefined) {
    throw new Error("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue ? initialValue : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    // accumulator = callbackFn.call(undefined, accumulator, this[i], i, this)
    // Because here, callBackFn, does not receive a this context,
    // therefore dont have to invoke function with call()
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};
