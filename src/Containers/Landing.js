import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import '../css/landing.css'

function Landing(props){
  const [page, setPage] = useState('login')
  
  const buttonHandler = () => {
    if (page === 'login'){
      setPage('signup')
      props.history.push('/signup')
    } else {
      setPage('login')
      props.history.push('/')
    }
  }

  return(
    <div id="landing">
      <Route path="/" exact component={Login}/>  
      <Route path="/signup" exact component={SignUp} />

      <div id="signup-btn-wrapper">
        <p hidden={page === 'login' ? false : true}>{page === 'login' ? 'Not yet a user?' : ''}</p>
        <button 
          className="ui button" 
          onClick={buttonHandler}
        >{page === 'login' ? 'Sign Up' : 'Back to Login'}</button>
      </div>
    </div>
  )
}

export default withRouter(Landing);