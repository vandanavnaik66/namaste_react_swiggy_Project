import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { userContext } from "../../utility/userContex";
import { Provider } from "react-redux";
import cartStore from "../../utility/cartStore";

function Main() {

  const[userName,setUserName]=useState("Vandana Naik");

  return (
    <div className="overflow-x-hidden">
      <userContext.Provider value={{loggedInName:userName , setUserName}}>
        <Provider store={cartStore}>
      <Header />
        <Outlet />
        </Provider>
      </userContext.Provider>
    </div>
  );
}

export default Main;
