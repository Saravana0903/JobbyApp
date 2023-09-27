import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = () => (
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
      <Link className=".navlink-div" to="/login">
        <button className="btn btn-primary btn-des" type="button">
          {' '}
          logout{' '}
        </button>
        <FiLogOut className="logout-icon" />
      </Link>
    </div>
  </div>
)
export default Header
