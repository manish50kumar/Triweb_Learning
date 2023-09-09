import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ContextFavourte } from './store/ContextFavourite';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFavourte>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextFavourte>
    
 
);

