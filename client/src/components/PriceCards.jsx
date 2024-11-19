import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { toast } from 'react-toastify'
import axios from 'axios'

function PriceCards() {
  
  const { backendUrl, loadCreditsData } = useContext(AppContext)
  const navigate = useNavigate()
  const { getToken } = useAuth()

  const initPay = async (order) => {
    const options = {
      key : import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Payment for credits",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        const token = await getToken()
        try {
          const { data } = await axios.post(backendUrl + "/api/user/verify-razor", response, {headers: {token}})
          if(data.success){
            loadCreditsData()
            toast.success("Payment successful and Credits added")
            navigate("/")
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken()

      const { data } = await axios.post(backendUrl + "/api/user/pay-razor", {planId}, {headers: {token}})
      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

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
            <button onClick={() => paymentRazorpay(item.id)} className=' w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
          </div>
        ))}
      </div>
  )
}

export default PriceCards