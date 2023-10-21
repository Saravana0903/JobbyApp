// import {useState} from 'react'
// import {Redirect} from 'react-router-dom'
// import Cookies from 'js-cookie'
// import './index.css'

// const Login = props => {
//   const [user, setUser] = useState({username: '', password: ''})
//   const [err, setErr] = useState('')
//   //   const history = useHistory()
//   const {history} = props
//   const handleChange = e => {
//     const {name} = e.target
//     setUser({...user, [name]: e.target.value})
//   }

//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken !== undefined) {
//     return <Redirect to="/" />
//   }

//   const postDetails = async userDetails => {
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const res = await fetch('https://apis.ccbp.in/login', options)
//     const res1 = await res.json()
//     console.log(res.ok)
//     if (res.ok === true) {
//       //   setStatus({...status, jwt: `${res1.jwt_token}`, err: ''})
//       Cookies.set('jwt_token', res1.jwt_token, {expires: 30})
//       history.push('/')
//     } else {
//       setErr(`*${res1.error_msg}`)
//     }
//     console.log(res1)
//   }

//   //   console.log(status)
//   const handleSubmit = e => {
//     e.preventDefault()
//     const userDetails = {username: user.username, password: user.password}
//     postDetails(userDetails)
//   }
//   console.log(user)
//   return (
//     <div className="container-fluid login-con">
//       <div className="row">
//         <div className="form-con p-4">
//           <div className="logo-con pt-3 pb-3">
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//               className="logo-img"
//             />
//           </div>
//           <div className="user-con">
//             <label className="label-ele pt-3 pb-1" htmlFor="#1">
//               USERNAME
//             </label>
//             <br />
//             <input
//               type="text"
//               className="inp-ele"
//               name="username"
//               required
//               onChange={handleChange}
//               placeholder="username"
//             />
//           </div>
//           <div className="pwd-con">
//             <label className="label-ele pt-3 pb-1" htmlFor="#2">
//               PASSWORD
//             </label>
//             <br />
//             <input
//               type="password"
//               id="#2"
//               className="inp-ele"
//               name="password"
//               placeholder="password"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="btn-con pt-3 text-center">
//             <button className="btn btn-primary" onClick={handleSubmit}>
//               login
//             </button>
//             <p className="text-danger">{err}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Login
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    let {username, password} = this.state

    if (username.toLowerCase().trim(' ') === 'veda') username = 'rahul'
    if (password === 'veda@2023') password = 'rahul@2021'

    const userDetails = {username, password}
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  updateUsername = event => this.setState({username: event.target.value})

  updatePassword = event => this.setState({password: event.target.value})

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-field-container">
        <label htmlFor="username" className="login-input-label">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          className="login-input-field"
          placeholder="veda"
          id="username"
          onChange={this.updateUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-field-container">
        <label htmlFor="password" className="login-input-label">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          className="login-input-field"
          placeholder="veda@2023"
          id="password"
          onChange={this.updatePassword}
        />
      </div>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {errorMsg, showErrorMsg} = this.state
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo-login-form"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default Login
