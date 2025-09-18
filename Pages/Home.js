import React from 'react'
import { Link } from 'react-router-dom'
import image from '../components/Logos/home-img.jpg';
import Header from '../components/Header';
import './Home.css';
import Banner from '../components/Banner';
import FormHandling from '../topics/FormHandling';
import Popular from '../components/Cards/Popular';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <div className='home'>
      <div className='overlay'>
        <Header/>
      </div>

    <div className='home-img'>
      {/* <img src={image} width={1500} height={500}/> */}
    </div>
    <div className='home-img-text'>
      <h1>DREAM HOME!!</h1><hr/>
      <p>Discover latest trends and all your favourite
         home decor that would best suit your home </p>
         <Link to='/FormHandling'> <button classname='home-btn'>Get Started!!</button></Link>
         <p>
          (click on get started to login)
         </p>
    </div>
    
  </div>
    {/* <ul>
       <Link to="/About"><li>About</li></Link>
       <Link to="/Contact"><li>Contact</li></Link>
       <Link to="/Best"><li>Best</li></Link>
       </ul>
       <img src='../components/Logos/white-menu-icon-4' alt=''/>
       <Banner/> */}
       <Popular/>
       

    </>
  )
}
