import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto my-6">
      <h1 className="text-xl text-gray-700 font-semibold px-3">
        <span
          className="cursor-pointer text-red-500 "
          onClick={() => navigate("/")}
        >
          Home/
        </span>

        <span
          className="cursor-pointer text-red-500"
          onClick={() => navigate("/products")}
        >
          Products/
        </span>
        <span> {title}</span>
      </h1>
    </div>
  );
};

export default Breadcrums;
