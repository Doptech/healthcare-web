import React, { useState } from 'react'
import dashboard from '../assets/dashboard.png'
import patients from '../assets/patient.png'
import calendar from '../assets/calendar.png'
import { useNavigate } from 'react-router'
import leftArrow from '../assets/leftArrow.png'
import logoutPic from '../assets/logout.png'
import AppointmentTable from './AppointmentTable'
const Alert = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            {/* <DashNavbar/> */}
            <div className="flex">
                <div
                    className={` ${open ? "w-72" : "w-20 "
                        } bg-[#2630b3] h-screen p-5  pt-8 relative duration-300`}
                >
                    <img
                        src={leftArrow}
                        className={`absolute cursor-pointer -right-3 top-9 w-5 bg-gray-100 p-1 border-2 rounded-full`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <img
                            src={dashboard}
                            className={`cursor-pointer duration-500 }`}
                        />
                        <h1
                            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Doctrin
                        </h1>
                    </div>
                    <ul className="pt-6">
                        <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`} onClick={() => navigate('/dashboard ')}>
                            <img src={dashboard} className='w-7' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dashboard
                            </span>
                        </li>
                        <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`} onClick={() => navigate('/dashboard/list')}>
                            <img src={patients} className='w-7' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                PatientList
                            </span>
                        </li>
                        <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`} onClick={() => navigate('/dashboard/alert')}>
                            <img src={calendar} className='w-7' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Alert
                            </span>
                        </li>
                    </ul>
                    {/* logout */}
                    <div className={`flex gap-4 rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`}>
                        <img src={logoutPic} alt="" className='w-7' />
                        <h1 className={`${!open && "hidden"} origin-left duration-200`}>Log out</h1>
                    </div>
                    {/* <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={dashboard} className='w-7' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul> */}
                </div>

                
                <div className="h-screen flex-1 p-7">
                    <h1 className="text-2xl font-semibold ">Transactions</h1>
                    <div className={'flex items-center justify-center border p-2 lg:p-4 rounded-lg ${open ? "w-72" : "lg:w-96"} mx-auto'}>
                        <AppointmentTable open={open}/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Alert;