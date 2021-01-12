import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {
  selectUserErrors
} from '../redux/user_slice'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import '../css/landing.css'

function Landing(props){
  const errors = useSelector(selectUserErrors)

  const renderErrors = () => {
    if (errors.length > 0){
      return errors.map(err => <p>{err.msg}</p>)
    }
  }

  return(
    <div id="landing">
      {renderErrors()}
      <Route path="/login" exact component={Login}/>  
      <Route path="/signup" exact component={SignUp} />
    </div>
  )
}

export default withRouter(Landing);