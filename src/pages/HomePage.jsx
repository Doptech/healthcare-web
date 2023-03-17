import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
const HomePage = () => {
  return (
    <>
        <Navbar/>
        <div className='flex w-full h-full bg-[#fffdfd] px-12 py-2 '>
            <div className='flex flex-col justify-center items-center w-full h-full mt-16 mx-auto text-center'>
                <h1 className='font_title_extrabold text-6xl'>Your Personal Health Assistant,<br/>Doctor's first opinion on your fingertips.</h1>
                <p className='font_description my-10'>A utility-first CSS framework packed with classes like flex, pt-4, text-center and<br/>rotate-90 that can be composed to build any design, directly in your markup.</p>
            </div>
            <div className='flex flex-col'> 
              <button>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default HomePage