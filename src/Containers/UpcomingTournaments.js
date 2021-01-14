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
          return <TournamentCard key={tourney._id} tournament={tourney} joinable />
        })
      } else {
        return <p>No Upcoming Tournaments</p>
      }
    }
    
    console.log(upcomingTournaments)
    
    return(
      <div>
        <h2>Upcoming Tournaments</h2>
        {renderUpcoming()}
      </div>
    )
}

export default UpcomingTournaments