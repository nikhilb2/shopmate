import React from 'react'
import { withStyles } from '@material-ui/styles'
import MiniBox from './miniBox'
import RegisterCard from './registerCard'


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  miniBox: {
    display: 'flex',
    flexDirection: 'column'
  }

}

const CBContainer = props => {
  const { classes } = props
  return (
    <div className={classes.container}>
    <div className={classes.miniBox}>
    <MiniBox
      style={{ backgroundColor: '#84E6F1', marginTop:0 }}
      color="black"
      colorCaption="#F62F5E"
      title="WOW"
      caption="Check WHAT!"
    />
    <MiniBox
      style={{
        backgroundImage: "url('static/men.png')",
        backgroundSize: 'cover',
        marginTop:0
      }}
      title="MEN"
      color="white"
    />
    </div>
    <div>
      <RegisterCard />
    </div>
    </div>
  )
}

export default withStyles(styles)(CBContainer)
