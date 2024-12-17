import React from 'react'

export default function page() {
  return (
    <div>
      <div className='w-full h-[266] bg-[#F2F5FF]'>
        <h4 className='text-2xl font-bold text-[#151875] ml-[200]'> 404 Not Found</h4>
        <a className='ml-[200] '>Home .</a>
        <a>Pages </a>
        <a className='text-pink-400'>.404 Not Found</a>
        </div>
        <div className=' w-full h-[450] ml-[375] mt-[200] text-center '>
            <h2 className='font-bold text-2xl text-[#151875]'>oops The page you requested was not found!</h2>
            <button className='mt-[50] text-white bg-pink-400 w-[165] h-[45] rounded-full'>Go to Home</button>
        </div>
        </div>
  )
}
