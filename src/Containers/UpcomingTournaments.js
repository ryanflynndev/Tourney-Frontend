import { useSelector } from 'react-redux'
import { selectUpcomingTournaments } from '../redux/tournament_slice'
import TournamentCard from '../Components/TournamentCard'
import { selectCurrentUser } from '../redux/user_slice'

function UpcomingTournaments(){
  const upcomingTournaments = useSelector(selectUpcomingTournaments)
  const currentUser = useSelector(selectCurrentUser)

    const renderUpcoming = () => {
      if (upcomingTournaments.length > 0 && currentUser._id){
        const sorted = upcomingTournaments.slice().sort((a,b) => b.startDate - a.startDate)
        
        return sorted.map(tourney => {
          return <TournamentCard key={tourney._id} tournament={tourney} type={"upcoming"} joinable />
        })
      } else {
        return <p>No Upcoming Tournaments</p>
      }
    }
    
    
    return(
      <div className="tournament-col-wrapper">
        <h2>Upcoming Tournaments</h2>
        <div className="t-card-wrapper">
          {renderUpcoming()}
        </div>
      </div>
    )
}

export default UpcomingTournaments