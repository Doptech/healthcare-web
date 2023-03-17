import React from 'react'
import { Link } from 'react-router-dom'
import chatIcon from '../assets/chaticon.png'
import {BsChatLeft }from 'react-icons/bs'
import {BiTrash }from 'react-icons/bi'
import { useLocation } from "react-router-dom";
import { useHistory, useNavigate } from 'react-router-dom';
const ChatRow = ({id}) => {
    const navigate = useNavigate();
    function usePathname() {
        const location = useLocation();
        return location.pathname;
    }

    const pathname = usePathname();

  return (
    <>
        <Link to={`/chat/${id}`} className='text-white chatRow rounded-lg px-5 py-3 mt-2 text-sm flex items-center bg-[#252525] hover:bg-[#252525]/70 justify-center space-x-2 cursor-pointer transition-all duration-200 ease-out'>
            <BsChatLeft className=' '/>
            <p className=' flex-1 hidden md:inline-flex truncate'>New Chat</p>
            <BiTrash  className=' hover:text-red-700'/>
        </Link>
    </>
  )
}

export default ChatRow