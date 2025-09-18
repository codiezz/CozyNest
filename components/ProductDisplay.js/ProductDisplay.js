import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import './ProductDisplay.css';
import { ShopContext } from '../../Pages/ShopContext';
import productData from '../Cards/Content';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div>
        <div className='productdisplay'>
       <div className='productdisplay-left'>
         <div className='productdisplay-img'>
           <img className='productdisplay-main-img' src={product.image} alt=''/>
         </div>
        
        </div> 
        <div className='productdisplay-right'>
            <h1><b>{product.name}</b></h1>
            <div className='productdisplay-rating'>
            {[...Array(product.rating)].map((index)=>(
                <FaStar className= "star-icon" id={index + 1} key={index}/>
              ))}
              
            </div>
            <p>({product.totalSales})</p>
            <div className='productdisplay-right-prices'>
                <div className='product-display-right-prices-old'>
                    ${product.old_price}
                </div>
                <div className='product-display-right-prices-new'>
                    ${product.new_price}
                </div>
                <div className='productdisplay-right-description'>
                <p><span>Crafted with precision and designed for comfort, our furniture collection offers timeless pieces that blend functionality and style. Each item is made from high-quality materials to ensure durability and long-lasting use, while complementing any home decor with elegance. Whether you're furnishing a cozy apartment or a spacious living room, our versatile range caters to every need. From sleek modern designs to classic, rustic styles, each piece is built to provide maximum comfort and enhance the aesthetic of your space.</span></p>
                </div>
                <div className='productdisplay-right-button'>
                    {/* <button onClick={()=>addToCart=(product.id)}>ADD TO CART</button>*/}
                    <div>
                    <button onClick={() => {
                                    addToCart(product.id);  // Add to cart logic
                                    alert("Item has been successfully added to your cart!"); // Alert directly on click
                                }}>Add to Cart</button>
                
          
        </div>
                    </div> 
                    <p className='product-display-rigth-category'><span>Category : </span>{product.category}<br/></p>
                    <p className='product-display-right-category'><span>Tags : </span>Modern, Latest</p>
                
            </div>
        </div>
    </div> 
      
    </div>
  )
}

export default ProductDisplay

