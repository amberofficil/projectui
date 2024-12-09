"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative bg-[#F2F0FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div>
          <Image
            src={"/heroleftimg.png"}
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain mb-[100px]"
          />
        </div>
      </div>
      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-3xl font-bold text-indigo-950 leading-tight">
        New Furniture Collection
        Trends in 2020
        </h1>
        <p className="text-gray-600 text-sm mt-5 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-5 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >
          <button>shop</button>
        </Link>
      </div>{/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={"/heroimag.png"}
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
        {/* Discount Badge (if needed) */}
        <div className="absolute top-10 right-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-medium py-2 px-4 rounded-full">
          50%off 
          
        </div>
      </div>






      </section>
  )
}