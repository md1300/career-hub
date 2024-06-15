import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveInLocalStorage } from "../../Utility2/FunctionOfLocalStorage";
// import { saveStoredJobApplication } from "../../Utility/LocalStorage";



const JOBsDetails = () => {

    const jobs=useLoaderData()
    const {id}=useParams()
    const intId=parseInt(id)
    const job = jobs.find(job=>job.id===intId)
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information}=job ;

const handleApplyToast=()=>{
    // saveStoredJobApplication(intId)
    saveInLocalStorage(intId);
    toast('your applied successfully')
}

    return (
        <div>
            <div>
               <h3 className="text-2xl text-center"> jobs details  </h3>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 p-5 m-8">
                     <p> <span className="text-xl">job description :</span> {job_description}</p>
                     <p> <span className="text-xl">job responsibility  :</span> {job_responsibility}</p>
                     <p><span className="text-xl ">educational requirements : </span>{educational_requirements}</p>
                     <p><span className="text-xl">experiences :</span>{experiences} </p>
                </div>
                <div className="col-span-1 p-5 m-8">
                      <h1>job details</h1>
                      <p><span className="text-xl">salary :</span>{salary} </p>
                      <p><span className="text-xl">job title :</span>{job_title} </p>
                      <h1>Contact information</h1>
                      <p><span className="text-xl">phone :</span>{contact_information.phone} </p>
                      <p><span className="text-xl">email :</span>{contact_information.email} </p>
                      <p><span className="text-xl">address:</span>{contact_information.address} </p>
                      <button onClick={handleApplyToast} className="btn btn-accent w-full">apply now</button>
                </div>
            </div>

           <ToastContainer></ToastContainer> 
        </div>
    );
};

export default JOBsDetails;