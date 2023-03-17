    import React from 'react'
    import { useNavigate } from 'react-router-dom'
    const Navbar = () => {
        const navigate = useNavigate();
    return (
        <>
            <div className='flex justify-between items-center w-full border_bottom_color px-12 py-2'>
                <h1 className='font_title_extrabold text-2xl'>DOC<span className='font-normal'>trin</span></h1>
                <div className='flex'>
                    <ul className='flex gap-4'>
                        <li className='cursor-pointer px-4 py-2 font_description border text-[#0f0a1d] border-[#b0c3e6] rounded-lg' onClick={()=>navigate('/usersignup')}>User?</li>
                        <li className='cursor-pointer px-4 py-2 font_description border text-[#321325] border-[#b0c3e6] rounded-lg' onClick={()=>navigate('/docsignup')}>Doctor?</li>
                    </ul>
                </div>
            </div>
        </>
    )
    }

    export default Navbar