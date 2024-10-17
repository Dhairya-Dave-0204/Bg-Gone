import React from 'react'
import { assets } from '../assets/assets';
import { UploadBtn } from './component_index';

function Upload() {
  return (
    <div>
      <h1 className="text-center py-6 md:py-16 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        See the magic. Try now!
      </h1>

      <div className=' text-center mb-24'>
        <UploadBtn />
      </div>
      
    </div>
  );
}

export default Upload