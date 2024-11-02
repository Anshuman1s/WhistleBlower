import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";

const Identity = () => {
  
  const navigate = useNavigate(); 

  return (
    <>
      <div className='w-full h-screen'>
        <Navbar />
        
        <div className="mt-10">
          <RiArrowGoBackLine  
            onClick={() => navigate(-1)} 
            className='text-xl ml-[11.5vw] font-bold cursor-pointer hover:text-blue-500 duration-300'
          />
          <span 
            onClick={() => navigate(-1)} 
            className='ml-[10vw] font-bold cursor-pointer hover:text-blue-500 duration-300'
          >
            Go back
          </span>
          
          <h1 className='text-3xl font-semibold text-center'>Thank you for raising your Voice!</h1>
          <p className='text-sm font-medium text-center mt-2'>
            We appreciate Your Courage, and Support your anonymity!
          </p>
        </div>
        <div className="form-id flex items-center justify-center mt-[10vw]">
          <input
            type="text"
            placeholder="Claim Your anonymous identity"
            className="border-b-[2px] border-black w-[30vw] font-medium h-[3vw] outline-none text-black"
          />
        </div>
        <div className="flex items-center ml-[51.5vw] mt-2">
          <Link to="/story" className='hover:text-blue-300 duration-300 underline font-medium'>
            I have my anonymous id
          </Link>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className='m-3 p-3 bg-black text-white rounded-full w-[6vw] hover:bg-blue-300 duration-300 hover:text-black font-semibold'>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Identity;
