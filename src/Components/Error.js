import React from 'react'

function Error({error}){

  return(
    <p className="error" >{error.msg}</p>
  )
}
export default Error;