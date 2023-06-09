import React from 'react'
import { FaStar } from 'react-icons/fa'
import { product } from './data'
import { useNavigate } from 'react-router-dom'

export const OtherProduct = () => {
    const navigate = useNavigate()
  return ( 
    <div>
    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-1 mt-6 md:w-full">
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
      </div>
    ))}

  </div>
    <div className="mx-auto mt-8">
        <button className='block'>Load More</button>
    </div>
  </div>
  )
}
