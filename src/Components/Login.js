import React, { useState } from 'react'

function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div>
      <form className="ui form" onSubmit={''}>
        <div className="field">
          <label>Username:</label>
          <input 
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
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

        <input type="submit" readOnly value="Login" />
      </form>
    </div>
  )
}

export default Login;