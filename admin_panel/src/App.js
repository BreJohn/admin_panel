import React from 'react';
import './App.css';
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar'
import {USERS} from "./assets/user_data";

function App() {
  const users = [...USERS];
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-md col-3 leftSideBar"> 
          <LeftSideBar users={users}></LeftSideBar>
        </div>
        <div className="col-md col-9 rightSideBar">
          <RightSideBar users={users}></RightSideBar>
        </div>
      </div>
    </div>
  );
}

export default App;
