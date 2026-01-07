import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-hot-toast'
import {motion} from 'motion/react'

const Banner = () => {
  const { isOwner, user, token, axios, navigate, fetchUser } = useAppContext()

  const handleListCar = async () => {
    if (!token) {
      toast.error('Please login to continue')
      return
    }

    if (isOwner) {
      navigate('/owner/add-car')
      return
    }

    try {
      const { data } = await axios.post('/api/owner/change-role')
      if (data.success) {
        toast.success(data.message)
        await fetchUser() 
        navigate('/dashboard/add-car')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2
      }}
      viewport={{ once: true, amount: 0.3 }}
      className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            duration: 0.6,
            delay: 0.2
        }}
        viewport={{ once: true, amount: 0.3 }}
        className='text-white'>
        <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
        <p className='mt-2'>Monetize your vehicle effortlessly by listing it on CarRental.</p>
        <p className='max-w-130'>We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.</p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
              duration: 0.6,
              delay: 0.01
          }}
          onClick={handleListCar}
          className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'
        >
          List your car
        </motion.button>
      </motion.div>

      <motion.img 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{
          type: "spring",   
          stiffness: 80,   
          damping: 8,      
          duration: 0.8,
          delay: 0.2
        }}
        viewport={{ once: true, amount: 0.3 }}
        src={assets.banner_car_image} alt="car" className='max-h-45 mt-10' />
    </motion.div>
  )
}

export default Banner
