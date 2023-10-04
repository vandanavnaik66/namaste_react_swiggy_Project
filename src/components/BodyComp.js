import { useState } from "react";
import { ResData } from "../../utility/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComp = () => {
  const [ResList, setResList] = useState(ResData);

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
            Filter Top Restaurants{" "}
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
