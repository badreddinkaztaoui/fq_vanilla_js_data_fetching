export const PostsStyle = () => {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
      html {
        box-sizing: border-box;
      }
  
      body {
        font-family: Arial, sans-serif;
        background-color: #f3f4f6;
      }
        
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }

      .posts-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
  
      .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px 0;
      }
  
      .post-item {
        padding: 20px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
  
      .post-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }
  
      .spinner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 200px;
      }
  
      .spinner-icon {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
  
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
  
      .error {
        text-align: center;
        padding: 20px;
        background-color: #fee2e2;
        border: 1px solid #ef4444;
        border-radius: 8px;
        margin: 20px;
      }

      .error h2 {
        color: #ef4444;
        margin-bottom: 10px;
      }

      .error p {
        color: #ef4444;
        margin-bottom: 10px;
      }
  
      .retry-button {
        padding: 8px 16px;
        background-color: #ef4444;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
      }
  
      .retry-button:hover {
        background-color: #dc2626;
      }
  
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
  
      .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        position: relative;
      }
  
      .close-button {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 24px;
        cursor: pointer;
        color: #666;
      }
  
      .close-button:hover {
        color: #000;
      }
    `;
  document.head.appendChild(styleSheet);
};
