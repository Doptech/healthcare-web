import React, { useEffect, useState } from 'react'
import patientPic from '../assets/patientPic.jpg'
import ShowHide from '../assets/showPass.png'
import googlelogo from '../assets/google.svg'
import { Link, Navigate , useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword ,signInWithPopup ,signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig'
import {googleAuth} from '../firebaseConfig'
const UserSignin = () => {
  const [user , setUser] = useState({});
  const [showPass ,setShowpass] = useState(false);
  const navigate = useNavigate();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  
  const showPassword=()=>{
      setShowpass(!showPass)
    }
    
    useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
              console.log('CurrentUser hu:',currentUser);
              setUser(currentUser);
          })
  
          return ()=>{unsubscribe()}
    },[])
  const handleSignin = ()=>{
      signInWithEmailAndPassword(auth , email , password).then((response)=>{
          console.log('Response : ' , response)
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
  return(
    <>
        {
            !user ? (
                <Navigate  to={'/usersignup'}/>
            ):(
                <>
                    <h1>LOGGED IN</h1>
                    <button onClick={handleSignOut}>SIgnOUT</button>
                </>
            )
        }
    </>
  )

}

export default UserSignin


{/* <>
        <div className='flex flex-col-reverse lg:flex-row h-full'>
                <div className='w-full flex items-center justify-center h-[650px]'>
                    <div className='flex flex-col'>
                        <h1 className='text-black font_title_bold text-3xl mt-10'>Welcome to Doctrin</h1>
                        <p className='text-gray-300 my-4'>Enter your account to use Doctrin service</p>
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
                            <button className='border p-3 bg-[#232a83] rounded-lg text-white text-sm mt-2' onClick={handleSignin}>Sign in</button>
                            <span className='text-center mx-auto text-gray-600'>or</span>
                            <button className='flex items-center justify-center gap-2 border p-3 rounded-lg text-sm mt-2' onClick={handleGoogleSignUp}><img src={googlelogo} alt="" className='w-4' />Sign in with google</button>
                            <p className='mx-auto text-gray-600'>Didn't have an account? <span className='text-[#23295e] underline'><Link to={'/usersignup'}>Sign up</Link></span></p>
                        </div>
                    </div>
                </div>
                <div className='w-full border h-full md:h-[700px]'>
                    <img src={patientPic} alt="" className='object-cover w-full h-[300px] md:h-full' />
                </div>
        </div>
        </> */}