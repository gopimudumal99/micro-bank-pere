import React,{useState, FC } from 'react';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';



const App:FC = () =>{
  const [isLogin,setIsLogin] = useState(false)

  const logged = () => {
     setIsLogin(!isLogin)
  }

  return (
    <div className="App">
    {/* <Register isLogin={isLogin} logged={logged}/> */}
    <Navbar/>
    <Dashboard/>
    </div>
  );
}

export default App;
