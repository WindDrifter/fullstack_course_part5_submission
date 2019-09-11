import React, { useState } from 'react'


const BlogForm = ({ addBlogFunction }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const updateAuthor = (event) => {
    setAuthor(event.target.value)
  }
  const updateTitle = (event) => {
    setTitle(event.target.value)
  }
  const updateURL = (event) => {
    setUrl(event.target.value)
  }
  const addBlog = (event) => {
    event.preventDefault()
    addBlogFunction({ title,author,url })
  }
  return (
    <form onSubmit={ addBlog }>
      <div>
        Title
        <input type="text" value={title} onChange={updateTitle} name="title"/>
      </div>
      <div>
        Author
        <input type="text" value={author} onChange={updateAuthor} name="author"/>
      </div>
      <div>
        url
        <input type="text" value={url} onChange={updateURL} name="url"/>
      </div>
      <button type="submit">Add Blog</button>
    </form>
  )
}
export default BlogForm