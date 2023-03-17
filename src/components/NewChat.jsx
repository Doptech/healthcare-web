import React from 'react'
import {addDoc , collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import { useHistory, useNavigate } from 'react-router-dom';
const NewChat = () => {
    const navigate = useNavigate();
    // idhr fetch the firebase user data PLEASE
    const createNewChat = async()=>{
        // in place of test123gmail , fetch the Firebase authenticated user EMAIL without QUOTES.
        // const doc = await addDoc(collection(db,'users',session,'test123@gmail.com','chats'),{
        //     messages:[],
        //     // inplace of userId , fetch the Firebase authenticated user EMAIL
        //     userId:'test123@gmail.com',
        //     createdAt: serverTimestamp()

            
        // });
        const doc = await addDoc(collection(db,'users','test123@gmail.com','chats'),{
            messages:[],
            // inplace of userId , fetch the Firebase authenticated user EMAIL
            userId:'test123@gmail.com',
            createdAt: serverTimestamp()

            
        });
        // history.push(`/chat/${doc.id}`);
        navigate(`/chat/${doc.id}`);
    }
  return (
    <>
        <div onClick={createNewChat} className='border-gray-700 border chatRow rounded-lg px-5 py-3 text-sm flex items-center justify-center space-x-2 bg-[#3FCA5D] hover:bg-[#3FCA5D]/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out'>
            <p className='h-4 w-4'>+</p>
            <p>New Chat</p>
        </div>
    </>
  )
} 

export default NewChat