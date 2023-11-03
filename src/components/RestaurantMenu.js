import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../../utility/constant";
import "../css_components/RestaurantMenu.css"
import useRestaurantMenu from "../../utility/useRestaurantMenu";
import useOnlineStatus from "../../utility/useOnlineStatus";

const RestaurantMenu = () => {
 
  const {ResId} =useParams()

const ResData=useRestaurantMenu(ResId);  // useRestaurantMenu take the ResId or 
// restaurant id of perticular restaurant and returns the restaurant details of that id


 


  if(ResData===null){
    return <Shimmer/>
  }

 

const {name,cuisines,areaName}=ResData?.data?.cards[0]?.card?.card?.info;
const{itemCards} =ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  return (
    <>
    <div className="w-full h-screen flex justify-center">
      <div className="w-9/12 flex flex-col items-start mt-5   bg-slate-600">
      <h4 className="mt-5 ml-5">{name}</h4>
      <h6 className="text-xs ml-5">{cuisines.join(",")}</h6>
      <h6 className="text-xs ml-5">{areaName}</h6>
      
      <h4 className=" ml-5 mt-8 list-none">{itemCards.map((item)=><li>{item.card.info.name}</li>)}</h4>
     
      </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
