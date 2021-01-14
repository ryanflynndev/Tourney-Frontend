import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUserToTournamentFetch} from '../redux/tournament_slice'
import Button from '@material-ui/core/Button';
import { selectCurrentUser } from '../redux/user_slice';

function TournamentCard({tournament, joinable}){
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const alreadyJoined = () => {
    const idx = currentUser.joinedTournaments.findIndex(t => t._id === tournament._id)
    if (idx === -1) return false
    return true
  }

  const renderJoinButton = () => {
    return (
      <Button 
        onClick={()=>userJoin()}
        disabled={alreadyJoined()}
      >Join This Tournament</Button>)
  }

  const userJoin = () => {
    dispatch(addUserToTournamentFetch(tournament))
  }

  // console.log(currentUser.joinedTournaments)

  return(
    <div >
      <h4>Name: {tournament.name}</h4>
      <h5>Start Date: {tournament.startDate}</h5>
      <h5>End Date: {tournament.endDate}</h5>
      <p>Description: {tournament.description}</p>
      <p>Number of Particpants: {tournament.participants.length}</p>
      <p>Player Limit: {tournament.playerLimit}</p>
      {joinable ? renderJoinButton() : null}
    </div>
  )
}

export default TournamentCard;