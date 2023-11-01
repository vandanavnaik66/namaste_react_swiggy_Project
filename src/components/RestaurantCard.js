import { resImage } from "../../utility/constant";

const RestaurantCard = (props) => {
    const {objProp}=props;
    const {name,avgRating,cuisines,areaName,cloudinaryImageId} =objProp?.info;


    return (
      <>
        <div className="w-[200px] h-[400px] p-1 bg-gray-200 text-xs font-bold hover:bg-gray-100 shadow-md">
          <img
            className="h-48 w-[100%] object-cover"
            src={resImage+cloudinaryImageId}
          />
          <h5 className="mt-2 ml-1 mr-1 ">{name}</h5>
          <h5 className="mt-2 ml-1 mr-1">{avgRating}</h5>
          <h5 className="mt-2 ml-1 mr-1">{cuisines.join(",")}</h5>
          <h5 className="mt-2 ml-1 mr-1">{areaName}</h5>
        </div>
      </>
    );
  };

  export default RestaurantCard;

 export const promResList=(RestaurantCard)=>{
    return()=>{
      return(
        <>
        <label>promoted</label>
        <RestaurantCard/>
        </>
      )
    }

  }