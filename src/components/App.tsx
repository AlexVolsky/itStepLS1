import React from 'react';
import './App.css';
import Button from "./Button/Button";
import ButtonState from './Button/ButtonState';
import ReactCounter from './ReactCounter/ReactCounter';
import Calc from './Calc/Calc';

function App() {
  return (
    <div className="App">
      <h3>This is React Applictaion</h3>
        <Button>Hello</Button>
        <ButtonState></ButtonState>
        <ReactCounter/>
        <Calc/>
    </div>
  );
}

export default App;
