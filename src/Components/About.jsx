import React from 'react'
import cover from './cover/cover.png'
import built from './cover/built.jpg'
import fix from './cover/fix.jpg'
import {CgHomeAlt} from 'react-icons/cg'
import {BsFillBagFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {LuKey} from 'react-icons/lu'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <img className='w-[100%] ' src={cover} alt="" />
      <div className='flex justify-center flex-col  md:flex-row bg-gray-100 items-center gap-6 md:gap-32 mt-16'>
      <img className='w-[30%] rounded-lg' src={built} alt="" />
      <div>
      <h1 className='text-[30px] text-center px-16 '>
        Efficiency. Transparency.
Control.
        </h1>
        <p className='text-gray-500 text-center mt-6 px-16'>
        Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Hously is Real Estate Redefined.
        </p>
      </div>
      </div>
      <div className='flex  mt-16 items-center  flex-col p-3'>
          <h1 className=' text-[30px]'>How It Works</h1>
          <p className='text-gray-500 text-[16px]'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
         <div className='flex mt-20 gap-20  flex-col md:flex-row  justify-between px-32'>
         <div className='text-center flex flex-col gap-12   items-center '>
            <CgHomeAlt className='text-7xl text-green-700 rounded-full bg-gray-200 p-6 '/>
            <h1 className=' text-[30px]'>Evaluate Property</h1>
            <p className='text-gray-500 text-[16px]'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
          <div className='text-center  flex flex-col gap-12   items-center '>
          <BsFillBagFill className='text-7xl text-green-700 rounded-full bg-gray-200 p-6 '/>
            <h1 className=' text-[30px]'>Meeting with Agent</h1>
            <p className='text-gray-500 text-[16px]'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
          <div className='text-center flex flex-col gap-12  items-center'>
          <LuKey className='text-7xl text-green-700 rounded-full bg-gray-200 p-6 '/>
          <h1 className=' text-[30px]'>Close the Deal</h1>
            <p className='text-gray-500 text-[16px]'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
        </div> 
        <div>
        <img src={fix} className='md:w-[100%] w-[0px] cover mt-16' alt="" srcset="" />
        <div className='flex flex-col px-32  md:mt-[-250px] bg-transparent md:flex-row gap-6 md:gap-24 justify-center'>
           
            <div>
            <h1 className='text-[35px] text-center md:text-white'>1,548+</h1>
            <p className='md:text-white text-center'>Properties Sell</p>  
            </div>
            <div>
            <h1 className='text-[35px] text-center md:text-white'>25+</h1>
            <p className='md:text-white  text-center'>Award Gained</p>  
            </div>
            <div>
            <h1 className='text-[35px] text-center md:text-white'>9+</h1>
            <p className='md:text-white mt-2  text-center'>Years Experience</p>  
            </div>
        </div>
        </div>
        <div className='flex mt-6 md:mt-52 items-center  flex-col p-3'>
          <h1 className=' text-[30px]'>Meet The Agent Team</h1>
          <p className='text-gray-500 mt-2  text-[16px]'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
          <div className='flex  mt-6 items-center  flex-col p-3'>
          <h1 className=' text-[30px]'>What Our Client Say ?</h1>
          <p className='text-gray-500 mt-2  text-[16px]'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
          <div className='flex  mt-6 items-center  flex-col p-3'>
          <h1 className=' text-[30px]'>Have Question ? Get in touch!</h1>
          <p className='text-gray-500 mt-2 text-[16px]'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          <Link to={'/Contact'}>
          <button className='btn mt-16 rounded-sm text-xl hover:bg-green-800 bg-green-700 text-white px-4 py-2'>Contact us</button>
          </Link>
          </div>
    </div>
  )
}

export default About
