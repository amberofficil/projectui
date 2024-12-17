import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <div className='w-[1920px] h-[266px] bg-[#F6F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200px]'>Contact Us</h4>
        <a className='ml-[200px]'>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.Contact us</a>
        </div>
        <div> 
           <div className='w-[1191] h-[600] ml-[200] mt-[50]'>
           <h1 className='font-bold text-2xl text-[#151875]'>Information About us</h1>
           <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis aliquam.</p>
           <h1 className='text-[#151875] text-2xl font-bold ml-[600]'>Contact way</h1>
           <p className=' ml-[600] text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
           <p className='text-gray-300 ml-[600]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
           <p className='text-gray-300 ml-[600]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
           <p className='text-gray-300 ml-[600]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
           <div>
                        <img
                         src={"/contactimg.png"}
                         alt=""
                         width={400}
                         height={450}
                         className=" ml-[550] mt-[200]"
                       />
           </div> 
           </div>
           
           <div>
            <h1 className='ml-[200] font-bold text-2xl text-[#151875]'>Get In Touch</h1>
           <form className='w-[534] h-[441] ml-[200] mt-[50]'>
            <input type="email"placeholder="Your Name"className="w-[255] h-[45] mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
            <input type="text"placeholder="Your Email"className="w-[255] h-[45] ml-2 mb-4 px-4 py-2 border border-blue-500 rounded-md" required /> <br />
            <input type="email"placeholder="Subject"className="w-[534] h-[45] mb-4 px-4 py-2 border border-blue-500 rounded-md" required /> <br />
            <textarea placeholder="Your Message"className="w-[534] h-[] mb-4 px-4 py-2 border border-blue-500 rounded-md" rows={5} required></textarea> <br />
            <button type="submit"className="w-[157] h-[45] bg-pink-500 text-white py-2 rounded-md">Signup</button>
            <Link href="/http://localhost:3000/sign up"></Link>
        </form>
           </div>
           
        </div>
        
    </div>
  )
}
