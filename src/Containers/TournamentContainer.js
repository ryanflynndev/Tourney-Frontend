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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  divstyle: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
})


function TournamentContainer(){
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=> {
    dispatch(upcomingTournamentFetch())
    dispatch(currentTournamentFetch())
    dispatch(pastTournamentFetch())
  }, [])

    return(
    <>
    Upcoming Tournaments:
      <div className={classes.divstyle}>
          <UpcomingTournaments />
      </div>
      <CurrentTournaments/>
      <PastTournaments/>
    </>
    )
}

export default TournamentContainer;

