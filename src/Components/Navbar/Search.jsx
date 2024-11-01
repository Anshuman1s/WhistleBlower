import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='w-[28vw] h-[3vw] hidden sm:flex items-center rounded-full bg-zinc-100 '>
     <div className="w-[5vw] h-[3vw]  px-2 rounded-full">
     <span><IoSearch className='text-2xl font-medium ml-4  mt-[0.8vw] text-zinc-400'/></span>
     </div>
     <div className="w-[23vw] h-[3vw] ">
      <input type="text" placeholder='  Search...' className='w-[20vw] h-[3vw]  rounded text-zinc-500 font-semibold bg-zinc-100 border-none outline-none'/>
     </div>
     
    </div>
  )
}

export default Search
