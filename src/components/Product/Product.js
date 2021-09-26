import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='main-product'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>by:{seller}</p>
                    <p>${price}</p>
                    <p><small>only{stock} left in stock-order soon</small></p>
                    <button onClick={()=>props.handlebtn(props.product)}>add to cart</button>
                </div>
        </div>
    );
};

export default Product;