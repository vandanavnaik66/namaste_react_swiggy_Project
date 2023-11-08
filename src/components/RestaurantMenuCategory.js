import { useState } from "react";
import CategoryAccordionBody from "./CategoryAccordionBody";
import { IoIosArrowDown } from "react-icons/Io";

const RestaurantMenuCategory = ({ data,showItems,setShowIndex,showIndex}) => {

  const handleFun=()=>{

  setShowIndex();
  }


  return (
    <>
      <div className="w-full bg-slate-100 mt-3 flex cursor-pointer justify-between items-center pt-1 pb-1 pl-1 pr-2 shadow-md" onClick={handleFun}>
        <p className="text-small font-bold font-sans  ">
          {data.title} ({data.itemCards.length})
        </p>
        <IoIosArrowDown />
       
      </div>
      <div className="w-full">
     {
    showItems &&  <CategoryAccordionBody accBodyData={data.itemCards} />
     }   
      </div>
    </>
  );
};

export default RestaurantMenuCategory;
