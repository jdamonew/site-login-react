import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
  );
  
  library.add(fas)
reportWebVitals();
