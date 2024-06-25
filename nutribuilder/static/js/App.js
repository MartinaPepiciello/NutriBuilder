import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { StrictMode } from 'react';
import '../css/styles.css';

function App() {
    const n = 509;
    return (
        <div className='text-red-500'>
            Hello! {n}
        </div>
    );
}

const root = ReactDOM.hydrateRoot( // Updated method
    document.getElementById('app'),
    <StrictMode>
        <App />
    </StrictMode>
);