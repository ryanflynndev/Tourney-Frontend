import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import TournamentForm from '../Forms/TournamentForm'
import {Route} from "react-router";
import {selectCurrentUser} from '../redux/user_slice'
import TournamentContainer from './TournamentContainer'
import '../css/tournament-container.css'


function Home(props){

  const currentUser = useSelector(selectCurrentUser)

  return(
      <div>
        <NavBar />
        <h1>HOME PAGE</h1>
        <Route path="/home/tournamentform" component={TournamentForm} />
        
        <Route path="/home/tournaments" component={TournamentContainer}/>
        
      </div>


  )
}

export default withRouter(Home);