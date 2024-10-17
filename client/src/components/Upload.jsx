import React from 'react'
import { assets } from '../assets/assets';

function Upload() {
  return (
    <div>
      <h1 className="text-center py-6 md:py-16 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        See the magic. Try now!
      </h1>

      <div className=' text-center mb-24'>
        <input type="file" name="upload2" id="upload2" hidden />
        <label
          htmlFor="upload2"
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto transition-all duration-600 hover:scale-105"
        >
          <img src={assets.upload_btn_icon} alt="" width={20} />
          <p className=" text-sm text-white">Upload your image</p>
        </label>
      </div>
    </div>
  );
}

export default Upload