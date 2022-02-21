import React from "react"

import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {
    const priceForStripe = price
    const publishedkey = "pk_test_51KVfr6B293yl6mJADC3GWEZDcRpGrfB9MdF3njbHdcJNfFFl0yCFMvJofkWpbJISII0gJNnycE0t278HcXbV9BOt00qqm2Gzck"

    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }

    return (
        <StripeCheckout 
            label="Pay now"
            name="CRWN Clothing ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabe="Pay now"
            token={onToken}
            stripeKey={publishedkey}
        />
    )
}

export default StripeButton
