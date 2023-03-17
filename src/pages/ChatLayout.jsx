import React from 'react'
import Chats from '../pages/Chats'
import ChatSidebar from '../components/ChatSidebar'

const ChatLayout = () => {
  return (
    <>
        <div className='flex'>
            <Sidebar/>
            {/* ClientProvider - notification */}
            <div className='flex-1'>
                {/* <Chats/> */}
                {Children}
            </div>
        </div>
    </>
  )
}

export default ChatLayout