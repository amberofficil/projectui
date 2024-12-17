import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <div className='w-full h-[266] bg-[#F6F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200px]'>Single Blog</h4>
        <a className='ml-[200px]'>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.Blog</a>
        </div>
        <div>
        <div className='ml-[100] mt-[100]'>
           <Image  src={"/blogp1.png"} alt="" width={870} height={453} ></Image>
        </div>

        <div className='ml-[100]'>
          <p className='mt-[50] mb-[50] text-[#151875] font-bold'>Mauris at orci non vulputate diam tincidunt nec.</p>
          <div className='mt-[50] mb-[30] text-gray-300'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
          </div>
          <p className='text-gray-300 mt-[50] mb-[50]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.

             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat

                   toamk risusu”</p>
        </div>
        <div>

        </div>
    </div>
    <div className='flex ml-[100] gap-[50]'>
    <Image  src={"/blogp2.png"} alt="" width={417} height={245} ></Image>
    <Image  src={"/blogp3.png"} alt="" width={417} height={245} ></Image>
    </div>
    <div className='mt-[50] ml-[100]'>
      <p className='text-gray-300 mb-10' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat</p>
    </div>
    <div className='ml-[100] flex gap-10'>

    <Image  src={"/blogp4.png"} alt="" width={209} height={319} ></Image>
    <div className='mt-[50] '>
    <p className='mt-5'>Quam sed</p>
    <p className='mt-5 '>$32.00<span className='text-pink-400  line-through'> $56.00</span></p>
    <p className='flex text-yellow-400 mt-5'><FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar className='text-gray-400' /></p>
    </div>
    
    <Image  src={"/blogp5.png"} alt="" width={209} height={319} ></Image>
    <div className='mt-[50] '>
    <p className='mt-5'>Quam sed</p>
    <p className='mt-5'>$32.00<span className='text-pink-400 line-through'>$56.00</span></p>
    <p className='flex text-yellow-400 mt-5'><FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar className='text-gray-400' /></p>
    </div>
    <Image  src={"/blogp6.png"} alt="" width={209} height={319} ></Image>
    <div className='mt-[50] '>
    <p className='mt-5'>Quam sed</p>
    <p className='mt-5'>$32.00<span className='text-pink-400 line-through'>$56.00</span></p>
    <p className='flex text-yellow-400 mt-5'><FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar className='text-gray-400' /></p>
    </div>
    <Image  src={"/blogp7.png"} alt="" width={209} height={319} ></Image>
    <div className='mt-[50] '>
    <p className='mt-5'>Quam sed</p>
    <p className='mt-5'>$32.00<span className='text-pink-400 line-through'>$56.00</span></p>
    <p className='flex text-yellow-400 mt-5'><FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar className='text-gray-400' /></p>
    </div>
    {/*right* */}
    </div>
    <div className=' ml-[100] text-gray-300 mt-[50] mb-[50]'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante. </p>
      <div className='text-gray-300 mt-[50] mb-[50]'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante. </p>
    </div>
    </div>
    <div className='flex justify-center mb-[50]'>
    <p className='flex gap-2 mt-5 text-center '> <FaFacebookSquare className='text-blue-500'/>,<FaInstagramSquare className='text-pink-400'/><FaTwitter className='text-blue-600'/> ,</p>
    </div>
    <div className=' w-[766] h-[137] ml-[375]'>
    <Image  src={"/blogp8.png"} alt="" width={103} height={106} ></Image>
    <p className='text-[#151875]'>Sapien ac</p>
    <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
    </div>
    <div className=' w-[766] h-[137] ml-[375] mt-[50] mb-[50]'>
     <Image  src={"/blogp9.png"} alt="" width={103} height={106} ></Image>
     <p className='text-[#151875] font-bold'>Augue conva</p>
     <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
     </div>
     <div className=' ml-[370] mb-[50]'>
     <input  type="text" placeholder="Write your name"className="w-341 h-42 mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
     <input type="text"placeholder="Write your Email"className="w-341 h-42 mb-4 px-4 py-2 border border-blue-500 rounded-md" required /> <br />
     <textarea className='border border-blue-500' placeholder="Write your Message" rows={5} required></textarea>
     <p>Save my name, email, and website in this browser for the next time I comment.</p>
     <button className='bg-pink-400 w-69 h-50' type="submit">Send Message</button>
     </div>
    </div>

  )
}

