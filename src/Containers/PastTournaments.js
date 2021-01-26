import { useSelector } from 'react-redux'
import { 
  selectPastTournaments
} from '../redux/tournament_slice'
import TournamentCard from '../Components/TournamentCard'

function PastTournaments(){
    const pastTournaments = useSelector(selectPastTournaments)

    const renderPastTournaments = () => {
      if (pastTournaments.length > 0){
        return pastTournaments.map(tourney => {
          return <TournamentCard key={tourney._id} tournament={tourney} type="past"/>
        })
      }
    }


    return(
        <div className="tournament-col-wrapper">
          <h2>Past Tournament</h2>
          <div className="t-card-wrapper">
            {renderPastTournaments()}
          </div>
        </div>
    )
}

export default PastTournaments