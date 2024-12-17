import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
    <div className='w-[1920px] h-[266px] bg-[#F6F5FF]'>
      <h4 className='text-2xl font-bold text-[#151875] ml-[200px]'>My Account</h4>
      <a className='ml-[200px]'>Home .</a>
      <a>Pages </a>
      <a className='text-pink-400'>.My Account</a>
      </div>
  <div className="contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
     <p className='text-gray-300'>Please login using account detail below</p>
      <form>
          <input type="email"placeholder="Email Address"className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
          <input type="text"placeholder="Password"className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
          <p className='mb-5 text-gray-300'>Forgot your password?</p>
          <Link href={"/login/signup"}>
          <button type="submit"className="w-full bg-pink-500 text-white py-2 rounded-md">Signup</button>
          </Link>
          <p className='text-gray-300 mt-5'>Don't have an Account?Create account </p>
      </form>
  </div>
  
  </div>
);
}

