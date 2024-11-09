import React from 'react';
import Logo from  "../utils/Nlogo.png"
import userIcon from "../utils/user.png"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector( (store) => store.user);

  const handleSignOUt = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage")
    });
  }
  return (
    <div className='absolute w-screen z-10 flex justify-between'>
        <img src={Logo} alt='logo' className='w-[220px] mt-4 ml-4'/>

        { user && (<div className='flex'>
          <img className='w-14 h-14 m-2' alt="user-icon" src={userIcon}/>
          <button  onClick={handleSignOUt}className='bg-white text-black p-2 rounded-xl m-2 h-12 mt-3'> Sign Out </button>
        </div> ) }
    </div>
  )
}

export default Header