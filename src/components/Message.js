import React from "react";

const Message = () => {
  return (
    <div className=" relative flex justify-center items-center flex-col h-screen px-48  ">
      <div className=" relative flex justify-center items-center flex-col w-full border-8 border-gray-100 py-10">
        <p className=" absolute -rotate-90 uppercase tracking-[.75em] bottom-[49%] -left-[20%] text-2xl font-ubuntu text-white  ">
          SEND ME A MESSAGE
        </p>

        <p className=" absolute rotate-90 uppercase tracking-[.75em] top-[49%] -right-[20%] text-2xl font-ubuntu text-white  ">
          SEND ME A MESSAGE
        </p>
        {/* <h1 className=" font-ubuntu text-white text-4xl">
          {" "}
          Send me a message!
        </h1> */}
        <p className=" text-white text-2xl text-center mt-6">
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </p>

        <form className=" mt-8  w-[40%] ">
          <label className=" text-white " for="name">
            {" "}
            Full Name:{" "}
          </label>
          <input
            type="text"
            className=" mb-10 w-full bg-transparent border-b-2 text-white text-center border-white"
          />

          <label className=" text-white " for="email">
            {" "}
            Email Address:{" "}
          </label>
          <input
            type="email"
            className=" mb-10 w-full bg-transparent border-b-2 text-white text-center border-white"
          />

          <label className=" text-white" for="message">
            {" "}
            Message:
          </label>

          <textarea className=" w-full mb-10 " id="message" rows="4"></textarea>
          <button className="relative inline-block px-4 py-2 font-medium text-white border-2 border-white rounded-md hover:bg-blue-500 hover:text-white transition-all duration-5000">
            <span className="absolute inset-0 bg-blue-500 transform scale-x-0 transition-transform origin-left" />
            <span className="relative">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
