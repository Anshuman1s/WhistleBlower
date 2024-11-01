import React, { useState } from 'react';

const LikeData = () => {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount((prevVal) => prevVal + 1);
  };
  
  const data = ["Relatable", "Love","Insightful.", "Brave",  "Frustrating", "Support"];

  return (
    <>
      {data.map((elem, index) => (
        <div key={index}  className="bg-white w-[10vw] h-[3vw] flex justify-evenly items-center rounded-full cursor-pointer ">
          <div  className="text-sm ml-3 w-[7vw]"><h2>{elem}</h2></div>
          <div className="like">
            <button onClick={increase} className='bg-zinc-100 h-[3vw] w-[3vw] rounded-full border-l-0'>{count}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default LikeData;
