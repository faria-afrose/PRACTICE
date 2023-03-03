// console.clear();
// // same this but using promise

// const makeRequest = (method, url, data) => {
//   //xml http request
//   const xhr = new XMLHttpRequest();
//   //initialize with open function
//   //get method
//   xhr.open(method, url);

//   //OPEN AND SEND R MAJHYE onlode and setRequestHeder  method.
//   //json formate e send korar jnno request ta hbe jeson formate e
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     //response property r madhome data asbe

//     let data = xhr.response;
//     console.log(xhr.status);

//     console.log(JSON.parse(data));
//   };

//   //for error
//   xhr.onerror = () => {
//     console.log("Error occurs");
//   };

//   xhr.send(JSON.stringify(data));
// };
// // const getData = (method, url) => {
// //   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts/1");
// // };
// // getData();
// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   });
// };
// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title: "New_foo",
//     body: "NEW_bar",
//     userId: 1,
//   });
// };
// const updateSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "New title",
//   });
// };

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1", {});
// };
// // sendData();
// // updateData();
// // updateSingleData();
// deleteData();

console.clear();

const makeRequest = (method, url, data) => {
  return new Promise(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => {
      let data = xhr.response;
      console.log(xhr.status);

      console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
      console.log("Error occurs");
    };

    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then((res) =>
    console.log(res)
  );
};
getData();
