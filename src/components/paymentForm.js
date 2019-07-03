// CheckoutForm.js
import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import theme from '../theme'

class CheckoutForm extends React.Component {
  componentDidMount() {
    this.props.setStripe()
  }
  handleSubmit = async ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault()

    // Within the context of `Elements`, this call to createPaymentMethod knows from which Element to
    // create the PaymentMethod, since there's only one in this group.
    // See our createPaymentMethod documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
    this.props.stripe
      .createPaymentMethod('card', { billing_details: { name: 'Jenny Rosen' } })
      .then(({ paymentMethod }) => {
        //console.log('Received Stripe PaymentMethod:', paymentMethod);
      })

    // You can also use handleCardPayment with the Payment Intents API automatic confirmation flow.
    // See our handleCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment
    //this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', data);

    // You can also use createToken to create tokens.
    // See our tokens documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-token
    const token = await this.props.stripe.createToken({
      type: 'card',
      name: 'Jenny Rosen'
    })
    //console.log(token);
    this.props.saveStripeToken(token)
    // token type can optionally be inferred if there is only one one Element
    // with which to create tokens
    // this.props.stripe.createToken({name: 'Jenny Rosen'});

    // You can also use createSource to create Sources.
    // See our Sources documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-source
    this.props.stripe.createSource({
      type: 'card',
      owner: {
        name: 'Jenny Rosen'
      }
    })
  }

  render() {
    //console.log(this.props);
    return (
      <form
        style={{
          padding: '2rem',
          borderRadius: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'white'
        }}
        onSubmit={this.handleSubmit}
      >
        <p>Card Details</p>
        <CardElement
          hidePostalCode={true}
          style={{ marginBottom: '1rem', fontSize: '10rem' }}
        />
        <button
          style={{
            marginTop: '1.5rem',
            color: 'white',
            backgroundColor: theme.palette.secondary.main,
            fontSize: '1rem',
            padding: '.5rem',
            borderRadius: '2rem'
          }}
        >
          Confirm order
        </button>
      </form>
    )
  }
}

export default injectStripe(CheckoutForm)
