import React from 'react'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'
import SignInPopper from './signInPopper'

const UserLogin = props => {
  const { user, logOutUser, error, signInUser, registerUser } = props
  //console.log(user)
  return (
    <div>
      {user ? (
        <div style={{ display: 'flex' }}>
          <Typography>Hi! {user.name}</Typography>
          <ButtonComp
            margin="0 0 0 1rem"
            button={1}
            text="Logout"
            onClick={logOutUser}
            padding=".2rem"
            fontSize=".8rem"
            width="fit-content"
          />
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <Typography>Hi</Typography>
          <SignInPopper error={error} text="Sign In" signin={signInUser} />
          <Typography>or</Typography>
          <SignInPopper
            text="Register"
            type="register"
            register={registerUser}
            error={error}
          />
        </div>
      )}
    </div>
  )
}

export default UserLogin
