// import React,{createContext, useState} from 'react';
// import productData from '../components/Cards/Content';

// export var ShopContext = createContext();


//     let getDefaultCart = (productData)=>{
//         let cart = {};
//         for (let index = 0; index < productData.length+1; index++){
//             cart[index]=0;
//         }
//         return cart;
//     }

// let      ShopContextProvider = ({props}) => {

//     let [cartItems,setCartItems] = useState(getDefaultCart());
    

//       let addToCart = (itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         console.log(cartItems);
//     }

//     let removeFromCart = (itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//     const contextValue= {productData,cartItems,addToCart,removeFromCart};

//     return(
//         <ShopContext.Provider value={{contextValue}}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;



// export const ShopContext = createContext();

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < productData.length; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// };

// const ShopContextProvider = ({ props }) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart);

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1
//         }));
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 1) - 1
//         }));
//     };

//     const contextValue = {
//         productData,
//         cartItems,
//         addToCart,
//         removeFromCart
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;

// import React, { createContext, useState, useEffect } from 'react';
// import productData from '../components/Cards/Content';

// export const ShopContext = createContext();

// const getDefaultCart = (productData) => {
//     let cart = {};
//     if (productData) {
//         for (let index = 0; index < productData.length; index++) {
//             cart[index] = 0;
//         }
//     }
//     return cart;
// };

// const ShopContextProvider = ({ children }) => {
//     const [products, setProducts] = useState({  });
//     const [cartItems, setCartItems] = useState(getDefaultCart(products));

//     useEffect(() => {
//         const fetchData = async () => {
          
//             setProducts(productData);
//             setCartItems(getDefaultCart(productData));
//         };
//         fetchData();
//     }, []);

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1
//         }));
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 1) - 1
//         }));
//     };

//     const contextValue = {
//         productData: products,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;

import React, { createContext, useState, useEffect } from 'react';
import productData from '../components/Cards/Content';
import CartItems from '../components/CartItems/CartItems';

export const ShopContext = createContext();

const getDefaultCart = (productData) => {
    let cart = {};
    if (productData) {
        for (let index = 0; index < productData.length; index++) {
            cart[index] = 0;
        }
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setProducts(productData);
            setCartItems(getDefaultCart(productData)); // Update cartItems after products are fetched
        };
        fetchData();
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 1) - 1,
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        console.log('Cart Items:', cartItems);  // Log cartItems to ensure they are correct
        console.log('Product Data:', productData); // Log productData to verify it is populated
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = productData.find((product) => product.id === Number(item));
                if (itemInfo) {
                    console.log(`Found product: ${itemInfo.name}, Price: ${itemInfo.new_price}, Quantity: ${cartItems[item]}`);
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        console.log('Total Amount:', totalAmount);  // Log total amount before returning
        return totalAmount;
    };
    
    

    const contextValue = {
        getTotalCartAmount,
        productData: products,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
