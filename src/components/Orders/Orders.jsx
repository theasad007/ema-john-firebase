import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart =  useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    

    return (
        <div className="shop-area">
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
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Orders;