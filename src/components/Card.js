import React from "react";
import { useState } from "react"


function Card({ name,image,specialty,weight,greased,medal}) {
 const [isClicked,setIsClicked] = useState(false)
function handleClick (){
    setIsClicked(isClicked=>!isClicked)
}
  return (
    <div class="ui card">
        <div>
      <img src={image} height="300" width="300" />
      </div>
      <button onClick={handleClick}>{name}</button>
     {isClicked? <span>
         specialty:{specialty},
         weight: {weight},
         greased: {greased} ,
         medal: {medal}</span>:""}

    </div>
  );
}

export default Card
