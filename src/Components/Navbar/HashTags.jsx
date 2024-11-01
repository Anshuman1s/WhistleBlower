import React from 'react';
import { Link } from 'react-router-dom';

const HashTags = () => {
  const data = ["Life", "Collage", "Company"];

  return (
    <div className=' w-full h-[5vw] flex items-center justify-evenly font-[Poppins] font-semibold cursor-pointer'>
      {data.map((elem, index) => (
       
        <Link className='sm:p-3 sm:m-3 md:mt-10  bg-zinc-300 rounded hover:bg-blue-300 duration-300 ' key={index} >#{elem}</Link>
      ))}
    </div>
  );
};

export default HashTags;
