import React, { useState } from 'react'
import LoginForm from './LoginForm'
import { useField } from '../hooks/useField'
const ToggableLogin = ({ loginFunction }) => {
  const [login, setLogin] =useState(false)
  const hideShowLogin=(flag) => {
    setLogin(flag)
  }
  const {reset:resetNameField, ...usernameField} = useField('text')
  const {reset:resetPasswordField, ...passwordField} = useField('password')
  const handleLogin = (event) => {
    event.preventDefault()
    if(loginFunction({ username: usernameField.value, password: passwordField.value })){
        resetPasswordField()
        resetNameField()
    }
  }
  return (
    <div>
      <div className={login? 'showLogin': 'hideLogin'}>
        <div>
          <LoginForm handleLogin = { handleLogin } username={ usernameField } password={ passwordField }/>
          <button onClick={() => { hideShowLogin(false) }}>back</button>
        </div>
      </div>
      <div className={login? 'hideLogin': 'showLogin'}>
        <button onClick={() => { hideShowLogin(true) }}>Login</button>
      </div>
    </div>
  )
}
export default ToggableLogin