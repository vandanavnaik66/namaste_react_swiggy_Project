import { resImage } from "../../utility/constant";

const RestaurantCard = (props) => {
    const {objProp}=props;
    const {name,avgRating,cuisines,areaName,cloudinaryImageId} =objProp?.info;
    return (
      <>
        <div className="res-card">
          <img
            className="res-card-img"
            src={resImage+cloudinaryImageId}
          />
          <h5>{name}</h5>
          <h5>{avgRating}</h5>
          <h5>{cuisines.join(",")}</h5>
          <h5>{areaName}</h5>
        </div>
      </>
    );
  };

  export default RestaurantCard;