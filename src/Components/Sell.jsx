import React, { useState } from 'react'
import cover from './cover/cover.png'
// import logo from './cover/logo.png'
import {CgHomeAlt} from 'react-icons/cg'
import {BsFillHouseFill} from 'react-icons/bs'
import {BsFillBagFill} from 'react-icons/bs'
import {LuKey} from 'react-icons/lu'
import { useForm } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'

const Sell = ({properties}) => {
  const [val, setVal] = useState(1)
  
  const onSubmitHandler = e => {
    e.preventDefault()
  }
  const totalVal = val ? val : 0
  const brokerageFee = totalVal * 0.05
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    
          <div >
          <img className='w-[100%] ' src={cover} alt="" />
          <div className='bg-white '>
          <div className='flex  mt-16 items-center flex-col p-3'>
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
        <div className='flex mt-16 items-center flex-col p-3'>
          <h1 className=' text-[30px]'>Brokerage Calculator</h1>
          <p className='text-gray-500 text-[16px]'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
        </div>
        <div className='flex flex-col mt-16 items-center p-3'>
        <div className='flex justify-center gap-4' >
        <p className='text-xl'>Min:$10000</p>
        <p className='text-xl'>Min:$200000</p>
        </div>
        <input className='w-[30%]'
          type="range"
          min={1000}
          max={200000}
          step={1}
          value={val}
          onChange={event => {
            setVal(event.target.valueAsNumber)
          }}
        />
        </div>
        <div className='flex justify-center gap-4'>
        <p >Total Value : ${totalVal}</p>
        <p>Brokerage Fee ($) : ${brokerageFee.toFixed(2)}</p>
        </div>
        <div className='flex mt-16 items-center flex-col p-3'>
          <h1 className=' text-[30px]'>Have Question ? Get in touch!</h1>
          <p className='text-gray-500 text-[16px]'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          <Link to={'/Contact'}>
          <button className='btn mt-16 rounded-sm text-xl bg-green-700 text-white px-4 py-2'>Contact us</button>
          </Link>
          </div>
          
          </div>
       
    
  )
}

export default Sell
