// import { useEffect, useState } from "react";

// import { useLoaderData } from "react-router-dom";
// import { getStoredJobApplication } from "../../Utility/LocalStorage";


// const Applied = () => {
//     const loadJobs=useLoaderData()
//    const [appliedJobs,setAppliedJobs]=useState([])
//     useEffect(()=>{
//         const appliedJobsId=getStoredJobApplication()
          
//         if(loadJobs.length>0){
//             const jobsApplied= loadJobs.filter(job=>appliedJobsId.includes(job.id))  
//             setAppliedJobs(jobsApplied)  
//         }
//     },[])
    
//     console.log(appliedJobs)
//     return (
//         <div>
//             <h1>applied jobs : {appliedJobs.length} </h1>
//             <div>
//                 {
//                     appliedJobs.map(appliedJob=><div key={appliedJob.id}>
//                        {appliedJob.job_title}
//                        {appliedJob.company_name}
                      
//                     </div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Applied;