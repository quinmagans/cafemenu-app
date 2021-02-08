import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HG4e6EEaf5pNXxL4fakc42EH2EyUwNN257ug4qVz1FaUMlbQi4yg2zO8zkjeN0jP1Fc2OibqnwLfdgoY3RSNt7R007kfji7zR'

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Mug and See" 
            billingAddress
            shippingAddress
            image="https://www.pngrepo.com/png/254484/180/coffee-cup-tea-cup.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton