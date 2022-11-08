import React from 'react';
import './App.css';
import Button from "./Button/Button";
import ButtonState from './Button/ButtonState';
import ReactCounter from './ReactCounter/ReactCounter';
import Calc from './Calc/Calc';
import UserCards from './Users/UserCards';

function App() {
  return (
    <div className="App container">
      <h3>This is React Applictaion</h3>
        <Button>Hello</Button>
        <ButtonState></ButtonState>
        <ReactCounter/>
        <Calc/>
        <UserCards/>
    </div>
  );
}

export default App;
