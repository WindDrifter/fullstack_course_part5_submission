import React, { useState, useEffect } from 'react'
import 'axios'
import { login } from './services/logincall'
import { setToken, getAll, create } from './services/blogs'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import ToggableLogin from './components/ToggableLogin'
import './app.css'
function App() {
  const [user, setUser] = useState(null)
  const [makeNewBlog, setMakeNewBlog] =useState(false)
  const [blogs, setBlogs] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    const loginUserJSON = window.localStorage.getItem('loginUser')
    if (loginUserJSON) {
      const user = JSON.parse(loginUserJSON)
      setUser(user)
      setToken(user.token)
      getAll().then(data => {setBlogs(data)})
    }
  }, [])
  const addBlog = async (data) => {
    try{
      await create(data)
      const allBlogs = await getAll()
      setMakeNewBlog(false)
      setBlogs(allBlogs)
    }
    catch(exception){
      console.log(exception)
      writeErrorMessage('Cannot add Blog')
    }
  }
  const logOut = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loginUser')
    setUser(null)
    setBlogs(null)
  }
  const writeErrorMessage = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
  const handleLogin= async (data) => {
    try{
      const user = await login(data)
      setUser(user)
      setToken(user.setToken)
      window.localStorage.setItem('loginUser', JSON.stringify(user))
      const allBlogs = await getAll()
      setBlogs(allBlogs)
      return true
    }
    catch(exception){
      console.log(exception)
      writeErrorMessage('Wrong Credentials')
      return false
    }
  }
  const hideShowCreateBlog = (flag) => {
    setMakeNewBlog(flag)
  }
  const blogComponents = () => (
    <div>
      <button name='Logout' value='Logout' onClick={logOut}>Logout</button>
      <div className={makeNewBlog? 'showBlog': 'hideBlog'}>
        <BlogForm addBlogFunction={addBlog}/>
        <button onClick={() => { hideShowCreateBlog(false) }}>back</button>
      </div>
      <div className={makeNewBlog? 'hideBlog': 'showBlog'}>
        {blogs && blogs.map(currentBlog => <Blog key={currentBlog.id} blog={currentBlog}></Blog> )}
        <button onClick={() => { hideShowCreateBlog(true) }}>Create new Blog</button>
      </div>
    </div>
  )
  const loginForm = () => (
    <ToggableLogin loginFunction={handleLogin}/>
  )
  return (
    <div className='App'>
      <div className='error message'><p>{errorMessage}</p></div>
      <h1>HELLLO</h1>
      {user!==null? blogComponents():loginForm()}
    </div>
  )
}

export default App
