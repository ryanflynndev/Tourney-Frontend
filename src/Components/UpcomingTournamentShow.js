import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {selectInUse, inUseFetch} from '../redux/tournament_slice'
import {withRouter} from 'react-router'

function UpcomingTournmanentShow(props) {
    const dispatch = useDispatch();
    const tournament = useSelector(selectInUse)
    console.log(tournament)
    useEffect(()=> {
        if(Object.keys(tournament).length === 0){
            dispatch(inUseFetch(props.match.params.id))
        }
    }, [])
    return(
        <>
        <h1>Upcoming Tournament</h1>
        <div>Name: {tournament.name}</div>
        </>
    )
}

export default withRouter(UpcomingTournmanentShow)