import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'beautiful-react-diagrams/styles.css'
import BeautifulDiagram from './components/beautiful-diagram';

import './custom.css';

function App() {
  return (
    <div className='App'>
      <BeautifulDiagram />
    </div>
  );
}

export default App;
