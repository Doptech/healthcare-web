import React, { useState } from 'react'
import dashboard from '../assets/dashboard.png'
import patients from '../assets/patient.png'
import calendar from '../assets/calendar.png'
import { useNavigate } from 'react-router'
import leftArrow from '../assets/leftArrow.png'
import logoutPic from '../assets/logout.png'
import QRcodeGEN from '../components/QRcodeGEN'
const AddNewPatient = () => {
  const [text , setText] = useState('')
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Patient List", src: "Chat" },
    { title: "Reports", src: "User" },
    { title: "Log out", src: "User",gap: true },
  ];

    return (
        <>
            {/* <DashNavbar/> */}
            <div className="flex">
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-[#2630b3] h-screen p-5  pt-8 relative duration-300`}
          >
            <img
              src={leftArrow}
              className={`absolute cursor-pointer bg-gray-100 p-1 -right-3 top-9 w-5 border-dark-purple
               border-2 rounded-full  `}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={dashboard}
                className={`cursor-pointer duration-500 
                }`}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Doctrin
              </h1>
            </div>
            <ul className="pt-6">
                <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`} onClick={()=>navigate('/dashboard')}>
                  <img src={dashboard} className='w-7' />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    Dashboard
                  </span>
                </li>
                <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`} onClick={()=>navigate('/dashboard/list')}>
                  <img src={patients} className='w-7' />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    PatientList
                  </span>
                </li>
                <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#5d5fe2] text-gray-300 text-sm items-center gap-x-4 mt-2`} onClick={()=>navigate('/dashboard/transaction')}>
                  <img src={calendar} className='w-7' />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    Transactions
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
          <div className="h-screen flex flex-col flex-1 lg:p-7 border_bottom w-full border p-4 md:p-2  md:justify-center md:items-center">
            <h1 className="text-3xl font_title_bold mx-auto w-full">Add New Patient</h1>
            <div className='border h-[400px] md:h-full w-full rounded-lg my-4 flex flex-col items-center justify-center'>
                <p className='p-2 md:p-0 text-center mx-auto'>You can add a new patient by letting user scan a QR Code on their phone</p>
                <input type="text" disabled placeholder='Add patient code here' className='p-4 outline-none border rounded-lg my-7 w-[300px] md:w-[400px] lg:w-[500px]' onChange={(e)=>setText(e.target.value)}/>
                {/* QR CODE GENERATOR, */}
                <QRcodeGEN  value={text}/>
            </div>
          </div>
        </div>
        </>
  )
}

export default AddNewPatient