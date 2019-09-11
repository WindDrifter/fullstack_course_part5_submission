import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div>
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button className="likebutton" onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog