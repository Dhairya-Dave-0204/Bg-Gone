import React from 'react'
import { assets, plans } from '../assets/assets'

function PriceCards() {
  return (
        <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div key={index} className=' bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-700'>
            <img src={assets.logo_icon} alt="" width={40}/>
            <p className=' mt-3 font-semibold'> {item.id} </p>
            <p className=' text-sm'> {item.desc} </p>
            <p className=' mt-6'>
              <span className=' text-3xl font-medium'>${item.price}</span>/{item.credits} credit
            </p>
            <button className=' w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
          </div>
        ))}
      </div>
  )
}

export default PriceCards