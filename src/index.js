import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {FavoriteContextProvider} from './store/favorites-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FavoriteContextProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
</FavoriteContextProvider>);  

