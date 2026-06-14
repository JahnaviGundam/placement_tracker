
import React from 'react'
import { getApplications,addApplication} from '../api/placementApi'
import { useEffect,useState } from 'react'

function Home() {
    const [applications, setApplications] =useState([])
    const [company, setCompany] = useState("")
    const [role, setRole] = useState("")
    const [status, setStatus] = useState("Applied")
    // const fetchApplications=()=>{
    //   getApplications()
    //     .then(response=>setApplications(response.data))
    //     .catch(error=>console.error("Error fetching applications:", error))
    // }
    useEffect(()=>{
       
      },[])

   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newApplication={
            company,
            role,
            status
        }
        addApplication(newApplication).then((response)=>{setApplications([...applications,response.data])
            // Refresh the list after adding
            setCompany("")
            setRole("")
            setStatus("Applied")
        }).catch(error=>console.error("Error adding application:", error))
    }
  return (
    <div>
      {applications.map((app)=>(
        <div key={app.id}>
      <h1>{app.company}</h1>
      <h1>{app.role}</h1>
      <h1>{app.status}</h1>

      </div>))}
      <div>
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Company Name' value={company} onChange={(e)=>setCompany(e.target.value)} />
        <input type="text" placeholder='Role' value={role} onChange={(e)=>setRole(e.target.value)} />
        <select value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offered">Offered</option>
            <option value="Rejected">Rejected</option>
        </select>
        <button type='submit'>Add Application</button>
        </form>
      </div>
    </div>
  )
}

export default Home
