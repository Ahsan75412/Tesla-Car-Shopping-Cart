import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props; 

    console.log(cart);

    let total = 0;

    let quantity = 0;




    return (
        <div className='cart'>
            <h4>Order Summary In Cart</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
           
        </div>
    );
};

export default Cart;