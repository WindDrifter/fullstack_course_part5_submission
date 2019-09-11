import React from 'react'
import PropTypes from 'prop-types'
const LoginForm = ({ handleLogin, username, password }) => {
  LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
  }
  return (
    <form onSubmit={ handleLogin }>
      <div>
        username
        <input { ...username } />
      </div>
      <div>
        password
        <input { ...password } />
      </div>
      <button type="submit">login</button>
    </form>)
}
export default LoginForm