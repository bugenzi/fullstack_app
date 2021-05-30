import React from "react";
import { useRouteMatch } from "react-router";

const generetePage = (page) => {
  const component = () => require(`./pages/${page}`).default;
  try {
    return React.createElement(component());
  } catch (error) {
      console.warn(error);
      return React.createElement(()=>404)
  }
};

export default function PageRenderer (){
  const {
    params: { page },
  } = useRouteMatch();
  

    return generetePage(page)
}


