import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {withRouter} from 'react-router'
import { selectUserErrors, signUpUser } from '../redux/user_slice'

function SignUp(props){
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errors = useSelector(selectUserErrors)

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

  const renderErrors = () => {
    return errors.map(error => {
      return <p>{error.msg}</p>
    })
  }

  return(
    <div>
      {errors.length > 0 ? renderErrors() : null}
      <form onSubmit={(e)=>signupHandler(e)}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <input type="submit" readOnly value="Sign Up" />
      </form>
    </div>
  )
}

export default withRouter(SignUp);