import React from 'react'
import './RelatedProducts.css'
import productData from '../Cards/Content'
import Item from '../Cards/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <center><h1>Related Products</h1></center>
        <hr/>
        <div className='relatedproducts-item'>
        {productData.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} rating={item.rating} totalSales={item.totalSales}/>
        })}
        </div>
    </div>
  )
}

export default RelatedProducts
