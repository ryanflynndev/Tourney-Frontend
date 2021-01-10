import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { loginUser } from '../redux/user_slice'

function Login(props){
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser({email: email, password: password}, props.history))
    setEmail('')
    setPassword('')
  }

  return(
    <>
      <form className="ui form" id="login-form" onSubmit={(e) => submitHandler(e)}>
        <div className="field">
          <label>Email:</label>
          <input 
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Password:</label>
          <input
            type="text"
            placeholder="Password..."
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <input className="ui button" type="submit" readOnly value="Login" />
      </form>
    </>
  )
}

export default withRouter(Login);