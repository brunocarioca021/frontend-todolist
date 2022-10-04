import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './components/shared/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/shared/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
   
  document.getElementById('root')
);


