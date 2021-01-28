import React, {useEffect} from 'react'
import { withRouter } from 'react-router'
import '../css/home.css'
import {useDispatch, useSelector} from 'react-redux'
import {
  upcomingTournamentFetch,
  currentTournamentFetch,
  pastTournamentFetch,
  selectCurrentTournaments,
} from '../redux/tournament_slice';
import {selectCurrentUser} from '../redux/user_slice'

import UpcomingTournaments from './UpcomingTournaments';
import CurrentTournaments from './CurrentTournaments'
import PastTournaments from './PastTournaments'


function Home(props){
  const upcomingTs = useSelector(selectCurrentTournaments)
  const currentTs = useSelector(selectCurrentTournaments)
  const pastTs = useSelector(selectCurrentTournaments)

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();

  useEffect(()=> {
    if (!upcomingTs.length && !currentTs.length && !pastTs.length){
      dispatch(upcomingTournamentFetch())
      dispatch(currentTournamentFetch())
      dispatch(pastTournamentFetch())
      console.log('inside home UseEffect')
    }
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