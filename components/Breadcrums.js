import React, { useContext } from 'react'
import './Header.css'
import { FaChevronRight } from 'react-icons/fa';
import productData from './Cards/Content';
import {useParams} from 'react-router-dom'
import Products from '../Pages/Product';
import { Link } from 'react-router-dom';

const Breadcrums = ({product}) => {


   
    
  return (
    <div className='breadcrumbs'>
      <p> HOME <FaChevronRight size={20} color="grey" /><Link style={{  textDecoration: 'none', color:'#000000'}} to='/Shop'>SHOP </Link><FaChevronRight size={20} color="grey" />{product?.category} <FaChevronRight size={20} color="grey" />{product?.name}
      </p> 
    </div>
  )
}

export default Breadcrums

