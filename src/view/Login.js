import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <div className="body">
      <h1 className="titulo">Olá mundo</h1>
      <br></br>
      <button type="button" className="logar" onClick={Logar}>
        Logar
      </button>
    </div>
  )
}

const Logar = () => {
  alert('ola')
}

export default Login
