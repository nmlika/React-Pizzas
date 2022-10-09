import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import store from './redux/store'
import { BrowserRouter as Router} from 'react-router-dom'
console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <App />
   </Router>
  </React.StrictMode>
);