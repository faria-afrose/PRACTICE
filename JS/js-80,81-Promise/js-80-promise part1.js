//creating
const promise1 = new Promise((resolve, reject) => {
  let completedPromise = true;

  if (completedPromise) {
    setTimeout(() => {
      resolve("Completed promise1");
    }, 2000);
  } else {
    reject(new Error("Not Completed promise1"));
  }
});

//PROMISE2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed promise2");
  }, 1000);
});
// promise calling , then function will work it it is resolve
// promise1.then((res) => {
//   console.log(res);
// });
// //if it's resect / not resolve then
// promise1.catch((err) => {
//   console.log(err.message);
// });
// promise2.then((res) => {
//   console.log(res);
// });
//all function use
// Promise.all([promise1, promise2]).then(([res1, res2]) => {
//   console.log(res1, res2);
// });
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
