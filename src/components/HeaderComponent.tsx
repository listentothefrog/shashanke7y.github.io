import React from "react";

const HeaderComponent = () => {
  return (
    <div className="h-10 flex items-center justify-evenly mt-5">
      <div className="">
        <h1 className="text-lg font-bold">shashank ellareddy</h1>
      </div>
      <div className="">home 🏠</div>
      <div className="text-gray-700 hover:text-white hover:underline">
        github 💻
      </div>
      <div className="text-gray-700 hover:text-white hover:underline">
        blog ✍️
      </div>
    </div>
  );
};

export default HeaderComponent;
