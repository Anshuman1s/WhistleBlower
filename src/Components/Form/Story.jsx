import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dropdown from './Dropdown';
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const navigate = useNavigate(-1);
  return (
    <div>
      <Navbar />
      
      <div className="Heading w-full h-screen mt-10">
      <RiArrowGoBackLine  onClick={() => navigate(-1)} 
            className='text-xl ml-[11.5vw] font-bold cursor-pointer hover:text-blue-500 duration-300'/>
      <span  onClick={() => navigate(-1)} 
            className='ml-[10vw] font-bold cursor-pointer hover:text-blue-500 duration-300'>Go back</span>
        <h1 className="text-3xl font-bold text-center">It's Time to blow the Whistle...</h1>
        <p className="text-md font-medium text-center mt-2">Make Sure you don't reveal your personal details...</p>
        <div className="form w-[100%] h-[80%]">
          <div className="w-[70%] h-full ml-[13vw] p-[0.1px]">
            <h2 className="font-semibold">Insider Name</h2>
            <input
              type="text"
              placeholder="Enter Your Id"
              className="w-full h-[3vw] border-b-[2px] border-black outline-none mt-2 text-medium font-medium"
            />
            <div className="2ndpart flex items-center gap-[24vw] mt-8 font-semibold">
              <h2>Category</h2>
              <h2>Topics</h2>
              <h2>Country</h2>
            </div>
            <div className="flex gap-[15vw] mt-4 h-[2vw]">
              <Dropdown title="Select Your Category" options={["Life", "College", "Company"]} />
              <Dropdown title="Choose Your Topic" options={["Life", "College", "Company"]} />
              <Dropdown title="Select Your Location" options={["India", "USA", "France", "Italy", "Other"]} />
            </div>
            <div className="Title mt-16">
              <h2 className="font-semibold">Title</h2>
              <input
                type="text"
                placeholder="Enter the title of your story"
                className="w-full h-[3vw] border-b-[2px] border-black outline-none mt-2 text-medium font-medium"
              />
            </div>
            <div className="Story-Description mt-10">
              <h2 className="font-semibold">Story Description</h2>
              <textarea
                placeholder="Write your story here..."
                className="w-full h-[15vw] border border-black rounded p-2 text-medium font-medium outline-none resize-none mt-2"
              ></textarea>
            </div>
            <button className='m-3 p-3 bg-black text-white rounded ml-[33vw] font-medium hover:bg-blue-300 hover:text-black duration-500'>Submit</button>
          </div>
          
        </div>
      
      </div>
    </div>
  );
};

export default Form;
