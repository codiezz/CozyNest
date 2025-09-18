import React from 'react'
import image from '../components/Logos/abt1.jpg';
import './Home.css';
import image1 from '../components/Logos/abt2.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';




export default function About() {
  return (
    <>
      <Header/>
      <div className='abt'>
        <div className='abt0'>
          <h1><b>KNOW MORE ABOUT US!!!</b></h1><hr/>
        </div>
        <img src={image} alt=''/>
        <div className='abt1'>
          <h1>WELCOME!!</h1>
          <p>Welcome to 'CozyNest'!!! where style meets comfort. Our mission is to transform your living spaces into beautiful, functional sanctuaries that reflect your unique taste and personality.

Founded on a passion for design and quality, we offer a curated selection of home decor products that blend timeless elegance with contemporary trends. From chic furniture and lighting to stunning wall art and accessories, every piece in our collection is handpicked for its craftsmanship and aesthetic appeal. </p>

        </div>
        <div className='abt2'>
          <img src={image1} alt='' width={805} height={80}/>
          <div className='abt2-text'>
          <h1>Know More!!</h1>
          <p>At CozyNest, we firmly believe that your home should be a true reflection of your unique personality and style. That's why we go above and beyond to offer not just exceptional products, but also a highly personalized shopping experience tailored to your needs.<br/> Our curated selection features a wide range of high-quality, stylish home decor items that cater to various tastes and preferences, ensuring you find exactly what you're looking for.

But we don’t stop there.<br/> Our dedicated team of design experts is always on hand to provide inspiration and professional advice, guiding you through the process of transforming your living space into a haven that feels authentically yours. Whether you're looking for a complete home makeover or just a few key pieces to refresh a room, we're here to help you every step of the way.

<br/>At CozyNest, customer satisfaction is our top priority. We take pride in delivering not only beautiful and functional decor but also exceptional service that makes your shopping experience enjoyable and hassle-free. From the moment you browse our website to the final touches of your home decor project, we aim to exceed your expectations with our attention to detail and commitment to quality. <br/>We understand that your home is more than just a place—it's where memories are made, where you relax after a long day, and where you gather with loved ones. That's why we are passionate about helping you create spaces that are not only beautiful but also functional and comfortable. Our products are carefully selected to ensure they meet the highest standards of quality and design.



<br/><br/>Thank you for choosing CozyNest as your trusted partner in home decor. We are excited to embark on this journey with you and look forward to helping you create a home that is as beautiful, unique, and special as you are. Together, we will turn your vision into reality, crafting spaces that you will love and cherish for years to come.

</p>
              </div>  
               </div>
      </div>

      
    </>
  )
}
