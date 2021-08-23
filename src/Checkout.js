import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="check_left">
                <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="checkout ad" 
                className="checkout_ad" />
                <div>
                    {user ? <h3>Hello, {user?.email}!</h3> : null}
                    
                    <h2 className="checkout_title">
                        Your Shopping Basket:
                    </h2>

                    {/* TODO: ADD BASKET ANIMATION */}
                    {/* https://github.com/reactjs/react-transition-group */}
                    
                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}


                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
