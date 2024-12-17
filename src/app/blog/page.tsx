import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <div className='w-full h-[266] bg-[#F6F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200px]'>Blog</h4>
        <a className='ml-[200px]'>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.Blog</a>
        </div>
        
             <Link href={"/blog/singleblog"}>
             <div className='ml-[371]  mt-[100]'>
           <Image  src={"/blogp1.png"} alt="" width={870} height={453} ></Image>
        </div>
             </Link>
          

        <div className='ml-[371]'>
          <p className='mt-[50] mb-[50] text-[#151875] font-bold'>Mauris at orci non vulputate diam tincidunt nec.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncusLorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. </p>
          <p className=' mt-[40] text-[#151875] font-bold'>Read more</p>
          </div>
          <div className='ml-[371]  mt-[100]'>
           <Image  src={"/blogpagei.png"} alt="" width={870} height={453} ></Image>
        </div>

        <div className='ml-[371]'>
          <p className='mt-[50] mb-[50] text-[#151875] font-bold'>Sit nam congue feugiat nisl, mauris amet nisi. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncusLorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. </p>
          <p className=' mt-[40] text-[#151875] font-bold'>Read more</p>
          </div>
          <div className='ml-[371]  mt-[100]'>
           <Image  src={"/blogpagei2.png"} alt="" width={870} height={453} ></Image>
        </div>

        <div className='ml-[371]'>
          <p className='mt-[50] mb-[50] text-[#151875] font-bold'>Aenean vitae in aliquam ultrices lectus. Etiam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncusLorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. </p>
          <p className=' mt-[40] text-[#151875] font-bold'>Read more</p>
          </div>

    </div>
  )
}
