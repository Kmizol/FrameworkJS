import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Composant/AppComposant/App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);


// function tick() {
// const test = (
// <div>
//   <h1>Bonjour à tous</h1>
//   <h2>Il est {new Date().toLocaleTimeString()} </h2>
// </div>
// );
// ReactDOM.render(
// test,
// document.getElementById('root'))
// }

// setInterval(tick, 1000);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
