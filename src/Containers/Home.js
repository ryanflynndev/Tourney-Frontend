import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import TournamentForm from '../Forms/TournamentForm'
import {
  Switch,
  Route,
  Link
} from "react-router";
import { 
  selectCurrentUser,
 } from '../redux/user_slice'
import TournamentContainer from './TournamentContainer'


function Home(props){

  const currentUser = useSelector(selectCurrentUser)

  return(
      <div>
        <NavBar />
        <Route path="/home/tournamentform" component={TournamentForm} />
        {/* TOURNAMENT CONTAINER */}
        <Route path="/home/tournaments" component={TournamentContainer}/>
        <h1>HOME PAGE</h1>
        
      </div>


  )
}

export default withRouter(Home);