/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../../../baseUrl/baseUrl";
import { AuthContext } from "../../../provider/AuthProviders";
import useCart from "../../../hooks/useCart";

const StripePayment = () => {
    const { total } = useParams()
    const address = localStorage.getItem('address')
    const [cart, refetch,] = useCart()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const price = 120 + parseFloat(cart.reduce((acc, item) => acc + item.price, 0).toFixed(2));
    useEffect(() => {
        fetch(`${baseUrl}/create-payment-intent`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ price: price || 120 + parseFloat(total).toFixed(2) }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);



    // console.log(clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        // console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)



        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                status: 'Order pending',
                itemNames: cart.map(item => item.productName),
            };

            fetch(`${baseUrl}/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertResult.insertedId) {
                        refetch()
                        Swal.fire({
                            icon: 'success',
                            text: "Your payment was successful!"
                        });
                        setTimeout(function () {
                            navigate('/')
                        }, 3000);
                    }
                });
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-3">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary m-3" type="submit" disabled={!stripe || !clientSecret || processing}>
                    {processing ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                        'Pay'
                    )}
                </button>
            </form>
            <p className="text-center text-danger"> {cardError}</p>
            {transactionId && <p className="text-primary text-center">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};


export default StripePayment;