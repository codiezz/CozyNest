import React from 'react'
import './Header.css';
import logo from './Logos/LogoM1-removebg-preview.png';
import insta_icon from './Logos/insta-_logo.png';
import pin_icon from './Logos/Pinterest-logo.png';
import wp_icon from './Logos/Wplogo-removebg-preview.png';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt='' width={170} height={110}/>
            <p>CozyNest</p>
        </div>
       <ul className='footer-link'>
           <center>  <li>Company</li></center>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
              <img src={insta_icon} alt=''width={55} height={55}/>
            </div>
            <div className='footer-icon-container'>
                <center><img src={pin_icon} alt=''  width={55} height={55}/></center>
            </div>
            <div className='footer-icon-container'>
                <img src={wp_icon} alt=''  width={80} height={50}/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ - 2024 - All Rights Reserved</p>
        </div>
      
    </div>
  )
}
