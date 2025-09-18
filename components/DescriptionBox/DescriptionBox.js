import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='description-navbar'>
                Description
            </div>
            <div className='description-navbar-fade'>Reviews(4393)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>"I recently purchased furniture from this collection, and I couldn't be happier! The quality is exceptional, and it truly adds
               a touch of sophistication to my home. It’s both comfortable and stylish—highly recommend! The delivery was prompt, and the
                setup was smooth. Every piece is thoughtfully designed, offering both form and function. It’s clear that these items are built
                 to last, and I’ve received many compliments from guests. Definitely worth the investment for anyone looking to elevate their home!"</p>
        </div>

      
    </div>
  )
}

export default DescriptionBox
