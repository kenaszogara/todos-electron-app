import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Todos from './todos';

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
