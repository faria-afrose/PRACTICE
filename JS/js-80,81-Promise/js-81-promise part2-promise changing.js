const task1 = () => {
  return new Promise((resolve, reject) => {
    resolve("Task1 is completed");
  });
};
const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task2 is not completed");
    }, 2000);
  });
};
const task3 = () => {
  return new Promise((resolve, reject) => {
    resolve("Task3 is completed");
  });
};
const task4 = () => {
  return new Promise((resolve, reject) => {
    reject("Task4 is rejected");
  });
};
//calling
task1()
  .then((res) => console.log(res))
  .then(task2)
  .then((res) => console.log(res))
  .then(task3)
  .then((res) => console.log(res))
  .then(task4)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
