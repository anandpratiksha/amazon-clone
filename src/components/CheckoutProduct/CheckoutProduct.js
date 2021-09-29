import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider/StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [ {basket} ,dispatch] = useStateValue();

    const removeFromBasket = () => { // Removes item from basket..
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
    // products details
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    // the map() function used for rendering a list of data to the DOM.
                    // filling stars
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                {/* after clicking Removes item from basket */}
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
