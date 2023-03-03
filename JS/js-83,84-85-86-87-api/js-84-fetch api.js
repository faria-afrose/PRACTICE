//1st poddoti fetch diye htttp req
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     if (!res.ok) {
//       const msg = `Error: ${res.status}`;
//       throw new Error(msg);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//readable string but can't use it so convert it to json
//UPDATE A SINGLE ELEMENT
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },

//   body: JSON.stringify({
//     title: "poo",
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       const msg = `Error: ${res.status}`;
//       throw new Error(msg);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (!res.ok) {
//       const msg = `Error: ${res.status}`;
//       throw new Error(msg);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//2nd way using async
// method for making HTTP Request

console.clear();

const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const msg = `Error: ${res.status}`;
    throw new Error(msg);
  }
  const data = await res.json();
  return data;
};
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
const updateSingleData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "newwwwwwwwwwwww",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
getData();
updateData();
updateSingleData();
