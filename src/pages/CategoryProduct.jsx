import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

import Loading from "../assets/Loading4.webm";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log(category);

  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${params.category}`,
      ); // (`https://fakestoreapi.com/api/products/category?type=${category}`); // change api .com
      const data = res.data; // remove data.products
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, [params.category]);
  //console.log(params.category);

  // ************************** debug

  return (
    <div className="">
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className=" bg-gray-800  mb-6 text-white px-4 py-2 rounded cursor-pointer flex gap-2 items-center"
          >
            <FaAngleDoubleLeft /> Back{" "}
          </button>
          {searchData.map((product, index) => {
            return <ProductListView key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-96">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
