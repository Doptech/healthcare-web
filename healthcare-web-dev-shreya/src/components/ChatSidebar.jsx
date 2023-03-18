import React from 'react'
// import NewChat from './NewChat'
import {useCollection} from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import ChatRow from './ChatRow'
const ChatSidebar = () => {

    // fetch from firebase authenticated user(onAuthStateChanged vala)
    const [chats,loading,error] = useCollection(
        // session && (collection(db,'users',session.user.email,'chats'))
        collection(db,'users','test123@gmail.com','chats')
    )
    console.log(chats)
  return (
   <>
        <div className=' p-2 flex flex-col h-screen border border-[#c4c1c1]'>
            <div className='flex-1'>
                <div className=''>
                    {/* New Chat */}
                    {/* <NewChat/> */}
                    <div>
                        {/* ModelSelection */}
                    </div>

                    {/* map throigh ChatRows */}
                    {
                        chats ? (
                            chats.docs.map((chat)=>{
                                return <ChatRow key={chat.id} id={chat.id}/>
                            })
                        ):(
                            <h1>ERRORR</h1>
                        )
                    }
                </div>
            </div>
            <div className='fixed text-black bottom-0 left-6 flex items-center justify-center mx-auto'>
                <button className='mx-auto w-full px-4 py-2 mb-2 flex justify-center bg-black text-white rounded-md'>Log out</button>
            </div>
        </div>
   </>
  )
}

export default ChatSidebar