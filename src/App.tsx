import React,{FC } from 'react';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import EditProfile from './components/EditProfile/EditProfile';
import Register from './components/Register/Register';
import {Route,Routes} from 'react-router-dom'
import LoginComponent from './components/Register/LoginComponent';


const App:FC = () =>{

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Register/> }/>
        <Route path="/login" element={<LoginComponent />}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path = "/editProfile" element={<EditProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
