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
    console.log(user)
    useEffect(()=> {
        if(Object.keys(tournament).length === 0){
            dispatch(inUseFetch(props.match.params.id))
        }
    }, [])
    const joinTournamentHandler = () => {
        dispatch(addUserToTournamentFetch(tournament, props.history))
    }

    const userAlreadyJoined = () => {
        const joined = user.joinedTournaments.map((tourney) => {
            return tourney._id
        })

        if(joined.includes(tournament._id) || tournament.participants.length === tournament.playerLimit ){
            return true
        } else {
            return false
        }
    }

    const renderParticipants = () => {
        return tournament.participants.map((person) => {
            return <p>{person.username}</p>
        })
    }

    const renderComponent = () => {
        return (
            <>
                <h1>Upcoming Tournament</h1>
                <div>Name: {tournament.name}</div>
                <div>Start Date: {new Date(tournament.startDate).toDateString()}</div>
                <div>End Date: {new Date(tournament.endDate).toDateString()}</div>
                <p>Description: {tournament.description}</p>
                <div>Participants: {renderParticipants()}</div>
                <div>Player Limit: {tournament.playerLimit}</div>
                <button disabled={userAlreadyJoined()} onClick={joinTournamentHandler}>Join Tournament</button>
            </>
        )
    }

    return(
        <>
            {Object.keys(tournament).length === 0 ? <h1>Loading</h1> : renderComponent()}
        </>
    )
}

export default withRouter(UpcomingTournmanentShow)