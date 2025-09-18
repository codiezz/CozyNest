import react, {useState} from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import './App.css'
import Classcomp from './topics/Classcomp';
import CounterFunc from './topics/CounterFunc';
import EventHandling from './topics/EventHandling';
import Props from './topics/Props';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Best from './Pages/Best';
import Welcome from './Pages/Welcome';
import { Outlet } from 'react-router-dom';
import FormHandling from './topics/FormHandling';
import Login from './Pages/Login';
import LifeCycleMethod from './topics/LifeCycleMethod';

import Usestatehook from './topics/Usestatehook';
import UseEffecthook from './topics/UseEffecthook';
import Api from './topics/Api';
import Shop from './Pages/Shop';
import Footer from './components/Footer';
import ShopCategory from './Pages/ShopCategory';
import sofa_banner from './components/Logos/sofa-banner.jfif';
import { sofaBanner } from './components/Banner';
import ShopContextProvider from './Pages/ShopContext';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
//import bed_banner from '';
//import cabinet_banner from '';
//import table_banner from '';
//import dining_banner from '';
//import homedecor_banner from '';
//import lamp_banner from '';




function test() {
  return (
    <div>
         <ShopContextProvider>
    <BrowserRouter>

<switch>
       <Routes>
         <Route path="" element={<Home/>}/>
         
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/FormHandling' element={<FormHandling/>}/>
        <Route path="/Best" element={<Best/>}>
        <Route path="welcome" element={<Welcome/>}/>
        </Route>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/sofa" element={<ShopCategory image={sofa_banner} category="sofa"/>}/>
        <Route path="/bed" element={<ShopCategory image={sofa_banner}  category="bed"/>}/>
        <Route path="/cabinet" element={<ShopCategory image={sofa_banner}  category="cabinet"/>}/>
        <Route path="/table" element={<ShopCategory image={sofa_banner} category="table"/>}/>
        <Route path="/dining" element={<ShopCategory image={sofa_banner} category="dining"/>}/>
        <Route path="/homedecor" element={<ShopCategory image={sofa_banner} category="homeDecor"/>}/>
        <Route path="/lamp" element={<ShopCategory image={sofa_banner} category="lamp"/>}/> 
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
</switch> 

       </BrowserRouter>    
      
  </ShopContextProvider>  
  
      </div>
  )
}


export default test;
