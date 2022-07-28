import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Features = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='md:w-1/2 flex flex-col justify-center items-center'>
        <h1 className="text-yellow-400 md:text-5xl text-2xl text-center font-extrabold m-2 p-2 italic uppercase">
          more than just a coin
        </h1>
        <h1 className='text-white md:text-6xl text-3xl text-center font-bold md:py-16 p-4'>
          Subscribe today and stay up-to-date to all important announcements
        </h1>
        <p className='text-white text-center md:p-8 p-4 md:w-2/3'>Deliver the same engaging experience and networking opportunities whether your audience attends virtually or in-person. Contact our team to set up a demo of our platform.</p>
        <button className='flex font-semibold text-black gap-1 tracking-wide bg-gradient-to-l from-yellow-300 to-yellow-600 hover:bg-gradient-to-r hover:shadow-md hover:shadow-blue-800 duration-100 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
            <span>Subscribe</span>
            <AiOutlineArrowRight className='text-2xl'/>
        </button>
      </div>
    </div>
  )
}

export default Features