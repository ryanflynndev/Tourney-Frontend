import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUserToTournamentFetch} from '../redux/tournament_slice'
import { selectCurrentUser } from '../redux/user_slice';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    borderRadius: '6px',
    background: '#605f5f',
    color: 'white',
  },
  button: {
    flexGrow: 1,
  }
});


function TournamentCard({tournament, joinable}){
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const classes = useStyles();

  const alreadyJoined = () => {
    const idx = currentUser.joinedTournaments.findIndex(t => t._id === tournament._id)
    if (idx === -1) return false
    return true
  }

  const renderJoinButton = () => {
    return (
      <CardActions>
        <Button 
          className={classes.button}
          onClick={()=>userJoin()}
          disabled={alreadyJoined()}
          size="large"
        >Join This Tournament</Button>
      </CardActions>
      )
  }
  const userJoin = () => {
    dispatch(addUserToTournamentFetch(tournament))
  }




  return(
    <Card className={classes.root} variant="outlined" >
      <CardContent>
        <Typography variant="h4" className={classes.title} color="textPrimary" gutterBottom >{tournament.name}</Typography>
        <Typography variant="h6" color="textSecondary" >
          Start Date: {new Date(tournament.startDate).toDateString()}
        </Typography>
        <Typography variant="h6" color="textSecondary" >
          End Date: {new Date(tournament.endDate).toDateString()}
        </Typography>
        <Typography className={classes.pos} >
          Description: {tournament.description}
        </Typography>
        <Typography variant="body2" >
          Number of Particpants: {tournament.participants.length}
        </Typography>
        <Typography variant="body2" >
          Player Limit: {tournament.playerLimit}
        </Typography>
        {joinable ? renderJoinButton() : null}
      </CardContent>
    </Card>
  )
}

export default TournamentCard;