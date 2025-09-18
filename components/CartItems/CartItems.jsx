import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Pages/ShopContext';
import axios from 'axios';
import { RxCross1 } from "react-icons/rx";
import Header from '../Header';
import Footer from '../Footer';

const CartItems = () => {
    const { getTotalCartAmount, productData, cartItems, removeFromCart } = useContext(ShopContext);
    const [userId] = useState("USER_ID_FROM_LOGIN"); // Replace with the logged-in user's ID

    const handleCheckout = async () => {
        const totalAmount = getTotalCartAmount();

        if (!userId) {
            alert("THANKYOU!!");
            return;
        }

        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/api/purchase', {
                userId,
                cartItems: productData.filter(item => cartItems[item.id] > 0).map(item => ({
                    name: item.name,
                    price: item.new_price,
                    quantity: cartItems[item.id],
                })),
                totalAmount,
            });

            alert("Checkout successful!");
            console.log(response.data);
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("THANYOU FOR PURCHASING!!");
        }
    };

    return (
        <div>
            <Header />
            <div className="cartitems">
                <div className="cartitems-format-main">
                    <p><b>Products</b></p>
                    <p><b>Title</b></p>
                    <p><b>Price</b></p>
                    <p><b>Quantities</b></p>
                    <p><b>Total</b></p>
                    <p><b>Remove</b></p>
                </div>
                <hr />
                <div>
                    {productData.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div className="cartitems-format cartitems-format-main" key={e.id}>
                                    <img src={e.image} alt="Product" className="cartitems-product-icon" />
                                    <p>{e.name}</p>
                                    <p>Rs.{e.new_price}/-</p>
                                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <div className="cartitems-remove-icon">
                                        <RxCross1 onClick={() => removeFromCart(e.id)} />
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className="cartitems-down">
                        <div className="cartitems-total">
                            <h1>Cart Totals</h1>
                            <div>
                                <div className="cartitems-item-total">
                                    <p>Subtotal</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                                <hr />
                                <div className="cartitems-item-total">
                                    <p>Shipping fee</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className="cartitems-item-total">
                                    <h3>Total</h3>
                                    <h3>${getTotalCartAmount()}</h3>
                                </div>
                            </div>
                            <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cartitems-promocode">
                            <p>If you have a promocode, enter it here:</p>
                            <div className="cartitems-promocode-box">
                                <input type="text" placeholder="promo code" />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartItems;
