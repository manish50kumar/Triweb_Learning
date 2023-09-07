
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import MainMenu from './components/layouts/MainMenu'

import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <MainMenu></MainMenu>
      <Routes>
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/about' element={<About/>}></Route> 
          <Route path='/contact' element={<Contact/>}></Route> 
      </Routes>
      
       
    </div>
  );
}

export default App;
