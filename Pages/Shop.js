import React from 'react'
import './Home.css';
import image from '../components/Logos/shop1.jpg';
import image1 from '../components/Logos/shop2.avif';
import image2 from '../components/Logos/shop3.jpg';
import image3 from '../components/Logos/shop4.jpg';
import image4 from '../components/Logos/shop5.webp';
import image5 from '../components/Logos/shop-6.jfif';
import image6 from '../components/Logos/shop-7.jpg';
import image7 from '../components/Logos/shop-5.webp';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <>
    <Header/>
      <div className='shop'>
        <div className='abt0'>
        <h1><b>SHOP BY CATEGORIES</b></h1>
        <p>Impressive Collections for your house!!<hr/></p></div>
        <div className='shop-button'>
        <Link to='/sofa'> <button className='shop-buttons'><b><img src={image}/><p>sofa</p></b></button></Link>
        <Link to='/bed'> <button className='shop-buttons'><b><img src={image1}/><p>Beds</p></b></button></Link>
        <Link to='/cabinet'> <button className='shop-buttons'><b><img src={image2}/><p>Cabinets</p></b></button></Link>
        <Link to='/table'><button className='shop-buttons'><b><img src={image3}/><p>Tables</p></b></button></Link>
        <Link to='/dining'><button className='shop-buttons'><b><img src={image4}/><p>Dining</p></b></button></Link>
        <Link to='/homedecor'><button className='shop-buttons'><b><img src={image5}/><p>Home Decor</p></b></button></Link>
        <Link to='/lamp'> <button className='shop-buttons'><b><img src={image6}/><p>Lamps</p></b></button></Link>
        <Link to='/FormHandling'> <button className='shop-buttons'><b><img src={image7}/><p>OTHERS</p></b></button></Link>
            
        </div>
      </div>
      <Footer/>
    </>
  )
}
