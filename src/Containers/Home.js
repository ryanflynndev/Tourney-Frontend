import React from 'react'
import { useSelector } from 'react-redux'
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

function Home(){

  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)

  return(
      <div>
        <NavBar />
        <Route path="/tournament-form" exact component={TournamentForm} />
        {/* TOURNAMENT CONTAINER */}
        <h1>HOME PAGE</h1>
      </div>


  )
}

export default Home;