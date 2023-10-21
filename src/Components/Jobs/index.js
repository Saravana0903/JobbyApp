// import {useState, useEffect} from 'react'
// import {FcSearch} from 'react-icons/fc'
// import {FaStar} from 'react-icons/fa'
// import {MdLocationOn} from 'react-icons/md'
// import {BsBriefcaseFill} from 'react-icons/bs'
// import Header from '../Header'
// import './index.css'

// const employmentTypesList = [
//   {
//     label: 'Full Time',
//     employmentTypeId: 'FULLTIME',
//   },
//   {
//     label: 'Part Time',
//     employmentTypeId: 'PARTTIME',
//   },
//   {
//     label: 'Freelance',
//     employmentTypeId: 'FREELANCE',
//   },
//   {
//     label: 'Internship',
//     employmentTypeId: 'INTERNSHIP',
//   },
// ]

// const salaryRangesList = [
//   {
//     salaryRangeId: '1000000',
//     label: '10 LPA and above',
//   },
//   {
//     salaryRangeId: '2000000',
//     label: '20 LPA and above',
//   },
//   {
//     salaryRangeId: '3000000',
//     label: '30 LPA and above',
//   },
//   {
//     salaryRangeId: '4000000',
//     label: '40 LPA and above',
//   },
// ]

// const Jobs = props => {
//   const [bigState, setBigState] = useState({
//     name: '',
//     url: '',
//     bio: '',
//     job: null,
//     em_type: [],
//     salary: '',
//     status: false,
//     search: '',
//   })

//   //   const [search, setSearch] = useState('')

//   //   console.log(search)
//   const getProfile = async () => {
//     const res = await fetch('https://apis.ccbp.in/profile', {
//       method: 'GET',
//       headers: {
//         Authorization:
//           'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
//       },
//     })
//     const pro = await res.json()
//     console.log(pro)
//     setBigState(prev => ({
//       ...prev,
//       name: pro.profile_details.name,
//       url: pro.profile_details.profile_image_url,
//       bio: pro.profile_details.short_bio,
//     }))
//   }
//   console.log(bigState)

//   const handleSearch = e => {
//     setBigState(prev => ({...prev, search: e.target.value}))
//   }
//   //   const {employmentTypesList, salaryRangesList} = props

//   const handleJobs = async () => {
//     console.log(employmentTypesList)
//     if (bigState.em_type.length !== 0) {
//       const emarr = []
//       for (let i = 0; i < bigState.em_type.length; i += 1) {
//         if (bigState.em_type[i] === 'Full Time') {
//           emarr.push('FULLTIME')
//         }
//         if (bigState.em_type[i] === 'Part Time') {
//           emarr.push('PARTTIME')
//         }
//         if (bigState.em_type[i] === 'Freelance') {
//           emarr.push('FREELANCE')
//         }
//         if (bigState.em_type[i] === 'Internship') {
//           emarr.push('INTERNSHIP')
//         }
//       }
//       console.log(emarr)
//       const str1 = emarr.join(',')
//       console.log(str1)
//       const jobs = await fetch(
//         `https://apis.ccbp.in/jobs?employment_type=${str1}`,
//         {
//           method: 'GET',
//           headers: {
//             Authorization:
//               'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
//           },
//         },
//       )
//       const res = await jobs.json()
//       console.log(res.jobs)
//       setBigState(prev => ({...prev, job: res.jobs}))
//     }
//   }

//   const handleCheck = e => {
//     const {value} = e.target
//     if (e.target.checked) {
//       setBigState(prev => ({...prev, em_type: [...prev.em_type, value]}))
//       console.log(true)
//     } else {
//       const arr = bigState.em_type
//       const index = arr.indexOf(value)
//       arr.splice(index, 1)
//       setBigState(prev => ({...prev, em_type: arr}))
//       console.log(arr)
//     }
//   }

//   const handleRadio = e => {
//     const {value} = e.target
//     if (e.target.checked) {
//       console.log(value)
//       setBigState(prev => ({...prev, salary: value}))
//     }
//   }

//   const getJobs = async () => {
//     const res = await fetch(
//       'https://apis.ccbp.in/jobs?employment_type=&minimum_package=',
//       {
//         method: 'GET',
//         headers: {
//           Authorization:
//             'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
//         },
//       },
//     )
//     const jobs = await res.json()
//     console.log(jobs)
//     setBigState(prev => ({...prev, job: jobs.jobs}))
//   }

//   //   const handleJobs = () => {
//   //     const result = bigState.job.filter(each => {
//   //       let flag = 0
//   //       console.log(bigState.em_type)
//   //       console.log(each.employment_type)
//   //       if (bigState.em_type.includes(each.employment_type)) {
//   //         flag = 1
//   //       } else if (each.title.includes(bigState.search)) {
//   //         flag = 1
//   //       }
//   //       console.log(flag)
//   //       if (flag === 1) {
//   //         return true
//   //       }
//   //       return false
//   //     })
//   //     console.log(result.length)
//   //   }

//   useEffect(() => {
//     getProfile()
//     getJobs()
//   }, [])

//   return (
//     <>
//       <Header />
//       <div className="container-fluid job-bg-con pt-4">
//         <div className="row">
//           <div className="col-12 col-lg-3">
//             <div className="pro-con p-4">
//               <img src={bigState.url} className="pro-icon" />
//               <h3 className="pro-head">{bigState.name}</h3>
//               <p className="pro-des text-dark">{bigState.bio}</p>
//             </div>
//             <hr className="text-light" />
//             <ul className="type-con">
//               <h3>Type of Employment</h3>
//               <li>
//                 <input
//                   type="checkbox"
//                   id="#1"
//                   value="Full Time"
//                   onChange={handleCheck}
//                 />
//                 <label htmlFor="#1 pl-2">Full Time</label>
//               </li>
//               <li>
//                 <input
//                   type="checkbox"
//                   id="#2"
//                   value="Part Time"
//                   onChange={handleCheck}
//                 />
//                 <label htmlFor="#2 ml-2">Part Time</label>
//               </li>
//               <li>
//                 <input
//                   type="checkbox"
//                   id="#3"
//                   value="Freelance"
//                   onChange={handleCheck}
//                 />
//                 <label htmlFor="#3 pl-2">Freelance</label>
//               </li>
//               <li>
//                 <input
//                   type="checkbox"
//                   id="#4"
//                   value="Internship"
//                   onChange={handleCheck}
//                 />
//                 <label htmlFor="#4 pl-2">Internship</label>
//               </li>
//             </ul>
//             <hr className="text-light" />
//             <ul className="salary-con">
//               <h3>Salary Range</h3>
//               <li>
//                 <input
//                   type="radio"
//                   id="#1"
//                   value="10"
//                   name="salary"
//                   onChange={handleRadio}
//                 />
//                 <label htmlFor="#1 pl-2">10 LPA and above</label>
//               </li>
//               <li>
//                 <input
//                   type="radio"
//                   id="#2"
//                   value="20"
//                   name="salary"
//                   onChange={handleRadio}
//                 />
//                 <label htmlFor="#2 ml-2">20 LPA and above</label>
//               </li>
//               <li>
//                 <input
//                   type="radio"
//                   id="#3"
//                   value="30"
//                   name="salary"
//                   onChange={handleRadio}
//                 />
//                 <label htmlFor="#3 pl-2">30 LPA and above</label>
//               </li>
//               <li>
//                 <input
//                   type="radio"
//                   id="#4"
//                   value="40"
//                   name="salary"
//                   onChange={handleRadio}
//                 />
//                 <label htmlFor="#4 pl-2">40 LPA and above</label>
//               </li>
//             </ul>
//           </div>
//           <div className="con2 col-12 col-lg-9">
//             <div className="search-con">
//               <input
//                 type="text"
//                 className="search-ele"
//                 placeholder="search for the keyword"
//                 value={bigState.search}
//                 onChange={handleSearch}
//               />
//               <FcSearch />
//             </div>
//             <ul className="jobs-con">
//               {bigState.job !== null &&
//                 bigState.job.map(each => (
//                   <li className="job-li-ele p-4 mt-2 mb-2">
//                     <div className="first-con">
//                       <img src={each.company_logo_url} className="logo-comp" />
//                       <div className="fi-fi-con">
//                         <h2 className="job-title">{each.title}</h2>
//                         <div
//                           className="d-flex flex-row"
//                           style={{alignItems: 'center'}}
//                         >
//                           <FaStar color="yellow" />{' '}
//                           <span className="text-light">{each.rating}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="second-con pt-3">
//                       <div className="se-fi-con">
//                         <div className="loc">
//                           <MdLocationOn
//                             color="white"
//                             style={{fontSize: '30px'}}
//                           />
//                           <p className="des">{each.location}</p>
//                         </div>
//                         <div className="file">
//                           <BsBriefcaseFill
//                             color="white"
//                             style={{fontSize: '30px'}}
//                           />
//                           <p className="des">{each.employment_type}</p>
//                         </div>
//                       </div>
//                       <div className="se-se-con">
//                         <p className="des">10LPA</p>
//                       </div>
//                     </div>
//                     <hr style={{border: '1px solid white'}} />
//                     <div className="third-con">
//                       <h3 className="text-white">Description</h3>
//                       <p className="text-white">{each.job_description}</p>
//                     </div>
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Jobs
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import ProfileDetails from '../ProfileDetails'
import FiltersGroup from '../FiltersGroup'
import JobCard from '../JobCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    profileDetails: {},
    profileApiStatus: apiStatusConstants.initial,
    jobsList: [],
    jobsApiStatus: apiStatusConstants.initial,
    searchInput: '',
    activeSalaryRangeId: '',
    employmentTypesChecked: [],
  }

  componentDidMount() {
    this.getProfileDetails()
    this.getJobs()
  }

  updateEmploymentTypesChecked = typeId => {
    const {employmentTypesChecked} = this.state
    let updatedList = employmentTypesChecked
    if (employmentTypesChecked.includes(typeId)) {
      updatedList = employmentTypesChecked.filter(
        eachType => eachType !== typeId,
      )
    } else {
      updatedList = [...updatedList, typeId]
    }

    this.setState({employmentTypesChecked: updatedList}, this.getJobs)
  }

  updateSalaryRangeId = activeSalaryRangeId =>
    this.setState({activeSalaryRangeId}, this.getJobs)

  getJobs = async () => {
    this.setState({jobsApiStatus: apiStatusConstants.inProgress})

    const {
      activeSalaryRangeId,
      employmentTypesChecked,
      searchInput,
    } = this.state
    const employTypes = employmentTypesChecked.join(',')
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employTypes}&minimum_package=${activeSalaryRangeId}&search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const {jobs} = data
      const updatedData = jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({
        jobsList: updatedData,
        jobsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({jobsApiStatus: apiStatusConstants.failure})
    }
  }

  getProfileDetails = async () => {
    this.setState({profileApiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const profileDetails = data.profile_details
      const updatedData = {
        name: profileDetails.name,
        profileImageUrl: profileDetails.profile_image_url,
        shortBio: profileDetails.short_bio,
      }
      this.setState({
        profileDetails: updatedData,
        profileApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({profileApiStatus: apiStatusConstants.failure})
    }
  }

  renderSearchBar = searchBarID => {
    const {searchInput} = this.state
    return (
      <div className="search-bar" id={searchBarID}>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={e => this.setState({searchInput: e.target.value})}
        />
        <button
          className="search-button"
          type="button"
          data-testid="searchButton"
          onClick={() => this.getJobs()}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  renderSideBar = () => {
    const {
      profileDetails,
      profileApiStatus,
      activeSalaryRangeId,
      employmentTypesChecked,
    } = this.state
    return (
      <div className="side-bar">
        {this.renderSearchBar('smallSearchBar')}
        <ProfileDetails
          profileDetails={profileDetails}
          profileApiStatus={profileApiStatus}
          getProfileDetails={this.getProfileDetails}
        />
        <hr className="separator" />
        <FiltersGroup
          updateSalaryRangeId={this.updateSalaryRangeId}
          activeSalaryRangeId={activeSalaryRangeId}
          updateEmploymentTypesChecked={this.updateEmploymentTypesChecked}
          employmentTypesChecked={employmentTypesChecked}
        />
      </div>
    )
  }

  renderNoJobsView = () => (
    <div className="no-jobs-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no-jobs-image"
      />
      <h1 className="no-jobs-heading">No Jobs Found</h1>
      <p className="no-jobs-description">
        We could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderJobsList = () => {
    const {jobsList} = this.state
    return (
      <>
        {jobsList.length > 0 ? (
          <ul className="jobs-list">
            {jobsList.map(eachJob => (
              <JobCard key={eachJob.id} jobDetails={eachJob} />
            ))}
          </ul>
        ) : (
          this.renderNoJobsView()
        )}
      </>
    )
  }

  renderJobsLoaderView = () => (
    <div className="jobs-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobsApiFailureView = () => (
    <div className="jobs-api-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="job-api-failure-image"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="retry-button"
        onClick={() => this.getJobs()}
      >
        Retry
      </button>
    </div>
  )

  renderJobsBasedOnAPiStatus = () => {
    const {jobsApiStatus} = this.state

    switch (jobsApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderJobsLoaderView()
      case apiStatusConstants.success:
        return this.renderJobsList()
      case apiStatusConstants.failure:
        return this.renderJobsApiFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="jobs-page-container">
        <Header />
        <div className="jobs-page">
          {this.renderSideBar()}
          <div className="jobs-container">
            {this.renderSearchBar('largeSearchBar')}
            {this.renderJobsBasedOnAPiStatus()}
          </div>
        </div>
      </div>
    )
  }
}
export default Jobs
