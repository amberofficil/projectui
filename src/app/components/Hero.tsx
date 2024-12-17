import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='w-full h-[765] bg-[#F2F0FF]'>
      <div className='flex'>
        <Image src={"/heroleftimg.png"} width={387} height={ 387} alt=''></Image>
        <div className='mt-[200]'>
        <p className='text-pink-400 mt-'>Best Furniture For Your Castle....</p>
        <h1 className='text-3xl font-bold text-[#000000] mt-5'>New Furniture Collection
        Trends in 2020</h1>
        <p className='mt-5 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.</p>
        <button className='mt-5 text-white font-bold bg-pink-500 w-[163] h-[50] rounded-full text-2xl'>send</button>
      </div>
      <div className='flex'>
      <Image className='mt-[50]' src={"/heroimag.png"} width={629} height={ 629} alt=''></Image>
      </div>
      </div>
      
      
    </div>
  )
}
