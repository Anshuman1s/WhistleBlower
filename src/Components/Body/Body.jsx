import React from 'react';
import LikeData from './LikeData';
import Post from './Post';

const Body = () => {
  return (
    <div className='w-full h-screen relative font-[poppins] font-semibold'>
      <div className="w-[70%] bg-zinc-200 absolute left-[15vw] top-10 p-5 space-y-10"> 
        <Post />
      </div>
      
    </div>
  );
};

export default Body;
