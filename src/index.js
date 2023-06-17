import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './Assets/CSS/index.css';
import "./Assets/CSS/icon.css";
import "./Assets/CSS/theme.css";
import "./Assets/CSS/table.css";
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import Loading from './Components/Loading/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
