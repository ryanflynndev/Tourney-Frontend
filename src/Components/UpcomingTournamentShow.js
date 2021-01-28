import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {selectInUse, inUseFetch} from '../redux/tournament_slice'
import {withRouter} from 'react-router'
import { addUserToTournamentFetch } from '../redux/tournament_slice'
import { selectCurrentUser } from '../redux/user_slice'

function UpcomingTournmanentShow(props) {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser)
    const tournament = useSelector(selectInUse)
    console.log(tournament)
    useEffect(()=> {
        if(Object.keys(tournament).length === 0){
            dispatch(inUseFetch(props.match.params.id))
        }
    }, [])
    const joinTournamentHandler = () => {
        dispatch(addUserToTournamentFetch(tournament, props.history))
    }

    const userAlreadyJoined = () => {
        if(tournament.participants.includes(user._id) || tournament.participants.length === tournament.playerLimit ){
            return true
        } else {
            return false
        }
    }
    return(
        <>
            <h1>Upcoming Tournament</h1>
            <div>Name: {tournament.name}</div>
            <button disabled={tournament.participants ? userAlreadyJoined() : null} onClick={joinTournamentHandler}>Join Tournament</button> 
        </>
    )
}

export default withRouter(UpcomingTournmanentShow)