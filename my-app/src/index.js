import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className="App">
      <h1>Zahra Arzani</h1>

      <h3>weather App</h3>
      <WeatherSearch />
      <a href="https://github.com/zarzani/React-App" target="_blank"> my GitHub Link target="_blank" attribute </a>
      </div>
  </React.StrictMode>
);


