import React from 'react'
import Box from '@material-ui/core/Box'
import PaymentForm from '../components/paymentForm'
import Typography from '@material-ui/core/Typography'
import ButtonComp from '../components/button'

const OrderStatus = props => {
  const {
    orderStatus,
    stripeChargeResponse,
    saveStripeToken,
    stripeCharge,
    clearOrderStatus,
    setStripe
  } = props
  return (
    <div>
      {orderStatus ? (
        stripeChargeResponse ? (
          <Box
            bgcolor="#eeefef"
            color="text.primary"
            boxShadow={4}
            p={2}
            position="fixed"
            top={0}
            left="35%"
            zIndex="modal"
            style={{
              top: '30%',
              width: '50%'
            }}
          >
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              {stripeChargeResponse.status}
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              Amount: £{stripeChargeResponse.amount / 100}
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              Reciept:{' '}
              <a
                href={stripeChargeResponse.receipt_url}
                alt="Reciept"
                target="_blank"
              >
                click to open
              </a>
            </Typography>
            <div>
              <ButtonComp
                fontSize="1rem"
                width="3rem"
                text="Ok"
                onClick={clearOrderStatus}
                button={1}
              />
            </div>
          </Box>
        ) : (
          <Box
            bgcolor="#eeefef"
            color="text.primary"
            boxShadow={4}
            p={2}
            position="fixed"
            top={0}
            left="35%"
            zIndex="modal"
            style={{
              top: '30%',
              width: '50%'
            }}
          >
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              Payment details
            </Typography>
            <PaymentForm
              saveStripeToken={saveStripeToken}
              stripeCharge={stripeCharge}
              setStripe={setStripe}
            />
            <ButtonComp
              fontSize="1rem"
              width="3rem"
              text="Cancel"
              onClick={clearOrderStatus}
              button={1}
            />
          </Box>
        )
      ) : null}
    </div>
  )
}

export default OrderStatus
