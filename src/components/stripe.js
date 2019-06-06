import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import PaymentForm from './stripe'

const Stripe = props => {
  return (
    <StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe">
      <Elements>
        <PaymentForm />
      </Elements>
    </StripeProvider>
  )
}

export default Stripe
