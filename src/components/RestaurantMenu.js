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
const{itemCards} =ResData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <>
    <div className="res-menu-container">
      <div className="res-menu-inner-container">
      <div >
      <h4 className="menu-name">{name}</h4>
      </div>
      <div className="menu-cuisine">
      <h6 className="cuisine-style">{cuisines.join(",")}</h6>
      <h6 className="cuisine-style">{areaName}</h6>
      </div>
      
      <h4 className="menu-list">{itemCards.map((item)=><li>{item.card.info.name}</li>)}</h4>
      </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
