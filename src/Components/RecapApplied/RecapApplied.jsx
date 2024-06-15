import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getIdInLocalStorage } from "../../Utility2/FunctionOfLocalStorage";



const RecapApplied = () => {
    const loadJobs=useLoaderData()
    const [jobsData,setJobsData]=useState([])
   const [displayData,setDisplayData]=useState([])

   const handleJobsfilter=filter=>{
    if(filter==='all'){
        setDisplayData(jobsData)
    }
    else if(filter==='Remote'){
        const remoteJobs=jobsData.filter(job=>job.remote_or_onsite==='Remote')
        setDisplayData(remoteJobs)
    }
    else if(filter==='Onsite'){
        const onsiteJobs=jobsData.filter(job=>job.remote_or_onsite==='Onsite')
        setDisplayData(onsiteJobs)
    }
   }

    useEffect(()=>{
        const loadJobsData=getIdInLocalStorage()
        
        if(loadJobs.length>0){
            const appliedJob=loadJobs.filter(job=>loadJobsData.includes(job.id))
           setJobsData(appliedJob)
        }
    },[loadJobs])
            // console.log(jobData)  
    return (
        <div>
               <div>
                <details className="dropdown">
                        <summary className="m-1 btn">open or close</summary>
                           <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                              <li onClick={()=>handleJobsfilter('all')}><a>All</a></li>
                               <li onClick={()=>handleJobsfilter('Remote')}><a>Remote</a></li>
                               <li onClick={()=>handleJobsfilter('Onsite')}><a>Onsite</a></li>
                          </ul>
                </details>
            </div>

            <h1>this is our recap applied jobs : {jobsData.length}</h1>
           
            <div>
                {
                    displayData.map(jobData=><div key={jobData.id}>
                      <span >{jobData.job_title}</span>
                      <span >{jobData.company_name}</span> 
                      <span className="text-2xl">{jobData.remote_or_onsite}</span> 
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default RecapApplied;