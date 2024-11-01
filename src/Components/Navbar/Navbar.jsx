import React from 'react'
import Search from './Search'
import Add from './Add'
import { IoMenu } from "react-icons/io5";
import Identity from '../Form/Identity'
import {Link} from 'react-router-dom'




const Navbar = () => {
  return (
    <div className='max-w-screen-2xl mx-auto sm:h-[5vw] h-[12vw] bg-zinc-200 flex items-center justify-around shadow-sm md:h-[5vw] sticky'>
     <Link to="/"> <h1 className='text-3xl px-3 font[] font-semibold'><span className=''>Whistle</span><span >Blower</span></h1></Link>
      <Link to="/id" className='text-sm font-semibold font-[Poppins] hover:bg-blue-200 m-3 p-3 rounded-md duration-300 cursor-pointer'>
        <h2>Claim Your Id</h2>
      </Link>
      <Search/>
      <Add/>
      
      <IoMenu className='sm:hidden '/>
      
    </div>
    
  )
}

export default Navbar
