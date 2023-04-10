import React from 'react';
import './ReviewItem.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({ item, handleRemoveFromCart }) => {
    const { name, img, price, quantity, shipping, id } = item;
    return (
        <div className='review-item'>
            <div className="item-wrap">
                <img src={img} alt="" />
                <div className="item-info">
                    <h3>{name}</h3>
                    <p>Price: <span>${price}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                </div>
            </div>
            <div className="remove-btn">
                <button onClick={() => handleRemoveFromCart(id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;