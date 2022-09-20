import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Criando rotas para a aplicação, defininco o root como nosso App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Em ambiente de desnvolvimento React.StrictMode retorna erros de forma mais amigaveis para ajudar no desenvolvimento da aplicação 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
