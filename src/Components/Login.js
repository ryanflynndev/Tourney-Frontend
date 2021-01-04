import React, { useState } from 'react'

function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div>
      <form onSubmit={''}>
        <input 
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password..."
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;