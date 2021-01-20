import React from 'react'
import { useSelector } from 'react-redux';
import {selectInUse} from '../redux/tournament_slice'

function TournamentShow(){
  const tournament = useSelector(selectInUse)

  console.log(tournament)

  return (
    <div>
      TOURNAMENT SHOW
    </div>
  )
}

export default TournamentShow;