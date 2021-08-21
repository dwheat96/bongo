import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="check_left">
                <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="checkout ad" 
                className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>

                    {/* basket item */}
                    {/* basket item */}
                    {/* basket item */}
                    {/* basket item */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
