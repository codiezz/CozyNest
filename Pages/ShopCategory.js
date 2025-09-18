import React, { useContext } from 'react'
import './Home.css';
import { ShopContext } from './ShopContext';
import Item from '../components/Cards/Item';
import productData from '../components/Cards/Content';
import Header from '../components/Header';
import img1 from '../components/Logos/poster2.jpg';

export default function ShopCategory(props) {
    const {productData}=useContext(ShopContext);

    
  


  return (
   
    <div className='shop-category'> <Header/>
      <img  className="shop-category-img" src={img1} alt=''/>
      <div className='shop-category-indexsort'>
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className='shopcategory-products'>
        {productData.map((item,i)=>{
          if (props.category===item.category) {

            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} rating={item.rating} totalSales={item.totalSales}/>
          }
          else{
            return null;
          }
        })}
      </div>
      
    </div>
  )
}
