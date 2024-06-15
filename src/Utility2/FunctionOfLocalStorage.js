const getIdInLocalStorage=()=>{
    const getLocalStorage=localStorage.getItem('jobs-applocation');
    if(getLocalStorage){
        return JSON.parse(getLocalStorage)
    }
    return []
}

const saveInLocalStorage=id=>{
    const saveLocalStorage=getIdInLocalStorage()
    const exist =saveLocalStorage.find(jobId=>jobId===id)
    if(!exist){
        saveLocalStorage.push(id)
        localStorage.setItem('jobs-applocation',JSON.stringify(saveLocalStorage))
    }
  
    
   
}
export {saveInLocalStorage,getIdInLocalStorage}