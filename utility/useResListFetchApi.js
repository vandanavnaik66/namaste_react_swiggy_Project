import { useEffect, useState } from "react"
import { ResList_API } from "./constant"

const useResListFetchApi=()=> {
    let[ResAPI,setResAPI]=useState([])

useEffect(()=>{
  fetchData();
},[])    


const fetchData=async()=>{
let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
let json=await data.json();
setResAPI(json)
console.log(json)
}

return ResAPI;
}

export default useResListFetchApi