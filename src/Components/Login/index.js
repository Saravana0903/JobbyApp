import {useState} from 'react'
import './index.css'

const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  const handleChange = e => {
    const {name} = e.target
    setUser({...user, [name]: e.target.value})
  }
  const postDetails = async userDetails => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const res = await fetch('https://apis.ccbp.in/login', options)
    console.log(res)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const userDetails = {username: user.username, password: user.password}
    postDetails(userDetails)
  }
  console.log(user)
  return (
    <div className="container-fluid login-con">
      <div className="row">
        <div className="form-con p-4">
          <div className="logo-con pt-3 pb-3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="logo-img"
            />
          </div>
          <div className="user-con">
            <label className="label-ele pt-3 pb-1" htmlFor="#1">
              USERNAME
            </label>{' '}
            <br />
            <input
              type="text"
              className="inp-ele"
              name="username"
              required
              onChange={handleChange}
              placeholder="username"
            />
          </div>
          <div className="pwd-con">
            <label className="label-ele pt-3 pb-1" htmlFor="#2">
              PASSWORD
            </label>{' '}
            <br />
            <input
              type="password"
              id="#2"
              className="inp-ele"
              name="password"
              placeholder="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="btn-con pt-3">
            <button className="btn btn-primary" onClick={handleSubmit}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
