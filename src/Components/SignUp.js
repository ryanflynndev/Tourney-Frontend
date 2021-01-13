import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {withRouter} from 'react-router'
import { signUpUser, addError } from '../redux/user_slice'

function SignUp(props){
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupHandler = (e) => {
    e.preventDefault();
    const signupUser = {
      username: username,
      email: email,
      password: password
    }
    dispatch(signUpUser(signupUser, props.history))
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const buttonHandler = () => {
    dispatch(addError([]));
    props.history.push('/login');
  }

  return(
    <>
      <form onSubmit={(e)=>signupHandler(e)} className="ui form" id="signup-form" >
        <div className="field">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <input className="ui button" type="submit" readOnly value="Sign Up" />
      </form>

      <div id="signup-btn-wrapper">
        <button 
          className="ui button" 
          onClick={()=>buttonHandler()}
        >Back to Login</button>
      </div>
    </>
  )
}

export default withRouter(SignUp);