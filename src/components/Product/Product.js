import React from 'react'
import "./Product.css";
import { useStateValue } from "../../StateProvider/StateProvider"

function Product({ id, title, image, price, rating }) { //accessing props from the home.js file 

    const [ {basket} , dispatch] = useStateValue()

    //can add items to basket with its details
    const addToBasket = () => { 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
     
        <div className="product">

            {/* displaying image of the product */}
            <img src={image} alt="" />
            
            {/* displaying title of the product */}
            <div className="product__info">
                <p>{title}</p>
                
                {/* displaying price of the product */}
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>  
                </p>

                {/* displaying rating of the product */}
                <div className="product__rating">  
                    {
                        //creating an Array of (rating)
                        Array(rating)
                        //fill it with empty values
                            .fill()
                        //it should map through that particular rating
                            .map((_) => ( 
                                <p>⭐</p>
                            ))}
                </div>
                 {/* option to add product to cart */}
                <button className="basket" onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
        
    );
}

export default Product;
