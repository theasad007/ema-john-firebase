import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = []
        // step 1 get ID if Stored Cart
        for(const id in storedCart) {
            // step 2 get id of added Product
            const addedProduct = products.find(product => product.id === id)
            // step 3 Add Quantity
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4 Add product to saved Cart
                savedCart.push(addedProduct)
            }
        }
        // step 5 set the cart
        setCart(savedCart)
    }, [products])


    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className="shop-area">
            <div className="container">
                <div className='shop-container'>
                    <div className="products-container">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;