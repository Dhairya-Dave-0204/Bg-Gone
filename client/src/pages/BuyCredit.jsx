import React from 'react'
import { PriceCards } from '../components/component_index'


function BuyCredit() {
  return (
    <div className=' text-center pt-14 mb-10 min-h-[80vh]'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the plan that's right for you
      </h1>
      
      <PriceCards />
    </div>
  )
}

export default BuyCredit