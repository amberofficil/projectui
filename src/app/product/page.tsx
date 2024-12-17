"use client"

import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 

export default function Product() {
  return (
    <div>
      <div className='w-full h-[266px] bg-[#F6F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200px]'>Products Detail</h4>
        <a className='ml-[200px]'>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.Pruduct Detail</a>
        </div>
        <div>
          <div className='w-[1170] h-[550] ml-[350] mb-[200] flex'>
            <div className='ml-3 mt-5'>
              <Image  src={"/product2.png"} alt="" width={151} height={155} ></Image>
              <Image className='mt-2' src={"/product3.png"} alt="" width={151} height={155} ></Image>
              <Image className='mt-2' src={"/product4.png"} alt="" width={151} height={155} ></Image>
            </div>
            {/* mid div* */}
            <div>
            <Image className='ml-3 mt-5' src={"/producti1.png"} alt="" width={375} height={487} ></Image>
            </div>
            {/* right div* */}
            <div className='ml-7 mt-5'>
              <h1 className='text-[#151875] font-bold'>Playwood arm chair</h1>
              <div>
               <p className='flex text-yellow-400'><FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar /></p>
              </div>
              <p>$32.00 <span className='line-through text-pink-500'>$32.22</span></p>
              <p className='text-[#151875] font-bold'>Color</p>
              <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
              <p className='text-[#151875] font-bold mt-5 text-center'>Add To cart </p>
              <p className='text-[#151875] font-bold mt-5'> Categories:</p>
              <p className='text-[#151875] font-bold mt-5'>Tags </p>
              <p className='text-[#151875] font-bold mt-5'>Share</p>
              <div>
              <p className='flex gap-2 mt-5'><FaFacebookSquare className='text-blue-500'/>,<FaInstagramSquare className='text-pink-400'/><FaTwitter className='text-blue-600'/> ,</p>
            </div>
            </div>

          </div>

        </div>
        <div>
          <div className='w-full h-[650] ml-[350]'>
            <div className='flex ml-[300] gap-[100]' >
              <p className='font-bold text-[#151875]'>Description</p>
              <p className='font-bold text-[#151875]'>Additional Info</p>
              <p className='font-bold text-[#151875]'>Reviews</p>
              <p className='font-bold text-[#151875]'>Video</p>
            </div>
            <div className='ml-[300] mt-[100] '>
              <p className='font-bold text-[#151875]'>Varius tempor.</p>
              <p className='text-gray-300'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='text-gray-300'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='font-bold text-[#151875]'>More details</p>
              <p className='text-gray-300'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='text-gray-300'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='text-gray-300'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>

          </div>
          <div className=' w-full h-[500] ml-[350] mt-[100]'>
             <div className='ml-[300]'>
              <p className='font-bold text-[#151875]'>Related Products</p>
              <div className='flex mt-[50] gap-5'>
              <Image  src={"/Rectangle p.png"} alt="" width={270} height={340} ></Image>
              <Image  src={"/Rectangle p2.png"} alt="" width={270} height={340} ></Image>
              <Image  src={"/Rectangle p3.png"} alt="" width={270} height={340} ></Image>
              <Image  src={"/Rectangle p4.png"} alt="" width={270} height={340} ></Image>
              </div>
             </div>

             </div>
             </div>
             </div>
  )
}
