import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {MdLocationPin} from 'react-icons/md'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import user from './cover/user.svg'
import { Button, Input, TextInput, Textarea } from '@mantine/core'

const Contact = () => {
  return (
    <div>
        <iframe
                  className="w-full h-[500px] border-none leading-[0] border-0 mt-6"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                ></iframe>
                <div className='flex md:flex-row flex-col justify-center md:gap-24 gap-12 items-center'>
        <img className='w-[40%]  ' src={user} alt="" srcset="" />
        <div className='border-1 shadow-lg px-16 py-6 md:px-16 md:py-6'>
        <h1 className='text-[30px]'>Get in touch !</h1>
        <div className='flex flex-col md:flex-row gap-4 mt-6'>
        <div>
        <p className='text-xl '>Your Name</p>
        <TextInput className='mt-4' placeholder='Your name'/>
        </div>
        <div>
        <p className='text-xl '>Your Name</p>
        <TextInput className='mt-4' placeholder='Your email'/>
        </div>
        </div>
        <div className='mt-6'>
        <p className='text-xl '>Your Questions</p>
        <TextInput className='mt-4' placeholder='Your question'/>
        </div>
        <div className='mt-6'>
        <p className='text-xl '>Your Comment</p>
        <Textarea className='mt-4' placeholder='Message'/>
        </div>
        <div className='mt-6'>
        <Button className='px-3 py-2 bg-green-700 hover:bg-green-800'>Send Message</Button>
        </div>
        </div>
        </div>
      <div className='flex mt-20 gap-20  flex-col md:flex-row  justify-between px-32'>
         
          <div className='text-center  flex flex-col gap-12   items-center '>
          <BsFillTelephoneFill className='text-7xl text-green-700 rounded-full bg-gray-200 p-6 '/>
            <h1 className=' text-[30px]'>Meeting with Agent</h1>
            <p className='text-gray-500 text-[16px]'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
          <div className='text-center flex flex-col gap-12  items-center'>
          <MdEmail className='text-7xl text-green-700 rounded-full bg-gray-200 p-6 '/>
          <h1 className=' text-[30px]'>Close the Deal</h1>
            <p className='text-gray-500 text-[16px]'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
          <div className='text-center flex flex-col gap-12   items-center '>
            <MdLocationPin className='text-7xl text-green-700 rounded-full bg-gray-200 p-6 '/>
            <h1 className=' text-[30px]'>Evaluate Property</h1>
            <p className='text-gray-500 text-[16px]'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
        </div> 
        
    </div>
  )
}

export default Contact
