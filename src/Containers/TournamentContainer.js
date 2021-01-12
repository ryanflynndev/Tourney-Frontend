import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {
  upcomingTournamentFetch,
  currentTournamentFetch,
  pastTournamentFetch,
} from '../redux/tournament_slice';
import UpcomingTournaments from './UpcomingTournaments';
import CurrentTournaments from './CurrentTournaments'
import PastTournaments from './PastTournaments'

function TournamentContainer(){
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(upcomingTournamentFetch())
    dispatch(currentTournamentFetch())
    dispatch(pastTournamentFetch())
  }, [])

    return(
    <div>
        Tournament Container
        <UpcomingTournaments />
        <CurrentTournaments/>
        <PastTournaments/>
    </div>)

}

export default TournamentContainer;