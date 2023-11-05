import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../../utility/constant";
import "../css_components/RestaurantMenu.css"
import useRestaurantMenu from "../../utility/useRestaurantMenu";
import useOnlineStatus from "../../utility/useOnlineStatus";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
 
  const {ResId} =useParams()

const ResData=useRestaurantMenu(ResId);  // useRestaurantMenu take the ResId or 
// restaurant id of perticular restaurant and returns the restaurant details of that id


 


  if(ResData===null){
    return <Shimmer/>
  }

 

const {name,cuisines,areaName}=ResData?.data?.cards[0]?.card?.card?.info;
const{itemCards} =ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

let categories=ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
console.log(categories)

  return (
    <>
    <div className="w-full h-screen flex justify-center ">
      <div className="w-6/12 flex flex-col items-start ">
      <h4 className="mt-5  font-extrabold font-sans text-xl">{name}</h4>
      <h6 className="text-xs  text-gray-600 font-sans">{cuisines.join(",")}</h6>
      <h6 className="text-xs  text-gray-600 font-sans">{areaName}</h6>
       {categories.map((category)=>(<RestaurantMenuCategory data={category?.card?.card}/>))}
      </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
