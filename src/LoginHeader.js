import React from 'react'
import { Link } from 'react-router-dom'
const LoginHeader = ({value}) => {
  return (
    <div>
        <div id="headerComponent">
        {value}
        </div>
        {value==="User Details"?(<div id="user-logo"><Link to="/">logo</Link></div>) : null}
    </div>
    
  )
}

export default LoginHeader