import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import './Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from "./firebase"


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
            // Stripe expects the total in a currencies subunits, cents e.g.,
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) => {
            // payment intent = payment confirmation
            db
                .collection('users')
                .doc(user?.uid)
                .collection('order')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/Orders')
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Deliver Address</h3>

                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Your basket</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => 
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            )}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form 
                        onSubmit={handleSubmit}
                        action="">
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                            <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing...</p> : "Buy Now!" } </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
                <div className="payment_section">
                <div className="payment_title">
                    <h3>Disclaimer Info</h3>
                </div>
                <div className="disclaimer_container">
                        <p>
                        This demo utilizes the Stripe Payment API in test mode. PLEASE do not add your actual card info into the field above. Stripe is in test mode, please use the card info below: </p><br/> 
                            <div className="card_info">
                                <strong>card number <br/></strong>
                                4242 4242 4242 4242 <br/>
                                <strong>exp. date <br/></strong>
                                04/24 <br/>
                                <strong>CSC <br/></strong> 
                                242  <br/> 
                                <strong>ZIP Code <br/></strong> 
                                42424 
                            </div>
                            
                </div>
                </div>
            
            
            
            
                
            </div>
        </div>
    )
}

export default Payment
