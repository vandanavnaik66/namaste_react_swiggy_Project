import { useEffect, useState } from "react";
import { ResData } from "../../utility/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComp = () => {
  const [ResList, setResList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    let json=await data.json();
    setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(ResList.length === 0){
    return <h3>Loading...........</h3>
  }

  return (
    <>
      <div className="bodyContainer">
        <div className="searchContainer">
          <input type="text" />
          <button
            className="filter-btn"
            onClick={() => {
              let filtedData = ResList.filter((res) => res.info.avgRating > 4.3);
              setResList(filtedData);
            }}
          >
            Filter Top Restaurants
          </button>
        </div>
        <div className="res-card-container">
          {ResList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} objProp={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyComp;
