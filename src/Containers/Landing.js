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

  const renderErrors = () => {
    if (errors.length > 0){
      return errors.map(err => <p>{err.msg}</p>)
    }
  }

  return(
    <div id="landing">
      {renderErrors()}
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