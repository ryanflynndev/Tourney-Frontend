import React, { useState } from 'react'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import '../css/login.css'

function Landing(){
  const [signup, setSignUp] = useState(false)

  return(
    <div className="login-form">
      {!signup ? <Login /> : null}
      <button className="ui button" hidden={signup} onClick={()=>setSignUp(true)}>Click To Sign Up</button>
      {signup ? <SignUp /> : null}
    </div>
  )
}

export default Landing;