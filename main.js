import Posts from "./src/posts/Posts.js";

window.addEventListener("DOMContentLoaded", () => {
  const posts = new Posts();
  posts.init();
});
