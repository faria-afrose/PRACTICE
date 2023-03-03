//dummy data
// const dummyText = [
//   {
//     title: "this is title1",
//     body: "This is body1",
//   },
//   {
//     title: "this is title2",
//     body: "This is body2",
//   },
//   {
//     title: "this is title3",
//     body: "This is body3",
//   },
//   {
//     title: "this is title4",
//     body: "This is body4",
//   },
//   {
//     title: "this is title5",
//     body: "This is body5",
//   },
//   {
//     title: "this is title6",
//     body: "This is body6",
//   },
//   {
//     title: "this is title7",
//     body: "This is body7",
//   },
//   {
//     title: "this is title8",
//     body: "This is body8",
//   },
// ];
//fetch data
const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    throw Error("Data is not fetched");
  }
};
const findPost = document.querySelector(".posts");
const loadData = async () => {
  const dummyText = await fetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  dummyText.map((dummyText) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `<h2 class="post-title">${dummyText.title}</h2>
            <p class="post-para">${dummyText.body}</p>`;
    findPost.appendChild(postElement);
  });
};
loadData();
// /*<div class="posts">
//         <div class="post">
//             <h2 class="post-title">Post title</h2>
//             <p class="post-para">This is paragraph.</p>
//         </div>
//     </div> */
