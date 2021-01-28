import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router'
import {addUserToTournamentFetch, setInUse} from '../redux/tournament_slice'
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


function TournamentCard(props){
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const classes = useStyles();

  const alreadyJoined = () => {
    const idx = currentUser.joinedTournaments.findIndex(t => t._id === props.tournament._id)
    if (idx === -1) return false
    return true
  }


  const userJoin = () => {
    dispatch(addUserToTournamentFetch(props.tournament, props.history))
  }

  const clickHandler = () => {
    dispatch(setInUse(props.tournament))
    if(props.type === "upcoming"){
      props.history.push(`/upcoming-tournament/${props.tournament._id}`)   
    } else if(props.type === "current"){
      props.history.push(`/current-tournament/${props.tournament._id}`) 
    } else if (props.type === 'past'){
      props.history.push(`/past-tournament/${props.tournament._id}`) 
    }
    
  }


  return(

    <div className="ui special cards" onClick={()=>clickHandler()}>
      <div className="card">
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <div className="ui inverted button">Join Tournament</div>
              </div>
            </div>
          </div>
          <img src="https://drive.google.com/uc?id=1HS7NUYT6seFL6MAp0krU3l7dyYgBVHux"></img>
        </div>
        <div className="content">
          <a className="header">{props.tournament.name}</a>
          <div className="meta">
            <span className="date">Start Date: {new Date(props.tournament.startDate).toDateString()}</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="users icon"></i>
            {props.tournament.participants.length}
          </a>
        </div>
      </div>
    </div>








  )
}

export default withRouter(TournamentCard);