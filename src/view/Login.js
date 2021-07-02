import React from 'react'
import './css/login.css'

const Login = () => {
  const Logar = () => {
    alert('ai')
  }
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

export default Login

