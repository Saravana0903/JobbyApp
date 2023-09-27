import {Link} from 'react-router-dom'
import Header from '../Header/index'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container-fluid bg-con">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h1 className="main-head pb-4">
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="main-para pb-4">
            Millions of people are searching for jobs, Salary, Information and
            Company reviews. Find the jobs that fit to your abilities and
            potential.
          </p>
          <Link className="" to="/jobs">
            <button className="btn btn-primary">Find Jobs</button>
          </Link>
        </div>
      </div>
    </div>
  </>
)
export default Home
