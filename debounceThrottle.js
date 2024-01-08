//? ---- debounce() polyfill ----
function myDebounce(func, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      func.apply(this, arguments);
    }, delay);
  };
}

//? ---- throttle polyfill ----
function myThrottle(func, delay) {
  let lastExecuted = 0;
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;
    const currentTime = Date.now();

    if (currentTime - lastExecuted >= delay) {
      if (timeoutId) clearTimeout(timeoutId);

      func.apply(context, args);
      lastExecuted = currentTime;
    } else if (!timeoutId) {
      timeoutId = setTimeout(function () {
        func.apply(context, args);
        lastExecuted = Date.now();
        timeoutId = null;
      }, delay - (currentTime - lastExecuted));
    }
  };
}
