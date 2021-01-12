import { useSelector } from 'react-redux'
import { 
  selectPastTournaments
} from '../redux/tournament_slice'
import TournamentCard from '../Components/TournamentCard'

function PastTournaments(){
    const pastTournaments = useSelector(selectPastTournaments)


    return(
        <div>Past Tournament</div>
    )
}

export default PastTournaments