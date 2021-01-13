import React from 'react'
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUserErrors} from '../redux/user_slice'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import Error from '../Components/Error'
import '../css/landing.css'

function Landing(){
  const errors = useSelector(selectUserErrors)

  const renderErrors = () => {
    return errors.map((err, idx) => <Error key={idx} error={err} />)
  }


  return(
    <div id="landing">
      {errors.length > 0 ? renderErrors() : null}
      <Route path="/login" exact component={Login}/>  
      <Route path="/signup" exact component={SignUp} />
    </div>
  )
}

export default Landing;