import React from 'react'

function TournamentCard({tournament}){


    return(
        <div >
            <h3>Name: {tournament.name}</h3>
            <h4>Start Date: {tournament.startDate}</h4>
            <h4>End Date: {tournament.endDate}</h4>
            <p>Description: {tournament.description}</p>
            <p>Number of Particpants: {tournament.participants.length}</p>
            <p>Player Limit: {tournament.playerLimit}</p>
        </div>
    )
}

export default TournamentCard;