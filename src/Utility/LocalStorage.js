// const getStoredJobApplication=()=>{
//     const storedJobApplication=localStorage.getItem('job-Application')
//     if(storedJobApplication){
//         return JSON.parse(storedJobApplication)
//     }
//     return []
// }

// const saveStoredJobApplication=id=>{
//     const saveStoreApplication=getStoredJobApplication();
//     const exist = saveStoreApplication.find(jobId=>jobId===id)
//     if(!exist){
//         saveStoreApplication.push(id)
//         localStorage.setItem('job-Application',JSON.stringify(saveStoreApplication))
//     }
// }

// export {getStoredJobApplication,saveStoredJobApplication}