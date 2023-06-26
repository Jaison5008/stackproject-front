import {BrowserRouter, Routes,Route}from "react-router-dom"
import Navbar from './components/Navbar' 
import Signin from './pages/signin'  
import Home from './pages/Home'
import Usersignup from "./pages/signup" 
import Footer from './components/Foot'  
import Questionpost from './pages/questionpost' 
import Anspost from './pages/anspost'
import { useState } from "react"

function App() { 
  const [key,setKey]=useState('') 

  const keyHandler=(e)=>{  
    console.log(e)
    setKey(e)
  }
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar keyHandler={keyHandler}/> 
      <Routes>  
      <Route exact path="/" element={<Home keys={key}/> }/>
       <Route exact path="/Login" element={<Signin/> }/>  
    <Route path="/Signup" element={<Usersignup/> }/>  
    <Route path="/questionpost" element={<Questionpost/> }/>  
    <Route path="/answerpost/:id" element={<Anspost/> }/>    
    
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
