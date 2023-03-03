console.clear();
//get method
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((res) => console.log(res));
//post method
// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       id: 1,
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     // headers: {
//     //   "Content-type": "application/json; charset=UTF-8",
//     // },
//   })
//   .then((res) => console.log(res.data))
//   .catch((res) => console.log(res));
//put method
// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       id: 1,
//       title: "new-title",
//       body: "bar-new",
//       userId: 1,
//     }),
//     // headers: {
//     //   "Content-type": "application/json; charset=UTF-8",
//     // },
//   })
//   .then((res) => console.log(res.data))
//   .catch((res) => console.log(res));
//single element update
// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/2", {
//     body: JSON.stringify({
//       id: 2,
//       title: "update-title",
//     }),
//     // headers: {
//     //   "Content-type": "application/json; charset=UTF-8",
//     // },
//   })
//   .then((res) => console.log(res.data))
//   .catch((res) => console.log(res));
//delete method
// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((res) => console.log(res));
//axios method using async,await
const makeRequest = async (config) => {
  return await axios(config);
};
// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
//create data
// const createData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     body: JSON.stringify({
//       title: "foo",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// createData();
//update data
const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/2",
    method: "PUT",
    data: JSON.stringify({
      title: "foo1",
      body: "new-body",
      id: 2,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
//delete
const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/2",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
deleteData();
updateData();
