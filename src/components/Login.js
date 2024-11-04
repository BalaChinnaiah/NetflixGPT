import React, { useState } from 'react'
import Header from './Header'
import bg from "../utils/Nbg.jpg"

const Login = () => {

  const [isSignIn, setISSignIn]  = useState(true);

  const toggleSignIn = () => {
    setISSignIn(!isSignIn);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={bg} alt='bg' />
        </div>

        <form className='absolute w-3/12 bg-black rounded-lg flex flex-col gap-3 text-white my-40 p-10 mx-auto left-0 right-0 bg-opacity-75'>
          <h2 className='text-4xl m-2 '> {isSignIn ? "Sign In" : "Sign Up"} </h2>
          { !isSignIn && <input type='text' placeholder='Enter Your Name' className='p-2 m-2 rounded-md '/>}
          <input type='text' placeholder='Enter Your Email' className='p-2 m-2 rounded-md '/>
          <input type='password' placeholder='Enter Your Password' className='p-2 m-2 rounded-md '/>
          <button className='p-2 m-2 bg-red-700 text-white rounded-lg'> {isSignIn ? "Sign In" : "Sign Up"} </button>
          <p className='p-2 m-2 cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Netflix? Sign Up Now." : "Already a User? Sign In. "} </p>
        </form>
    </div>
  )
}

export default Login