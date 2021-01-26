import React from 'react'
import { useSelector } from 'react-redux';
import {selectInUse} from '../redux/tournament_slice'

function UpcomingTournmanentShow() {
    const tournament = useSelector(selectInUse)
    console.log(tournament)
    return(
        <h1>Upcoming Tournament</h1>
    )
}

export default UpcomingTournmanentShow