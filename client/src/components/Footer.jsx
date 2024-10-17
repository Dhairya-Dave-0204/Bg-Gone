import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img src= {assets.logo} alt="LOGO" width={150} className='cursor-pointer' />
        <p className=' flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden cursor-pointer'>
            Copyright @Bg Gone | All rights reserved.
        </p>
        <div className='flex gap-1'>
            <img src= {assets.facebook_icon} alt="" width={40}/>
            <img src= {assets.twitter_icon} alt="" width={40}/>
            <img src= {assets.google_plus_icon} alt="" width={40}/>
        </div>
    </div>
  )
}

export default Footer