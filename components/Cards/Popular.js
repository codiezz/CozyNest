import React from 'react'
import './Item.css'
import productData from './Content';
import Item from './Item';

export default function Popular() {
  return (
    <div className='popular'>
      <div className='popular-head'>
     <h1><b>POPULAR</b></h1></div>
     <p><b>Explore the trendiest items that our customers are loving right now! You'll find top-rated products that combine quality, style, and value.
       Don't miss out on these popular items that everyone is talking about. Shop now and be a part of the latest trends!</b></p>
     <hr/>
     <div className='popular-item'>
        {productData.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} rating={item.rating} totalSales={item.totalSales}/>
        })}
     </div>
      
    </div>
  )
}
