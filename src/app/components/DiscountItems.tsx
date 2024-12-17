import React from 'react';
import Link from 'next/link';

export default function DiscountItems() {
  return (
    <div
        className="container mx-auto px-4 py-8"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>
  
        {/* Static Navigation */}
        <div className="flex justify-center space-x-8 text-[#151875]">
          <a href="#" className="text-[#FB4997] font-semibold">
          Wood Chair
          </a>
          <a href="#" className="hover:text-[#FB4997]">Plastic Chair</a>
          <a href="#" className="hover:text-[#FB4997]">Sofa Colletion</a>
          </div>

    <div className="relative py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
    {/* Center Column: Content (Title, Description, Button) */}
    <div className=" w-[1214] h-[597] ml-[50] md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
      <h1 className="text-3xl md:text-3xl font-bold text-indigo-950 mb-10 leading-tight">

      20% Discount Of All Products
      </h1>
      <p className="text-sm text-pink-500 font-bold">
      Eams Sofa Compact
      </p>
      <p className=" text-gray-300 text-sm mb-10 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.<br/>
      Material expose like metals . Clear lines and geomatric figures<br />
      Simple neutral colours. Material expose like metals
      </p>
      <Link
        href="#"
        className=" mt-10 inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md  hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
      >
        <button className='w-200 h-57'>Shop</button>
      </Link>
    </div>
    
    {/* Right Column: Chair Image */}
    <div className=" mr-[200] md:w-1/3 flex justify-center items-center relative">
      <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
        <img
          src={"/discountimg.png"}
          alt="Furniture Chair"
          width={200}
          height={300}
          className="object-contain w-full h-auto"
        />
      </div>
      </div>
    </div>
    </div>
);
}
