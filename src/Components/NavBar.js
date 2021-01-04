import React from 'react'
import './navbarcss.css'

function NavBar(){

  return(
    <div id="nav-container">
      <div id="nav-left">
        <p>App Icon</p>

        <p>App Name</p>
      </div>
      <div id="nav-center">
        <input placeholder="Search"/>
      </div>
      <div id="nav-right">
        <select value="Drop down of Options">
          <option>View Tournaments</option>
          <option>New Tournament</option>
          <option>View Profile</option>
        </select>
        <button>Log Out</button>
      </div>
    </div>
  )
}
export default NavBar;