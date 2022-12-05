import React from 'react';
import './App.css';
import Button from "./Button/Button";
import ButtonState from './Button/ButtonState';
import ReactCounter from './ReactCounter/ReactCounter';
import Calc from './Calc/Calc';
import UserCards from './Users/UserCards';
import Posts from './Posts/Posts';
import Users from './pages/Users';
import Navbar from './Navigation/Navbar';
import AppRoutes from './AppRoutes/AppRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        
        <AppRoutes/>
      </div>
      {/* <h1>This is React Applictaion</h1>
       */}
       {/*  <Button>Hello</Button>
        <ButtonState></ButtonState>
        <ReactCounter/>
        <Calc/> */}
       {/*  <Users/>
       { <Posts/>} */}
    </div>
  );
}

export default App;
