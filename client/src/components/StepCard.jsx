import React from 'react'
import { assets } from '../assets/assets'

function StepCard() {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>

      <div className="flex items-start justify-center flex-wrap gap-4 mt-16 xl:mt-24">
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-sm hover:scale-105 transition-all duration-500">
          <img src={assets.upload_icon} alt=""  className=' max-w-9'/>
          <div>
            <p className=' text-xl font-medium'>Upload image</p>
            <p className=' text-sm text-neutral-500 mt-1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Reiciendis, sunt!
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-sm hover:scale-105 transition-all duration-500">
          <img src={assets.remove_bg_icon} alt=""  className=' max-w-9'/>
          <div>
            <p className=' text-xl font-medium'>Remove bacckground</p>
            <p className=' text-sm text-neutral-500 mt-1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Reiciendis, sunt!
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-sm hover:scale-105 transition-all duration-500">
          <img src={assets.download_icon} alt=""  className=' max-w-9'/>
          <div>
            <p className=' text-xl font-medium'>Download image</p>
            <p className=' text-sm text-neutral-500 mt-1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Reiciendis, sunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepCard