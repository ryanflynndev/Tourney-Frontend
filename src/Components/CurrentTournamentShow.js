import React from 'react'
import { useSelector } from 'react-redux';
import {selectInUse} from '../redux/tournament_slice'

function CurrentTournamentShow() {
    const tournament = useSelector(selectInUse)
    console.log(tournament)
    return(
        <h1>Current Tournament</h1>
    )
}

export default CurrentTournamentShow