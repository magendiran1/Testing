import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Toggle from './condition/Toggle';
import Person from './condition/Person';
import Persons from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Toggle />
      <Person />
      <Persons name="mage" age={Math.floor(Math.random()*30)}/>
      <Persons name="yogith" age ="10"/>
      <Persons name="poovu" age="12"/>

    </div>
  );
}

export default App;
