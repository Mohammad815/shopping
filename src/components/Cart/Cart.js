import React from 'react';

const Cart = (props) => {
    console.log(props)
    const {cart}=props;
    let  total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping =15;
    const tax =(total + shipping)*0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;