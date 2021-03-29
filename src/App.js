import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Counters from './components/Counters'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
