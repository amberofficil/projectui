import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";

export default function Shop() {
  return (
    <div>
      <div className='w-full h-[266px] bg-[#F6F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200px]'>Shop List</h4>
        <a className='ml-[200px]'>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.Shop</a>
        </div>
        <div className='w-full h-[254] ml-[375]' >
          <h2 className='text-[#151875] text-2xl font-bold mt-[50] mb-[50]'>Ecommerce Acceories & Fashion item </h2>
        </div>
        <Link href={"/shop/gridedefault"}>
        <div className='flex ml-[375]'>
          <Image  src={"/shopimg1.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>Accumsan tincidunt</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
        </Link>
        
        <div className='flex ml-[375] mt-[100]'>
          <Image  src={"/shopimg2.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>In nulla</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
        <div className='flex ml-[375] mt-[100]'>
          <Image  src={"/shopimg3.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>Vel sem</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
        <div className='flex ml-[375] mt-[100]'>
          <Image  src={"/shopimg4.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>Porttitor cum</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
        <div className='flex ml-[375] mt-[100]'>
          <Image  src={"/shopimg5.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>Nunc in</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
        <div className='flex ml-[375] mt-[100]'>
          <Image  src={"/shopimg6.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>Vitae facilisis</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
        <div className='flex ml-[375] mt-[100] mb-[200]'>
          <Image  src={"/shopimg7.png"} alt="" width={313} height={217} ></Image>
          <div className='ml-10 mt-5'>
          <p className='text-[#151875] font-bold mb-3'>Curabitur lectus</p> 
          <p className='mb-3'>$26.00 <span className='text-pink-400 line-through'>$52.00</span></p>
          <p className='flex mb-3'><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-yellow-300'/><FaStar className='text-gray-400'/></p>
          <p className='w-60 h-45 text-gray-400 mt-3 mb-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elitin est adipiscing in phasellus non in justo.</p>
          <p className='flex gap-8 mt-5'><IoCartOutline /> <CiHeart /> <FaSearchPlus /></p>
        </div>
        </div>
    </div>
  )
}
