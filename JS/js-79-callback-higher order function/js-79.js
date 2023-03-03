// function square(x) {
//   console.log(`square of ${x} is: ${x * x}`);
// }
// // square(2);
// // const y = square;
// // y(5);
// function higherOrderFunction(num, callback) {
//   callback(num);
// }
// higherOrderFunction(6, square);
const task1 = (callback) => {
  console.log("task1");
  callback();
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log("Task2 ,Data is loading.");
    callback();
  }, 2000);
};
const task3 = (callback) => {
  console.log("task3");
  callback(); //receiver
};
const task4 = () => {
  console.log("task4");
  console.log("Hi");
  document.querySelector("button").addEventListener("click", () => {
    console.log(
      "This is asynchronous thats why does't work without button being clicked .This is between hi and bye..Button is clicked using callback function."
    );
  });
  console.log("Bye.");
};

task1(() => {
  task2(() => {
    task3(() => {
      task4();
    });
  });
});
