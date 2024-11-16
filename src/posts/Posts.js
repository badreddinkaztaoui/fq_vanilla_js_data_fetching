import { PostsStyle } from "./PostsStyle.js";

class Posts {
  constructor() {
    this.posts = [];
    this.selectedPost = null;
    this.isLoading = false;
    this.error = null;

    this.getPosts = this.getPosts.bind(this);
    this.render = this.render.bind(this);
    this.setSelectedPost = this.setSelectedPost.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setupEventListeners = this.setupEventListeners.bind(this);
  }

  createLoadingSpinner() {
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.innerHTML = `
            <div class="spinner-icon"></div>
        `;
    return spinner;
  }

  createErrorElement() {
    const errorElement = document.createElement("div");
    errorElement.classList.add("error");
    errorElement.innerHTML = `
            <h2>There was an error fetching the posts</h2>
            <p>${this.error}</p>
            <button id="retry" class="retry-button">Retry</button>
            
        `;
    return errorElement;
  }

  createModal(post) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", this.closeModal);
    return modal;
  }

  closeModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.remove();
      this.selectedPost = null;
    }
  }

  setSelectedPost(event) {
    const postElement = event.target.closest(".post-item");
    if (!postElement) return;

    const id = postElement.getAttribute("data-id");
    const selectedPost = this.posts.find((post) => post.id === parseInt(id));

    if (selectedPost) {
      this.selectedPost = selectedPost;
      const modal = this.createModal(this.selectedPost);
      document.body.appendChild(modal);
    }
  }

  async getPosts() {
    const root = document.getElementById("root");
    if (!root) return;

    this.isLoading = true;
    this.error = null;
    root.innerHTML = "";
    root.appendChild(this.createLoadingSpinner());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = await response.json();
      this.isLoading = false;
      this.render();
    } catch (error) {
      this.error = error.message;
      this.isLoading = false;
      console.error("Error fetching posts", error);
      root.innerHTML = "";
      root.appendChild(this.createErrorElement());
    }
  }

  render() {
    const root = document.getElementById("root");
    if (!root) return;

    root.innerHTML = `
        <div class="posts-container">
          <h1>Posts</h1>
          <div class="posts-grid" id="posts-grid">
            ${this.posts
              .map(
                (post) => `
              <article class="post-item" data-id="${post.id}">
                <h2>${this.escapeHtml(post.title)}</h2>
                <p>${this.escapeHtml(post.body)}</p>
              </article>
            `
              )
              .join("")}
          </div>
      </div>
        `;

    this.setupEventListeners();
  }

  setupEventListeners() {
    const list = document.getElementById("posts-grid");
    list.addEventListener("click", this.setSelectedPost);
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  init() {
    this.getPosts();
  }
}

PostsStyle();

export default Posts;
