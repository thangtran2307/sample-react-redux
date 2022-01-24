import React from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Routing from './components/Routing';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div>
      <LoadingScreen />
      {/* <header>Header</header> */}
      <main><Routing /></main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;
