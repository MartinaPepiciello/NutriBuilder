import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const n = 2;
    return (
        <div>
            Hello! {n}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
