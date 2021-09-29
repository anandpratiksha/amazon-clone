import React from 'react';
import add from '../../images/add.jpeg';
import { useStateValue } from '../../StateProvider/StateProvider';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qHF_tOgruj1U7-SycSGakqp7rSJL6UAVFQ&usqp=CAU" alt={add} />
                {basket?.length === 0 ? (  //if there is nothing in the basket
                    <div>       {/*then it will show this message  */}
                        <h2>Your Shopping Basket is empty</h2>
                        <p className="checkout__p">
                        You have no items in your <strong>Basket</strong>. To buy items, click <b>"Add to Basket"</b> next to the Item.
                    </p>
                    </div>
                ) : (
                    <div>   {/* if there is items in the basket*/}
                        <h2 className="checkout__title">Your Shopping Basket</h2> {/* List out all of the checkout Products */}
                        {basket?.map((item) => (  //to map all the item which is dispatched in the basket
                            <CheckoutProduct
                                id={item.id}            //to display item name
                                title={item.title}     //to display title
                                image={item.image}     //to display image
                                price={item.price}    //to display price
                                rating={item.rating}  //to display rating
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );

}

export default Checkout
