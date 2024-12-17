import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
        <div>
      <div className='w-full h-[266] bg-[#F2F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200]'>About Us</h4>
        <a className='ml-[200] '>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.About us</a>
        </div>
        <div className="relative py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      { /* Left img  */ }
      <div className='ml-[450]'>
        <Link href={"/pages/notfound"}>
      <div className=''>
          <Image
            src={"/aboutimg.png"}
            alt="aboutimg"
            width={570}
            height={409}
          
          />
        </div>
        </Link>
      </div>
        
      {/*Column: Content (Title, Description, Button) */}
      <div className='w-full h-[960]'>
      <div className=' w-[550] ml-5'>
        <h1 className="text-3xl font-bold text-[#151875] mt-[350]">
        Know About Our Ecomerce
        Business, History
        </h1>
        <p className="text-gray-400 mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >
          <button>Contact us</button>
          </Link>
          </div>
          </div>
            </div>
            <div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Features</h1>
    <div>
           <div className='ml-[450] flex mt-[50] mb-[50]'>
            <div className='w-[270] h-[320]'>
            <Image className=" mt-[50] ml-10" src={"/free-delivery 1.png"} width={60} height={40} alt=''></Image>
            <p className='font-bold text-[#151875] mt-3 ml-4'>Free Delivery</p>
            <p className='text-gray-300 mt-4 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[270] h-[320] ml-[150]'>
            <Image className=" mt-[50] ml-10" src={"/cashback 1.png"} width={60} height={42} alt=''></Image>
            <p className='font-bold text-[#151875] mt-3 ml-4'>100% Cash Back</p>
            <p className='text-gray-300 mt-4 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[270] h-[320] ml-[150]'>
            <Image className=" mt-[50] ml-10" src={"/premium-quality 1.png"} width={60} height={42} alt=''></Image>
            <p className='font-bold text-[#151875] mt-3 ml-4'>Quality Product</p>
            <p className='text-gray-300 mt-4 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[270] h-[320] ml-[150]'>
            <Image className=" mt-[50] ml-10" src={"/24-hours-support 1.png"} width={60} height={42} alt=''></Image>
            <p className='font-bold text-[#151875] mt-3 ml-4'>24/7 Support</p>
            <p className='text-gray-300 mt-4 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
         {/* our client*/}
         <div className=' w-[1920] h-[503] mb-[50]'>
          <div>
            <h1 className= " mb-10 font-bold text-3xl text-center bg-white">our client  say</h1>
            <div className='w-[690] h-[400] ml-[616]'>
            <img src="aboutimag1.png"
              alt="bus"
              className="ml-10 mt-5"
              />
              <div className=''>
                <p className='text-center text-[#151875]'>Selina Gomez</p>
                <p className='text-center text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam pares</p>

              </div>
              <img src="aboutimg2.png"
              alt="bus"
              className="ml-10 mt-5"
              />
              <div className=''>
                <p className='text-center text-[#151875]'>Sellina</p>
                <p className='text-center text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit quam praes.</p>

              </div>
              <img src="aboutimg3.png"
              alt="bus"
              className="ml-10 mt-7"
              />
              <div>
                <p className='text-center text-[#151875]'>Robert</p>
                <p className='text-center text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit quam praes.</p>

              </div>
          </div>
           </div>
           </div>
           </div>
           </div>
           </div>

          
         )
         }
