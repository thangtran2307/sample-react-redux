import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Sample React Redux</h1>
      <h2>
        Backend Endpoint:
        {' '}
        {process.env.REACT_APP_BACKEND_ENDPOINT}
      </h2>
    </div>
  );
}

export default App;
