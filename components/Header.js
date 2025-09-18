import  React, { useState } from 'react'
import './Header.css'
//import logo from './Logos/LogoM.jpg';
import logo from './Logos/LogoM1-removebg-preview.png';
import cart_icon from './Logos/cart1-removebg-preview.png';
import { Link } from 'react-router-dom';
import FormHandling from '../topics/FormHandling';



function Header(){

       const [menu,setMenu]=useState("");

       return(
       <div className='header'>
              <div className='header-logo'>
                     <img src={logo} alt="" height={120} width={180}/>
                     <p><Link style={{  textDecoration: 'none', color: '#FFFDD0' }} to=''>CozyNest</Link></p>

              </div>
              <ul className='header-menu'>
                     <li onClick={()=>{setMenu("shop")}}><Link style={{  textDecoration: 'none', color: '#FFFDD0' }} to='/Shop'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
                     {/* <li onClick={()=>{setMenu("contact")}}><Link style={{  textDecoration: 'none', color: '#FFFDD0' }} to='/Contact'>CONTACT</Link>{menu==="contact"?<hr/>:<></>}</li> */}
                     <li onClick={()=>{setMenu("aboutus")}}><Link style={{  textDecoration: 'none', color: '#FFFDD0' }} to='/About'>ABOUT US</Link>{menu==="aboutus"?<hr/>:<></>}</li>
                     <li onClick={()=>{setMenu("best")}}>BESTSELLERS{menu==="best"?<hr/>:<></>}</li>
                     </ul>

                     <div className='header-login'>
                           <Link to='/FormHandling'><button>Login</button></Link>
                           <Link to='/cart'><img src={cart_icon} alt='' width={100} height={100}/></Link>
                            <div className='header-cart'>0</div>
                     </div>
              
        
       </div>

       )
}
export default Header;