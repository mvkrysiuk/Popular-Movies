import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App';
import './css/general_style.css';
import './css/dark_theme.css';
import './css/light_theme.css';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);