import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {withRouter} from 'react-router'
import { signUpUser } from '../redux/user_slice'

function SignUp(props){
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const signupHandler = (e) => {
    e.preventDefault();
    const signupUser = {
      username: username,
      email: email,
      password: password,
      repeatPassword: repeatPassword
    }
    dispatch(signUpUser(signupUser))
    setUsername('')
    setEmail('')
    setPassword('')
    setRepeatPassword('')
    props.history.push('/home')

  }

  console.log(props)

  return(
    <div>
      <form onSubmit={(e)=>signupHandler(e)}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e)=>setRepeatPassword(e.target.value)}
        />
        <input type="submit" readOnly value="Sign Up" />
      </form>
    </div>
  )
}

export default withRouter(SignUp);