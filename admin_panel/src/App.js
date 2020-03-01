import React from 'react';
import './App.css';
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar'

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-md col-xs-2"> 
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-md col-xs-10">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
}

export default App;
