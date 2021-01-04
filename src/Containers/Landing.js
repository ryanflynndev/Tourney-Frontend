import React, { useState } from 'react'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

function Landing(){
  const [signup, setSignUp] = useState(false)


  return(
    <div>
      {!signup ? <Login /> : null}
      <button hidden={signup} onClick={()=>setSignUp(true)}>Click To Sign Up</button>
      {signup ? <SignUp /> : null}
    </div>
  )
}

export default Landing;