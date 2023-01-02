import React from 'react'
import Logout from '../logout/Logout';
const headerIcon = require('../../assets/site_icon.png');
const Header = () => {
  return (
    <div className='mt-0 h-32 w-screen'>
      <div className='flex flex-row'>
        <img src={headerIcon} alt="image" className='h-24 w-24' />
        <h1 className='ml-1 px-1 py-4 bg-brown-700 text-yellow-500 text-6xl w-56'>GenxIoT</h1>
        <div className='flex flex-row bg-gray-800 w-screen mx-0' >
          <h3 className='text-blue-600 text-3xl py-6 px-4 text-semibold drop-shadow-lg' >Customer : Name</h3>
          <h3 className='text-red-500 text-3xl py-7 px-16 text-semibold drop-shadow-2xl' >Alarms : 12</h3>
          <h3 className='text-red-500 text-3xl py-7 px-16 text-semibold drop-shadow-2xl' >Unhealthy Devices : 5</h3>
          <h3 className='text-blue-500 text-2xl py-7 px-16 text-semibold drop-shadow-2xl' >Username</h3>
          <div className=' px-10 py-7 bg-gray-800'>
            <Logout />
            </div>
        </div>
        
      </div>
      <div className='px-12  bg-gray-900 text-white text-bold w-1/5 text-lg'>
        Connecting Devices...
      </div>
    </div>
  )
}

export default Header