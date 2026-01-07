
import Title from './Title.jsx'
import { assets} from '../assets/assets'
import CarCard from './CarCard.jsx'
import {useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContext.jsx'
import {motion} from 'motion/react'

const FeaturedSection = () => {

    const navigate = useNavigate();
    const {cars} = useAppContext();
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>

        <div>
            <Title title='Featured Vehicles' subTitle='Explore our selection of premium vehicles available for your next adventure.'/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
            {
            cars.slice(0,6).map((car, index) => (
                <motion.div 
                    key={car._id} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <CarCard car={car} />
                </motion.div>
            ))
            }
        </div>

        <motion.button 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay:  0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        onClick={()=>{
            navigate('/cars'); 
            scrollTo(0,0); 
        }}
        className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50
                            rounded-md mt-16 cursor-pointer'>
            Explore all cars <img src={assets.arrow_icon} alt="arrow" />
        </motion.button>

    </div>
  )
}

export default FeaturedSection
