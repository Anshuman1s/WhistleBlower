import React from 'react'
import {Link} from 'react-router-dom'
import { RiDashboard2Line } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
const Admin = () => {
  return (
    <div className='bg-blue-300 w-[100%] h-screen overflow-auto flex '>
      <div className="sidebar bg-red-300 h-[100%] w-[25%] relative p-[0.1px] rounded-xl">
      <div className="">
      <h1 className='text-2xl font-semibold text-center mt-10'>Admin</h1>
      </div>
      <div className="Image h-[10vw] w-[10vw] bg-slate-50 rounded-full ml-[7vw] overflow-hidden">
      <img className='object-cover' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
       <div className=" h-[2vw] flex items-center ml-[8vw] mt-3">
        <h2 className='font-medium text-xl hover:text-blue-500 cursor-pointer'>Mohit Dubey</h2>
       </div>
       <div className="Sub-Part w-full h-[60.4%] rounded-xl p-3">
        <Link to='/trending' className=" duration-300 rounded-lg flex items-center gap-5 text-2xl  ml-5 hover:bg-blue-400 w-[12vw] h-[4vw]">
        <RiDashboard2Line className='ml-2' />
          Trending
        </Link>
        <Link to='/trending' className=" duration-300 rounded-lg flex items-center gap-5 text-2xl mt-10 ml-5  hover:bg-blue-400 w-[12vw] h-[4vw]">
        <FaDatabase className='ml-2' />
         DataBase
        </Link>
        <Link to='/trending' className=" duration-300 rounded-lg flex items-center gap-5 text-2xl mt-10 ml-5  hover:bg-blue-400 w-[12vw] h-[4vw]">
        <RiLogoutCircleLine className='ml-2' />
          Logout
        </Link>
       </div>
      </div>
      <div className="RightSide Nav w-[75%] bg-red-400 h-screen">
        <div className="bg-yellow-300 h-[5vw] w-full flex items-center justify-evenly">
            <h1 className='text-xl font-medium'>Today's Page View</h1>
            <h2 className='text-xl font-medium'>100000000 + </h2>
        </div>
        <div className="bg-green-400 h-[10vw] w-full flex items-center justify-evenly ">
            {/* <div className="h-[10vw] w-[10vw] bg-pink-100 rounded-xl">
                <FaUserAlt className='text-3xl text-green-600 ml-16 mt-[0.4px]'/>
                
                <div className=" mt-10 ml-1 overflow-hidden">
                <h1 className='text-xl text-center font-semibold'>User</h1>
                <h2 className='text-sm font-semibold'>0000000000</h2>
                </div> */}
                
            </div>
            {/* <div className="h-[10vw] w-[10vw] bg-pink-100 rounded-xl"></div>
            <div className="h-[10vw] w-[10vw] bg-pink-100 rounded-xl"></div>
            <div className="h-[10vw] w-[10vw] bg-pink-100 rounded-xl"></div> */}
        {/* </div> */}
      </div>
      
    </div>
  )
}

export default Admin
