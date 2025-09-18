import React from 'react'
import './Item.css'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' width={480} height={400}/></Link>  
        <p><b>{props.name}</b></p>
        <div className='item-price'>
          <div className='item-price-old'>
                ${props.old_price}

            </div>
            <div className='item-price-new'>
                ${props.new_price}

            </div>


            <div className='item-rating'>
            {[...Array(props.rating)].map((index)=>(
                <FaStar className= "star-icon" id={index + 1} key={index}/>
              ))}
            </div>
            <div className='item-sales'>
               {props.totalSales}/last month
            </div>
            
        </div>
      
    </div>
  )
}

export default Item
