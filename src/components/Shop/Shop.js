import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart, setProduct] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handlebtn = (product) => {
        const newCart = [...cart, product]
        setProduct(newCart)
    }
    return (
       <main className='container'>
           <div className='product-container'>
               {
                   products.map(product=><Product product={product}
                   handlebtn={handlebtn}></Product>)
               }
                
           </div>
           <div className='cart-container'>
                <Cart cart={cart}></Cart>
           </div>
       </main>
    );
};

export default Shop;