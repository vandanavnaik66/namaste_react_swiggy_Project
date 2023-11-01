import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Menu_API } from "./constant";

const useRestaurantMenu=(ResId)=>{
    const [ResData, setResData] = useState(null);

useEffect(()=>{
   fetchData();
},[])

const fetchData=async()=>{
    const data= await fetch(Menu_API + ResId );
    const json = await data.json();
    setResData(json)
}



    return ResData;

}

export default useRestaurantMenu;