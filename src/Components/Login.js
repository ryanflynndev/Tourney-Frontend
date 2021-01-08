import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/user_slice'

function Login(){
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser({email: email, password: password}))
    setEmail('')
    setPassword('')
  }

  return(
    <div>
      <form className="ui form" onSubmit={(e) => submitHandler(e)}>
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
    </div>
  )
}

export default Login;