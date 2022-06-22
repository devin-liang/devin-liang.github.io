import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index is entry point, creates app
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);