import React from "react";

const WorkCard = (props) => {
  return (
    <div className=" bg-white min-w-fit max-w-screen-sm h-fit rounded-lg ">
      <img
        className=" w-[170px] h-[134px] rounded-t-lg  "
        src={props.image}
        alt={props.name}
      />
      <div className=" px-4 py-2">
        <h1 className=" font-ubuntu text-2xl"> {props.name} </h1>
        <p className=" font-lato"> {props.type} </p>
      </div>
    </div>
  );
};

export default WorkCard;
