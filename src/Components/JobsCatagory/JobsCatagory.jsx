import { useEffect, useState } from "react";


const JobsCatagory = () => {
    const [jobsCatagories,setJobsCatagory]=useState([])

    useEffect(()=>{
        fetch('JobsCatagory.json')
        .then(res=>res.json())
        .then(data=>setJobsCatagory(data))
    },[])
   

    return (
        <div>
            <h1 className="text-2xl text-center m-10">total jobs catagory : {jobsCatagories.length} </h1>
            <div className="md:flex justify-around">
            {
                jobsCatagories.map(jobsCatagory=><div key={jobsCatagory.id}>
                    <img src={jobsCatagory.logo} alt="" />
                    <h1>{jobsCatagory.category_name}</h1>
                    <p>{jobsCatagory.availability}</p>
                </div>)
            }
           
            </div>
            
        </div>
    );
};

export default JobsCatagory;