import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const handleLog = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.push('/login')
  }

  return (
    <div className="Header-con">
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="logo-icon"
        />
      </div>
      <div className="links-con">
        <Link className=".navlink-div" to="/">
          <p className="home-des">Home</p>
          <AiFillHome className="home-icon" />
        </Link>
        <Link className=".navlink-div" to="/jobs">
          <p className="jobs-des">Jobs</p>
          <BsFillBriefcaseFill className="jobs-icon" />
        </Link>
        <div className=".navlink-div">
          <button
            className="btn btn-primary btn-des"
            type="button"
            onClick={handleLog}
          >
            {' '}
            logout{' '}
          </button>
          <FiLogOut className="logout-icon" onClick={handleLog} />
        </div>
      </div>
    </div>
  )
}
export default withRouter(Header)
