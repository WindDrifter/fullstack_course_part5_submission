import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SampleBlog from '../components/SampleBlog'
import { prettyDOM } from '@testing-library/dom'

test('renders content and its props', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: "ME",
    likes: 5
  }
  const component = render(
    <SampleBlog blog={blog}/>
  )
  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
  expect(component.container).toHaveTextContent(
    'ME'
  )
  expect(component.container).toHaveTextContent(
    5
  )
})

test('clicking like button', ()=>{
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: "ME",
        likes: 5
      }
      const mockHandler = jest.fn()
      const {getByText } = render(
        <SampleBlog blog={blog} onClick={mockHandler}/>
      )
    
      
      const button = getByText('like')
      fireEvent.click(button)
      expect(mockHandler.mock.calls.length).toBe(1)

})