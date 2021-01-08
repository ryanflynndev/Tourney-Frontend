import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  selectActiveTournaments,
  selectInactiveTournaments,
  activeTournamentFetch,
  inactiveTournamentFetch,
} from '../redux/tournament_slice';
import InactiveTournament from '../Components/InactiveTournament'

function TournamentContainer(){
  const dispatch = useDispatch();
  const activeTournaments = useSelector(selectActiveTournaments)
  const inactiveTournaments = useSelector(selectInactiveTournaments)

  useEffect(()=> {
    dispatch(activeTournamentFetch())
    dispatch(inactiveTournamentFetch())
  }, [])

    const renderActiveTournaments = () => {

    }

    const renderInactiveTournaments = () => {
      return inactiveTournaments.map(tourney => {
        return <InactiveTournament key={tourney._id} tournament={tourney}/>
      })
    }
    return(
    <div>
        {/* ACTIVE */}
        Tournament Container
        {inactiveTournaments.length > 0 ? renderInactiveTournaments(): null}
        
    </div>)

}

export default TournamentContainer;