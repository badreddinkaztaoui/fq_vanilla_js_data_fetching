export const setupTodosStyle = () => {
  const style = document.createElement("style");

  style.textContent = `
  .container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
  }

  .title {
    text-align: center;
    color: #333;
  }

  .form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .input-text {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .btn-add {
    background-color: #4CAF50;
    color: white;
  }

  .btn-add:hover {
    background-color: #45a049;
  }

  .todo-list {
    list-style: none;
    padding: 0;
  }

  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    background-color: #f9f9f9;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .todo-item.completed .todo-text {
    text-decoration: line-through;
    font-style: italic;
    color: #888;
  }

  .todo-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-toggle, .btn-delete {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }

  .btn-toggle {
    background-color: #2196F3;
    color: white;
  }

  .btn-delete {
    background-color: #f44336;
    color: white;
  }

  .todo-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
`;

  document.head.appendChild(style);
};
