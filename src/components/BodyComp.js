import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ResList_API } from "../../utility/constant.js";
import { userContext } from "../../utility/userContex.js";

const BodyComp = () => {
  const [ResList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const  {loggedInName , setUserName} =useContext(userContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(ResList_API);
    let json = await data.json();
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (ResList.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="bodyContainer">
        <div className="flex mb-5 mt-5 ">
          <div className="sub-container">
            <input
              className="border border-slate-500 rounded-md"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-8 py-1 text-sm rounded-lg bg-blue-300 ml-2"
              onClick={() => {
                const filteredRes = ResList.filter((res) =>
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredRes);
              }}
            >
              Search
            </button>
          </div>

          <div className="sub-container">
            <button
              className="px-8 bg-blue-300 rounded-lg ml-2"
              onClick={() => {
                let filtedData = ResList.filter(
                  (res) => res?.info?.avgRating >= 4.4
                );
                setFilteredRes(filtedData);
              }}
            >
              Filter Top Restaurants
            </button>
          </div>
          <input className="border border-black ml-2 rounded-lg " value={loggedInName} 
          onChange={(e)=>setUserName(e.target.value)} ></input>
        </div>
          <div className="flex flex-wrap gap-3">
            {filteredRes.map((restaurant) => (
              <Link to={"/restaurant/" + restaurant.info.id} className="link">
                <RestaurantCard key={restaurant.info.id} objProp={restaurant} />
              </Link>
            ))}
          </div>
      
      </div>
    </>
  );
};

export default BodyComp;
