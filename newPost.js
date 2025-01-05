const posts = [
  { title: "title1", text: "Post 1" },
  { title: "title2", text: "Post 2" },
  { title: "title3", text: "Post 3" },
  { title: "title4", text: "Post 4" },
];

const listPosts = () =>
  posts.map((post) => {
    console.log("title:", post.title, "text: ", post.text);
  });

const newPost = {
  title: "title5",
  text: "Post 5",
};

const addPost = (newPost) => {
  const promise1 = new Promise((res, rej) => {
    posts.push(newPost);
    res(newPost);
    rej("bir hata oluştu");
  });
  return promise1;
};

async function showPosts() {
  try {
    listPosts();
    await addPost(newPost);
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

showPosts();
