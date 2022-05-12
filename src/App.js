import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navmenu from './Home/Navbar';
import FarmerHome from "./Home/farmerhome";
import Newfarmerabout from './Home/newfarmerabout'
import Footer from "./Home/Footer";



const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Navmenu />
    <main>
    <Routes>
    <Route path ="farmerhome" element = {<FarmerHome/>}/>
    <Route exact path ="Newfarmerabout" element = {<Newfarmerabout/>}/>
    </Routes>
    </main>
     <Footer/>
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
