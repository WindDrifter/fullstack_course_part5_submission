import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  return {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbXBsZXVzZXIyIiwiaWQiOiI1ZDc4MzA0ZWNmM2RkMDVhMWZkYzI1YTkiLCJpYXQiOjE1NjgxNjIzMzd9.FhU0yNtAEpRW83atGZhTsU9-SzIG4I3we7vPzMhtyZc",
    "username": "sampleuser2",
    "name": "sample2 name"
  }
}

export { login }