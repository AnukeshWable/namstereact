import { foodItems } from "./contants";
import Rest from "./Rest";
import React from "react";
const Body = () => {
    return (
      <>
        {foodItems.map((item)=>(
            <Rest {...item} />
        ))}
      </>
    );
  };
export default Body;