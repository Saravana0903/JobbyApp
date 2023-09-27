import {useState, useEffect} from 'react'
import './index.css'

const Jobs = () => {
  const [profile, setProfile] = useState({name: '', url: '', bio: ''})
  const [job, setJob] = useState({})

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
    setProfile({
      name: pro.profile_details.name,
      url: pro.profile_details.profile_image_url,
      bio: pro.profile_details.short_bio,
    })
  }
  console.log(profile)
  const getJobs = async () => {
    const res = await fetch('https://apis.ccbp.in/jobs', {
      method: 'GET',
      headers: {
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
      },
    })
    const jobs = await res.json()
    setJob(jobs)
  }
  console.log(job)

  useEffect(() => {
    getProfile()
    getJobs()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="pro-con">
            <img src={profile.url} className="pro-icon" />
            <h3 className="pro-head">{profile.name}</h3>
            <p className="pro-des">{profile.bio}</p>
          </div>
        </div>
        <div className="col-12 col-lg-8">{console.log(job)}</div>
      </div>
    </div>
  )
}
export default Jobs
