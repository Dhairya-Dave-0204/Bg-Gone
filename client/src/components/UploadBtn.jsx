import React, { useContext } from 'react'
import { assets } from '../assets/assets'; 
import { AppContext } from '../context/AppContext';

function UploadBtn() {

  const { removeBg } = useContext(AppContext)

  return (
    <div>
      <input type="file" name="upload1" accept='image/*' id="upload1" hidden onChange={e => removeBg(e.target.files[0])} />
      <label
        htmlFor="upload1"
        className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto transition-all duration-700 hover:scale-105"
      >
        <img src={assets.upload_btn_icon} alt="" width={20} />
        <p className=" text-sm text-white">Upload your image</p>
      </label>
    </div>
  );
}

export default UploadBtn