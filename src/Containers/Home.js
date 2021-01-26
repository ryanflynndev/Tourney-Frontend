import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter, Switch } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import {Route} from "react-router";
import {selectCurrentUser} from '../redux/user_slice'
import TournamentForm from '../Forms/TournamentForm'
import TournamentContainer from './TournamentContainer'
import TournamentShow from '../Components/TournamentShow'
import '../css/tournament-container.css'


function Home(props){

  const currentUser = useSelector(selectCurrentUser)

  return(
      <>
        <h1 style={{textAlign: 'center'}}>HOME PAGE</h1>

      </>


  )
}

export default withRouter(Home);