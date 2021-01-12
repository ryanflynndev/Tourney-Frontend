import { useSelector } from 'react-redux'
import { 
  selectCurrentTournaments
} from '../redux/tournament_slice'
import TournamentCard from '../Components/TournamentCard'


function CurrentTournaments(){
    const currentTournaments = useSelector(selectCurrentTournaments)
    return(
        <div>Current Tournaments</div>
    )
}

export default CurrentTournaments