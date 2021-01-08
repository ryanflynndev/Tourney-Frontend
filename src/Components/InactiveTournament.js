import {useDispatch, useSelector} from 'react-redux'
import {
    selectCurrentUser,
    addUserToTournamentFetch,
} from '../redux/tournament_slice'

function InactiveTournament({tournament}){
    const dispatch = useDispatch();
    // const currentUser = useSelector(selectCurrentUser)
    
    const joinTournamentHandler = () => {
        dispatch(addUserToTournamentFetch({
            _id: '5ff8a238c3a5afff25f59428'
        }, tournament))
    }

    return(
        <div>
            {tournament.name}
            <button onClick={()=> joinTournamentHandler()}>Join This Tournament</button>
        </div>
    )
}

export default InactiveTournament;