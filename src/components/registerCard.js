import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import ButtonComp from './button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 620,
    margin: '1rem',
    marginTop: 0
  },
  media: {
    width: 620,
    height: 408
  },
  textArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  typo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem'
  },
  pop: {
    width: '3.3rem',
    backgroundColor: '#FE5C07',
    position: 'absolute',
    margin: '2rem'
  }
})

const RegisterCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <div className={classes.pop}>
        <Typography style={{ textAlign: 'center', color: 'white' }}>
          POP
        </Typography>
      </div>
      <CardMedia
        className={classes.media}
        image="static/game.png"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.textArea}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ fontSize: '3rem' }}
          className={classes.typo}
        >
          Let the Game begin
        </Typography>
        <Typography
          variant="body2"
          color="black"
          component="p"
          className={classes.typo}
        >
          Registration is on - get ready for the Open
        </Typography>
        <div className={classes.typo}>
          <ButtonComp text="Register" button={1} />
        </div>
      </CardContent>
    </Card>
  )
}

export default RegisterCard
