import React from 'react'
import { useSelector } from 'react-redux';
import {selectInUse} from '../redux/tournament_slice'

function PastTournmanentShow() {
    const tournament = useSelector(selectInUse)
    console.log(tournament)
    return(
        <h1>Past Tournament</h1>
    )
}

export default PastTournmanentShow