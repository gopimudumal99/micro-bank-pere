import React,{useState, FC } from 'react';

import './App.css';
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
    </div>
  );
}

export default App;
