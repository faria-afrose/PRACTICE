console.clear();
const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getData = () => {
  makeRequest(
    "https:/jsonplaceholder.typicode.com/posts",
    "GET"
    //         , {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }
  )
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};

const postData = () => {
  makeRequest("https:/jsonplaceholder.typicode.com/posts", "POST", {
    title: "foo",
    body: "bar",
    userId: 1,
  })
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};

getData();
postData();
