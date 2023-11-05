import { resMenuList_img } from "../../utility/constant";
import { BsCurrencyRupee } from "react-icons/bs";

const CategoryAccordionBody = (props) => {
  const { accBodyData } = props;
  return (
    <div>
      {accBodyData.map((c) => (
        <li className="list-none  flex justify-between mt-3 pb-9 border-b-2 ">
          <div className="w-11/12">
            <p className="text-sm">{c?.card?.info.name}</p>
            <p className="text-sm flex items-center ">
              <BsCurrencyRupee />
              {c?.card?.info.price
                ? c?.card?.info.price / 100
                : c?.card?.info.price}
            </p>
            <p className="text-xs mt-5 text-slate-400">
              {c?.card?.info?.description}
            </p>
          </div>
          <div className="w-2/12 h-[90px] relative flex justify-center ">
            <img
              className=" rounded-lg  w-full h-full object-cover "
              src={resMenuList_img + c?.card?.info?.imageId}
            />
            <button className="text-sm rounded-lg text-green-500 bg-gray-100 pl-2 pr-2 pt-1 pb-1 absolute bottom-[-18]">
              Add +
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CategoryAccordionBody;
