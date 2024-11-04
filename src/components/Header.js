import React from 'react';
import Logo from  "../utils/Nlogo.png"

const Header = () => {
  return (
    <div className='absolute z-10'>
        <img src={Logo} alt='logo' className='w-[220px] mt-4 ml-4'/>
        
    </div>
  )
}

export default Header