import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { withRouter, Switch } from 'react-router-dom'
import {selectCurrentUser} from '../redux/user_slice'
import '../css/home.css'
import {useDispatch} from 'react-redux'
import {
  upcomingTournamentFetch,
  currentTournamentFetch,
  pastTournamentFetch,
} from '../redux/tournament_slice';
import UpcomingTournaments from './UpcomingTournaments';
import CurrentTournaments from './CurrentTournaments'
import PastTournaments from './PastTournaments'


function Home(props){

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(upcomingTournamentFetch())
    dispatch(currentTournamentFetch())
    dispatch(pastTournamentFetch())
  }, [])

  return(
      <>
        <h1 id="header">HOME PAGE</h1>
        <div id="tournament-wrapper">
          <UpcomingTournaments />
          <CurrentTournaments/>
          <PastTournaments/>
        </div>
      </>


  )
}

export default withRouter(Home);