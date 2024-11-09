import React, { useRef, useState } from 'react'
import Header from './Header'
import bg from "../utils/Nbg.jpg"
import { validate } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Login = () => {

  const name = useRef(null);

  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isSignIn, setISSignIn]  = useState(true);

  const navigate = useNavigate();


  const toggleSignIn = () => {
    setISSignIn(!isSignIn);
  }

  const buttonValidate = () => {

    const errormsg = validate(email.current.value, password.current.value);

    setErrorMessage(errormsg);

    if(errormsg) return;

    if(!isSignIn)
    {
       // Sign Up Logic
       console.log( isSignIn , "Button Clicked");

       createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value
        }).then(() => {
          // Profile updated!
          navigate("/browse");
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
     
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
        // ..
      });
    }

    else 
    {
      //sign In Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }


  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={bg} alt='bg' />
        </div>

        <form onSubmit={(e)=> e.preventDefault() } className='absolute w-3/12 bg-black rounded-lg flex flex-col gap-3 text-white my-40 p-10 mx-auto left-0 right-0 bg-opacity-75'>
          <h2 className='text-4xl m-2 '> {isSignIn ? "Sign In" : "Sign Up"} </h2>
          { !isSignIn && <input ref={name} type='text' placeholder='Enter Your Name' className='p-2 m-2 rounded-md  text-black '/>}
          <input ref={email} type='text' placeholder='Enter Your Email' className='p-2 m-2 rounded-md text-black '/>
          <input ref={password} type='password' placeholder='Enter Your Password' className='p-2 m-2 rounded-md text-black '/>
          <p className='p-2 m-2 text-red-400'> {errorMessage} </p>
          <button className='p-2 m-2 bg-red-700 text-white rounded-lg' onClick={buttonValidate}> {isSignIn ? "Sign In" : "Sign Up"} </button>
          <p className='p-2 m-2 cursor-pointer' onClick={toggleSignIn}> {isSignIn ? "New to Netflix? Sign Up Now." : "Already a User? Sign In. "} </p>
        </form>
    </div>
  )
}

export default Login