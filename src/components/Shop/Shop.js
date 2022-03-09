import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);
    return (
        <div className='shop-class'>
            {
                products.map(x => <Product z={x} key={x.key} ></Product>)
            }
        </div>
    );
};

export default Shop;