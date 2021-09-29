import React from 'react';
import './Subtotal.css';
import { useStateValue } from "../../StateProvider/StateProvider";
import CurrencyFromat from "react-currency-format";
import { getBasketTotal } from "../../reducer/reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFromat
                renderText={(value) => ( //passing prop to get the basket item 
                    <>
                        <p>
                            Subtotal ( {basket.length} item ) : <strong>{value}</strong>{/* displaying the total of amount of items */}
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contain a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}  //fetching the total value from the basket
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;