import { setupTodosStyle } from "./TodosStyle.js";

class Todos {
  constructor() {
    this.state = {
      todos: [
        { id: 1, text: "Buy milk", completed: false },
        { id: 2, text: "Do laundry", completed: false },
        { id: 3, text: "Clean room", completed: false },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.render = this.render.bind(this);
    this.setupEventListeners = this.setupEventListeners.bind(this);
  }

  addTodo(text) {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    }

    this.state.todos = [...this.state.todos, newTodo];
    this.render();
  }

  toggleTodo(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id == id)
        return { ...todo, completed: !todo.completed };
      return todo;
    })

    this.state.todos = updatedTodos;
    this.render();
  }

  deleteTodo(id) {
    const updatedTodos = this.state.todos.filter((todo) => todo.id != id);
    this.state.todos = updatedTodos;
    this.render();
  }

  render() {
    const root = document.getElementById("root");
    if (!root) return;

    const totalCount = this.state.todos.length;
    const completedCount = this.state.todos.filter(
      (todo) => todo.completed
    ).length;

    root.innerHTML = `
      <div class="container">
        <h1 class="title">TODO App</h1>
        <form id="todo-form" class="form">
          <input 
            id="todo-input" 
            type="text" 
            class="input-text" 
            placeholder="Add a new todo..." 
            required
          />
          <button type="submit" class="btn btn-add">Add</button>
        </form>

        <ul id="todo-list" class="todo-list">
          ${this.state.todos
            .map(
              (todo) => `
            <li class="todo-item ${todo.completed ? "completed" : ""}" 
                data-id="${todo.id}">
              <span class="todo-text">${this.escapeHtml(todo.text)}</span>
              <div class="todo-actions">
                <button class="btn btn-toggle" title="Toggle Complete">
                  ${todo.completed ? "✓" : "○"}
                </button>
                <button class="btn btn-delete" title="Delete">×</button>
              </div>
            </li>
          `
            )
            .join("")}
        </ul>

        <div class="todo-stats">
          <span>${totalCount} items total</span>
          <span>${totalCount - completedCount} items left</span>
        </div>
      </div>
    `;

    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo(input.value);
      input.value = "";
    });

    todoList.addEventListener("click", (e) => {
      const target = e.target;
      const todoItem = target.closest(".todo-item");
      if (!todoItem) return;

      const id = Number(todoItem.getAttribute("data-id"));

      if (target.classList.contains("btn-toggle")) {
        this.toggleTodo(id);
      } else if (target.classList.contains("btn-delete")) {
        this.deleteTodo(id);
      }
    });
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  init() {
    this.render();
  }
}

setupTodosStyle();

export default Todos;
