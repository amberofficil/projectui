import React from 'react';
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <header>
        <div className="bg-white shadow-sm border-b mx-auto flex flex-col">
            <div className="bg-[#7E33E0] text-white py-2 text-sm flex justify-center gap-3 px-8 w-full">
            <CiMail className="mt-1" />
           maham@gmail.com
            <FaPhoneVolume className="mt-1" />
            (1234) 678900
            <div className="flex items-center gap-[2px]">
                <div className="text-white text-sm font-normal leading-[21px] ml-[300px]">
                       English
                </div>
                <RiArrowDropDownLine className='text-2xl'   />
                <div className='ml-6'>
                    USD
                    </div>
                    <RiArrowDropDownLine className='text-2xl' />
                    <div className='ml-6'>
                    <Link href="login">Login</Link>
                    </div>
                    <MdOutlinePersonOutline className='text-1xl' />
                    <div className='ml-6'>
                    Wishlist
                    </div>
                    <CiHeart className='text-1xl' />
                    <div className='ml-6'>
                    <BsCart2 className='text-1xl' />
                    </div>
            </div>
            </div>
        </div>
        {/*navigation*/}
        <div className="flex justify-between items-centerpx-8 py-4">
            <h1 className="text-2xl font-bold text-black ml-[200px]">Hekto</h1>
            <nav className="hidden md:flex space-x-8 mr-[50px]">
              <a href="/" className="text-pink-600 hover:text-black underline">Home</a>
              <a href="/pages" className="text-slate-600 hover:text-black">Pages</a>
              <a href="/product" className="text-slate-600 hover:text-black">Product</a>
              <a href="/blog" className="text-slate-600 hover:text-black">Blog</a>
              <a href="/shop" className="text-slate-600 hover:text-black">Shop</a>
              <a href="/contact" className="text-slate-600 hover:text-black">Contact</a>
            </nav>
            {/*search icon*/}
            <div className="flex items-center space-x-6">
                <div className="hidden lg:flex items-center bg-slate-100 underline-md px-3 py-2 mr-[200px]">
                     <input type="text"
                     placeholder="Search"
                     className="bg-slate-100 outline-none text-sm"
                     />
                     <CiSearch className='text-1xl' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
