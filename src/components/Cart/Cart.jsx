import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let tax = 10;
    let quantity = 0;
    for(const product of cart) {
        // long Hand
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // Short Hand
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity
    }

    const totalTax = total * tax / 100;
    const grandTotal = total + totalShipping + totalTax;

    return (
        <div className="cart-wrapper">
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax:${totalTax.toFixed(2)}</p>
                <p className='grandTotal'><b>Grand Total: ${grandTotal.toFixed(2)}</b></p>
            </div>
        </div>
    );
};

export default Cart;