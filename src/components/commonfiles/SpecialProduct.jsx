import React from "react";
import { FaStar } from "react-icons/fa";
import { product } from "./data";
import { Buttons } from "./Buttons";
import { OtherProduct } from "./OtherProduct";
import { useNavigate } from "react-router-dom";

export const SpecialProduct = () => {
    const navigate =useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-md bg-white p-5 mt-40">
        <div className="flex justify-between">
          <div className="flex">
            <h3>Special Products for You</h3>
            <div className="flex gap-6">
              <h4>Ends in</h4>
              <div className="flex gap-2">
                <div className="bg-red-300 rounded">
                  <p className="p-1">02</p>
                </div>
                <div className="bg-red-300 rounded">
                  <p className="p-1">54</p>
                </div>
                <div className="bg-red-300 rounded">
                  <p className="p-1">04</p>
                </div>
              </div>
            </div>
          </div>
          <h4>See More</h4>
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-1 mt-6">
          {product.map((products) => (
            <div className="border shadow md:w-1/6" key={products.id} onClick={()=>{
                navigate('/' + products.id)
              }}>
              <div className="bg-[#EAEFF5]">
                <img
                  src={products.image}
                  alt=""
                  className="object-cover w-[90%] mx-auto"
                />
              </div>
              <div className="text-sm px-2">
                <p className="mt-1">{products.category}</p>
                <h4 className="my-3 font-bold text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit?
                </h4>
                <div className="flex text-sm justify-between pb-2">
                  <h3 className="text-[#349C83] font-medium">$35.00</h3>
                  <p className="text-xs text-gray-400 py-1">
                    <FaStar className="inline text-yellow-400 " />{" "}
                    {products.rating} | {products.totalRating}{" "}
                  </p>
                </div>
              </div>
              <div className="w-3/4 px-2 pb-3">
                {/* <div className="w-2/3 h-2 bg-red-700 mx-auto "></div> */}
                <div className="relative h-2 bg-gray-200 rounded-full mx-auto my-0">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-400 rounded-full"
                    style={{ width: `${70}%` }}
                  ></div>
                </div>
                {/* <p className="text-xs">24/30</p> */}
              </div>
            </div>
          ))}
        </div>
      <Buttons />
      <OtherProduct />
      </div>
    </div>
  );
};
