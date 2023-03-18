import React, { useState } from 'react'
import doctorSignup from '../assets/doctor-signup.jpg'
import ShowHide from '../assets/showPass.png'
import googlelogo from '../assets/google.svg'
import { Link, Navigate , useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, signInWithPopup ,signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig'
import {googleAuth} from '../firebaseConfig'
import Test from './Test'

const   UserSignup = () => {
    const navigate = useNavigate();
    const [uid , setUid] = useState(null)
    const [showPass ,setShowpass] = useState(false);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const showPassword=()=>{
        setShowpass(!showPass)
    }

    const handleSignUp = ()=>{
        createUserWithEmailAndPassword(auth , email , password).then((response)=>{
            let data = response.user.uid;
            console.log('Response : ' , response.user.uid)
            setUid(data)
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log("ERROR ! ",err)
        })
    }
    const handleGoogleSignUp = ()=>{
        signInWithPopup(auth,googleAuth).then((response)=>{
            console.log('Google Response: ', response)
        })
        .catch((err)=>{
            console.log("ERROR ! ",err)
        })
    }
    
    const handleSignOut =()=>{
        signOut(auth);  
    }
    console.log('Uid number:',uid)
    return (
    <>
        <div className='flex flex-col-reverse lg:flex-row h-full'>
            <div className='w-full flex items-center justify-center h-[650px] md:h-[700px]'>
                <div className='flex flex-col p-4'>
                    <h1 className='text-black font_title_bold text-3xl mt-10'>Sign up your Account.</h1>
                    <p className='text-gray-300 my-4'>Let's enter your data to continue use doctrin service</p>
                    <div className='flex flex-col gap-3 font_description w-full'>
                        <label>Fullname</label>
                        <input type="text" className='p-3 border rounded-lg outline-none' placeholder='Enter your Fullname here'/>
                        <label>Email</label>
                        <input type="text" className='p-3 border rounded-lg outline-none' placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)}/>
                        <label>Password</label>
                        <div className='flex items-center w-full relative'>
                            <input type={showPass? 'text' : 'password'} className=' p-3 border rounded-lg outline-none w-full' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
                            <img src={ShowHide} alt="" className='w-5 h-5 absolute right-3' onClick={showPassword}/>
                        </div>
                        <button className='border p-3 bg-[#232a83] rounded-lg text-white text-sm mt-2' onClick={handleSignUp}>Sign up</button>
                        <span className='text-center mx-auto text-gray-600'>or</span>
                        <button className='flex items-center justify-center gap-2 border p-3 rounded-lg text-sm mt-2' onClick={handleGoogleSignUp}><img src={googlelogo} alt="" className='w-4' />Sign up with google</button>
                        <p className='mx-auto text-gray-600'>Already have an account? <span className='text-[#23295e] underline'><Link to={'/usersignin'}>Sign in</Link></span></p>
                    </div>
                </div>
            </div>
            <div className='w-full border h-full md:h-[700px]'>
                <img src={doctorSignup} alt="" className='object-cover w-full h-[300px] md:h-full' />
            </div>
        </div>
    </>
  )
}

export default UserSignup