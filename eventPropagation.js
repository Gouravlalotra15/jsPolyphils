// Pass third argument as true, for capturing to happen
// Default value is false, which is for event bubbling

// event.stopPropagation() can work in both directions
// It can stop event from bubbling as well as from trickling down

console.log("hello");
const divOne = document.getElementById("one");
const divTwo = document.getElementById("two");
const divThree = document.getElementById("three");

divOne.addEventListener(
  "click",
  () => {
    console.log("One");
  },
  true
);

// If any event listener is performed during capturing phase,
// Then it is not invoked again in bubbling phase
divTwo.addEventListener("click", (event) => {
  // true and this prevents trickling down of the event
  // Means If you click on Three div, Three's click event would not be fired
  event.stopPropagation();
  console.log("Two");
  // With true set to false, this event will be captured
  // Meaning this function would be performed while capturing phase
});

divThree.addEventListener("click", (event) => {
  // This prevents bubbling up
  // event.stopPropagation();
  console.log("Three");
});
