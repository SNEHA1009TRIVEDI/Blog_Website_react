import React from "react";
import { isPropertySignature } from "typescript";

export default function Clap({iconPath, clapCount, size = 25}) {
  return (
    <>
    {/* {console.log(props)} */}
    <img
      src={iconPath}
      className="card-actions-icon"
      width={size}
      height={size} 
      alt="clap"
      onClick={() => {clapCount()}}
    />
    </>
  );
}
