import { foodItems } from "./contants";
import Rest from "./Rest";
import React from "react";
import Video from "./Video";
const Body = () => {
    return (
      <>
        {foodItems.map((item)=>(
            <Rest {...item} />
        ))}
        <Video name1="Anukesh"/>
      </>
    );
  };
export default Body;