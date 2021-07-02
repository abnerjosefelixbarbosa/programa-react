import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <div className="body">
      <h1 className="titulo">Olá mundo</h1>
      <br></br>
      <button type="button" className="page1" onClick={Page1}>Page1</button>
    </div>
  )
}

const Page1 = () => {
  alert('ola')
}

export default Login
