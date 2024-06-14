
import { useEffect, useState } from "react";


const JobsFeature = () => {
    const [jobsFeatures,setJobsFeature]=useState([])
    useEffect(()=>{
        fetch('JobsFeature.json')
        .then(res=>res.json())
        .then(data=>setJobsFeature(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl text-center m-6">total length of jobs feature : {jobsFeatures.length} </h1>
            <div className="grid grid-cols-2 m-6">
                {
                    jobsFeatures.map(jobsFeature=><div className="m-6"
                    key={jobsFeature.id}>
                        <img src={jobsFeature.logo} alt=""  />
                        <h1> {jobsFeature.job_title}</h1>
                        <h2>{jobsFeature.company_name}</h2>
                        <div className="flex gap-9">
                            <button className="btn btn-primary">{jobsFeature.remote_or_onsite}</button>
                            <button className="btn btn-primary">{jobsFeature.job_type}</button>
                        </div>
                        <div  className="flex gap-9">
                            <h3>location : {jobsFeature.location}</h3>
                            <h3>salary :{jobsFeature.salary}</h3>
                        </div>
                        <button className="btn btn-primary">View Details</button>
                    </div>)
                }
            </div>
            <div >
               <button className="btn btn-accent">view details</button>
            </div>
            
           
        </div>
    );
};

export default JobsFeature;