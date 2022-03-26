import React from "react";
import AddedItems from "../AddedItems/AddedItems";
import "./Cart.css";

const Cart = ({ cart, handler, random }) => {
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const tax = (total * 10) / 100;
    const grandTotal = total + tax;

    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <p>Selected Items: {cart.length}</p>

            <div className="display-added">
                {cart.slice(0, 4).map((product, i) => (
                    <AddedItems key={i} product={product}></AddedItems>
                ))}
            </div>
            <button onClick={handler}>Remove All Item</button>

            <button onClick={random}>Choose for me</button>

            <p>Total Price: ${total}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;