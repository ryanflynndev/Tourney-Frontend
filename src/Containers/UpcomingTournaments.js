import { useSelector } from 'react-redux'
import { 
  selectUpcomingTournaments, upcomingTournamentFetch
} from '../redux/tournament_slice'
import TournamentCard from '../Components/TournamentCard'

function UpcomingTournaments(){
  const upcomingTournaments = useSelector(selectUpcomingTournaments)

    const renderUpcoming = () => {
        const sorted = upcomingTournaments.slice().sort((a,b) => b.startDate - a.startDate)
        return sorted.map(tourney => {
          return (
            <div key={tourney._id}>
              {tourney.name}
            </div>
          )
        })
    }
    
    console.log(upcomingTournaments)

    return(
      <>
        <div>Upcoming Tournaments</div>
        {upcomingTournaments.length > 0 ? renderUpcoming() : null}
      </>
    )
}

export default UpcomingTournaments