import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from './ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrums from '../components/Breadcrums';
import Header from '../components/Header'
import ProductDisplay from '../components/ProductDisplay.js/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedPro/RelatedProducts';
import img_1 from '../components/Logos/pop1.webp';
import img_2 from '../components/Logos/pop2.webp';
import img_3 from '../components/Logos/pop3.jpg';
import img_4 from '../components/Logos/pop4.jpg';
import img_5 from '../components/Logos/pop5.jpg';
import img_6 from '../components/Logos/pop6.webp';
import img_7 from '../components/Logos/pop7.webp';
import img_8 from '../components/Logos/pop8.jpg';
import img_9 from '../components/Logos/pop9.jfif';
import img_10 from '../components/Logos/pop10.webp';
import img_11 from '../components/Logos/pop11.jpg';
import img_12 from '../components/Logos/pop12.webp';
import img_13 from '../components/Logos/pop13.avif';
import img_14 from '../components/Logos/pop14.jpg';
import img_15 from '../components/Logos/pop15.jpg';
import img_16 from '../components/Logos/pop16.jpg';
import img_17 from '../components/Logos/pop17.webp';
import img_18 from '../components/Logos/pop18.webp';
import img_19 from '../components/Logos/pop19.webp';
import img_20 from '../components/Logos/pop20.jpg';
import img_21 from '../components/Logos/pop22.jpg';
import img_22 from '../components/Logos/pop23.jpg';
import img_23 from '../components/Logos/pop24.jpg';
import img_24 from '../components/Logos/pop25.avif';
import img_25 from '../components/Logos/pop26.webp';

const productData = [

  {
        id: 1,
        name: "Cushioned Puff Sofa",
        image:img_1,

        category: "sofa",
        new_price:10000,
        old_price: 20000,
        rating:5,
        totalSales:5758
    },
    {
        id: 2,
        name: "Single Cushioned Sofa",
        category: "sofa",
        image:img_2,
        new_price:8400,
        old_price: 9000,
        rating:5,
        totalSales:5758
    },
        {
        id: 3,
        name: "Monochrome Coffee Table",
        category: "table",
        image:img_3,
        new_price:4800,
        old_price: 5000,
        rating:5,
        totalSales:5758
    },
    {
        id: 4,
        name: "Bedside Cabinet",
        category: "cabinet",
        image:img_4,
        new_price:5400,
        old_price: 6000,
        rating:5,
        totalSales:5758
    },
    {
        id: 5,
        name: "Dining Top Chairs",
        category: "sofa",
        image:img_5,
        new_price:9450,
        old_price: 10000,
        rating:5,
        totalSales:5758
    },
    {
        id: 6,
        name: "Hangin Egg Chair (No Stand)",
        category: "sofa",
        image:img_6,
        new_price:6700,
        old_price: 7000,
        rating:5,
        totalSales:5758
    },
    {
        id: 7,
        name: "Wooden Sideboard Cabinet",
        category: "cabinet",
        image:img_7,
        new_price:10000,
        old_price: 20000,
        rating:5,
        totalSales:5758
    },
    {
        id: 8,
        name: "Wooden Canopy Poster Bed",
        category: "bed",
        image:img_8,
        new_price:12000,
        old_price: 18000,
        rating:5,
        totalSales:5758
    },
    {
        id: 9,
        name: "Round Dining with Chair set",
        category: "dining",
        image:img_9,
        new_price:34850,
        old_price: 36000,
        rating:5,
        totalSales:5758
    },
    {
        id: 10,
        name: "Storage Console Table",
        category: "cabinet",
        image:img_10,
        new_price:29250,
        old_price: 31000,
        rating:5,
        totalSales:5758
    },
    {
        id: 11,
        name: "White Round Coffee Table",
        category: "table",
        image:img_11,
        new_price:1800,
        old_price:2000,
        rating:5,
        totalSales:5758
    },
    {
        id: 12,
        name: "Modern White Wardobe",
        category: "cabinet",
        image:img_12,
        new_price:94000,
        old_price:96500,
        rating:5,
        totalSales:5758
    },
    {
        id: 13,
        name: "Bedside Pumpkin Lamp",
        category: "homeDecor",
        image:img_13,
        new_price:7100,
        old_price:7400,
        rating:5,
        totalSales:5758
    },
    {
        id: 14,
        name: "B/W Ceramic Vases",
        category: "homeDecor",
        image:img_14,
        new_price:1800,
        old_price:2000,
        rating:5,
        totalSales:5758
    },
    {
        id: 15,
        name: "Hamlet Metal Mirror",
        category: "homeDecor",
        image:img_15,
        new_price:3330,
        old_price:3450,
        rating:5,
        totalSales:5758
    },
    {
        id: 16,
        name: "Resin Thinker Statue",
        category: "homeDecor",
        image:img_16,
        new_price:1999,
        old_price:2100,
        rating:5,
        totalSales:5758
    },
    {
        id: 17,
        name: "Warm Brown Single Bed",
        category: "bed",
        image:img_17,
        new_price:14999,
        old_price:18000,
        rating:5,
        totalSales:5758
    },
    {
        id: 18,
        name: "Walken Sheesham Woodbed",
        category: "bed",
        image:img_18,
        new_price:21999,
        old_price:25000,
        rating:5,
        totalSales:5758
    },
    {
        id: 19,
        name: "Kids One-step Bed",
        category: "bed",
        image:img_19,
        new_price:18000,
        old_price:21000,
        rating:5,
        totalSales:5758
    },
    {
        id: 20,
        name: "Double-Drawer Storage Bed",
        category: "bed",
        image:img_20,
        new_price:38000,
        old_price:41000,
        rating:5,
        totalSales:5758
    },
    {
        id: 21,
        name: "Wooden Study/Office table",
        category: "table",
        image:img_21,
        new_price:6690,
        old_price:7000,
        rating:5,
        totalSales:5758
    },
    {
        id: 22,
        name: "Coffee Center Teapoy",
        category: "table",
        image:img_22,
        new_price:3800,
        old_price:4000,
        rating:5,
        totalSales:5758
    },
    {
        id: 23,
        name: "Sheesham Dinning Table",
        category: "dining",
        image:img_23,
        new_price:38000,
        old_price:40000,
        rating:5,
        totalSales:5758
    },
    {
        id: 24,
        name: "Modern Dining Table",
        category: "dining",
        image:img_24,
        new_price:37000,
        old_price:40000,
        rating:5,
        totalSales:5758
    },
    {
        id: 25,
        name: "Marble Dining Table",
        category: "dining",
        image:img_25,
        new_price:20800,
        old_price:21000,
        rating:5,
        totalSales:5758
    }
]



 function Products(){
  
   const {productId} = useParams();
 
   const product =productData.find((e) => e.id === Number(productId));
  return (
    <div>
      <Header/>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
export default Products;