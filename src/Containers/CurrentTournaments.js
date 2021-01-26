import { useSelector } from 'react-redux'
import { 
  selectCurrentTournaments
} from '../redux/tournament_slice'
import TournamentCard from '../Components/TournamentCard'


function CurrentTournaments(){
  const currentTournaments = useSelector(selectCurrentTournaments)

  const renderCurrentTournaments = () => {
    if (currentTournaments.length > 0){
      return currentTournaments.map(tourney => {
        return <TournamentCard key={tourney._id} tournament={tourney} type={"current"} />
      })
    } else {
      return <p>No Current Tournaments</p>
    }
  }

    return(
        <div className="tournament-col-wrapper" >
          <h2>Current Tournaments</h2>
          <div className="t-card-wrapper">
            {renderCurrentTournaments()}
          </div>
        </div>
    )
}

export default CurrentTournaments