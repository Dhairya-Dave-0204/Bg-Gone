import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* ================== LEFT SIDE CONTENT ====================== */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                Remove the <br className=' max-md:hidden'/> 
                <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background </span>
                from <br className=' max-md:hidden'/> images for free
            </h1>
            
            <p className=' my-6 text-gray-500 text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam quis delectus cum. 
                <br className=' max-sm:hidden'/> Perferendis nostrum libero aperiam eveniet nisi vitae.
            </p>

            <div>
                <input type="file" name="upload1" id="upload1" hidden/>
                <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto transition-all duration-600 hover:scale-105'>
                    <img src= {assets.upload_btn_icon} alt="" width={20} />
                    <p className=' text-sm text-white'>Upload your image</p>
                </label>
            </div>
        </div>
        
        {/* ================== RIGHT SIDE CONTENT ====================== */}
        <div className=' w-full max-w-md'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header