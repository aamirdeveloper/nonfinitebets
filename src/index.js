import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { AllContextProvider } from './context/AllContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllContextProvider>
      <BrowserRouter basename=''>
        <App />
      </BrowserRouter>
    </AllContextProvider>
  </React.StrictMode>
);


reportWebVitals();
