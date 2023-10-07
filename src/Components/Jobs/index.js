import {useState, useEffect} from 'react'
import {FcSearch} from 'react-icons/fc'
import {FaStar} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'

import Header from '../Header'
import './index.css'

const Jobs = props => {
  console.log(props)
  const [bigState, setBigState] = useState({
    name: '',
    url: '',
    bio: '',
    job: null,
    em_type: [],
    salary: '',
    search: '',
  })

  //   const [search, setSearch] = useState('')

  //   console.log(search)
  const getProfile = async () => {
    const res = await fetch('https://apis.ccbp.in/profile', {
      method: 'GET',
      headers: {
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
      },
    })
    const pro = await res.json()
    console.log(pro)
    setBigState(prev => ({
      ...prev,
      name: pro.profile_details.name,
      url: pro.profile_details.profile_image_url,
      bio: pro.profile_details.short_bio,
    }))
  }
  console.log(bigState)

  const handleSearch = e => {
    setBigState(prev => ({...prev, search: e.target.value}))
  }

  const handleCheck = e => {
    const {value} = e.target
    if (e.target.checked) {
      setBigState(prev => ({...prev, em_type: [...prev.em_type, value]}))
      console.log(true)
    } else {
      const arr = bigState.em_type
      const index = arr.indexOf(value)
      arr.splice(index, 1)
      setBigState(prev => ({...prev, em_type: arr}))
      console.log(arr)
    }
  }

  //   const {employmentTypesList, salaryRangesList} = props

  const handleJobs = async () => {
    const {employmentTypesList} = props
    console.log(employmentTypesList)
    if (bigState.em_type.length) {
      const emarr = []
      for (let i = 0; i < bigState.em_type.length; i = i + 1) {
        const index = employmentTypesList.findIndex(
          each => each.label === bigState.em_type[i],
        )
        emarr.push(employmentTypesList[index].employementTypeId)
      }
      const str1 = emarr.join(',')
      console.log(str1)
      const jobs = await fetch(
        `https://apis.ccbp.in/jobs?employment_type=${str1}`,
      )
      const res = jobs.json()
      console.log(res)
    }
  }

  handleJobs()
  const handleRadio = e => {
    const {value} = e.target
    if (e.target.checked) {
      console.log(value)
      setBigState(prev => ({...prev, salary: value}))
    }
  }

  const getJobs = async () => {
    const res = await fetch(
      'https://apis.ccbp.in/jobs?employment_type=&minimum_package=',
      {
        method: 'GET',
        headers: {
          Authorization:
            'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
        },
      },
    )
    const jobs = await res.json()
    console.log(jobs)
    setBigState(prev => ({...prev, job: jobs.jobs}))
  }

  //   const handleJobs = () => {
  //     const result = bigState.job.filter(each => {
  //       let flag = 0
  //       console.log(bigState.em_type)
  //       console.log(each.employment_type)
  //       if (bigState.em_type.includes(each.employment_type)) {
  //         flag = 1
  //       } else if (each.title.includes(bigState.search)) {
  //         flag = 1
  //       }
  //       console.log(flag)
  //       if (flag === 1) {
  //         return true
  //       }
  //       return false
  //     })
  //     console.log(result.length)
  //   }

  useEffect(() => {
    getProfile()
    getJobs()
  }, [])

  return (
    <>
      <Header />
      <div className="container-fluid job-bg-con pt-4">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="pro-con p-4">
              <img src={bigState.url} className="pro-icon" />
              <h3 className="pro-head">{bigState.name}</h3>
              <p className="pro-des text-dark">{bigState.bio}</p>
            </div>
            <hr className="text-light" />
            <ul className="type-con">
              <h3>Type of Employment</h3>
              <li>
                <input
                  type="checkbox"
                  id="#1"
                  value="Full Time"
                  onChange={handleCheck}
                />
                <label htmlFor="#1 pl-2">Full Time</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="#2"
                  value="Part Time"
                  onChange={handleCheck}
                />
                <label htmlFor="#2 ml-2">Part Time</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="#3"
                  value="Freelance"
                  onChange={handleCheck}
                />
                <label htmlFor="#3 pl-2">Freelance</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="#4"
                  value="Internship"
                  onChange={handleCheck}
                />
                <label htmlFor="#4 pl-2">Internship</label>
              </li>
            </ul>
            <hr className="text-light" />
            <ul className="salary-con">
              <h3>Salary Range</h3>
              <li>
                <input
                  type="radio"
                  id="#1"
                  value="10"
                  name="salary"
                  onChange={handleRadio}
                />
                <label htmlFor="#1 pl-2">10 LPA and above</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="#2"
                  value="20"
                  name="salary"
                  onChange={handleRadio}
                />
                <label htmlFor="#2 ml-2">20 LPA and above</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="#3"
                  value="30"
                  name="salary"
                  onChange={handleRadio}
                />
                <label htmlFor="#3 pl-2">30 LPA and above</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="#4"
                  value="40"
                  name="salary"
                  onChange={handleRadio}
                />
                <label htmlFor="#4 pl-2">40 LPA and above</label>
              </li>
            </ul>
          </div>
          <div className="con2 col-12 col-lg-9">
            <div className="search-con">
              <input
                type="text"
                className="search-ele"
                placeholder="search for the keyword"
                value={bigState.search}
                onChange={handleSearch}
              />
              <FcSearch />
            </div>
            <ul className="jobs-con">
              {bigState.job !== null &&
                bigState.job.map(each => (
                  <li className="job-li-ele p-4 mt-2 mb-2">
                    <div className="first-con">
                      <img src={each.company_logo_url} className="logo-comp" />
                      <div className="fi-fi-con">
                        <h2 className="job-title">{each.title}</h2>
                        <div
                          className="d-flex flex-row"
                          style={{alignItems: 'center'}}
                        >
                          <FaStar color="yellow" />{' '}
                          <span className="text-light">{each.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="second-con pt-3">
                      <div className="se-fi-con">
                        <div className="loc">
                          <MdLocationOn
                            color="white"
                            style={{fontSize: '30px'}}
                          />
                          <p className="des">{each.location}</p>
                        </div>
                        <div className="file">
                          <BsBriefcaseFill
                            color="white"
                            style={{fontSize: '30px'}}
                          />
                          <p className="des">{each.employment_type}</p>
                        </div>
                      </div>
                      <div className="se-se-con">
                        <p className="des">10LPA</p>
                      </div>
                    </div>
                    <hr style={{border: '1px solid white'}} />
                    <div className="third-con">
                      <h3 className="text-white">Description</h3>
                      <p className="text-white">{each.job_description}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Jobs
