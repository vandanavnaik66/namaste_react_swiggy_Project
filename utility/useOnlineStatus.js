import { useEffect, useState } from "react";

const useOnlineStatus =()=>{

    const[onlineStatus,setOnlineStatus]= useState(true)

useEffect(()=>{
    addEventListener("online", (event) => {
        setOnlineStatus(true)
    })
    addEventListener("ofline", (event) => {
        setOnlineStatus(false)
    })

},[])

    return onlineStatus;
}

export default useOnlineStatus;