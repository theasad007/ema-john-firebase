import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';

import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart =  useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    

    return (
        <div className="shop-area order-page">
            <div className="container">
                <div className='shop-container'>
                    <div className="item-container">
                        {
                            cart.map(item => <ReviewItem
                                key={item.id}
                                item={item}
                                handleRemoveFromCart={handleRemoveFromCart}
                            ></ReviewItem>)
                        }
                    </div>
                    <Cart cart={cart}
                    handleClearCart={handleClearCart}>
                        <Link to='/checkout' className='button'>
                            <button className='second-button'>Procced Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Orders;