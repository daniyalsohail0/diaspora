import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center m-4 p-4 h-screen'>
        <p className='text-white m-2 p-2'>Welcome to Diaspora</p>
        <h1 className='text-white text-5xl text-center font-extrabold m-2 p-2 md:w-1/3'>The Future Of Crypto Is Here!</h1>
        <p className='text-white text-lg text-center md:w-1/3 m-2 p-2'>Diaspora is backed by iVOBS which is the new cutting-edge state-of-the-art marketplace.</p>
        <button className='flex font-semibold text-black tracking-wide bg-gradient-to-l from-yellow-300 to-yellow-600 hover:bg-gradient-to-r hover:shadow-md hover:shadow-blue-800 duration-100 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
            Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default HeroSection