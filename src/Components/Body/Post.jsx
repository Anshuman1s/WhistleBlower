import React from 'react';
import LikeData from './LikeData';

const Post = () => {
  return (
    <div className="mt-10"> 
      <div className="flex justify-between">
        <h1>Company Work Culture</h1>
        <h1>Insider: FrustratedMe.<span> India</span></h1>
        <h2 className='mr-5'>1 Hour ago</h2>
      </div>
      <hr className='mt-5' />
      <div className="Heading flex gap-2 mt-4">
        <h1 className='text-xl'>Working at Google:</h1>
        <h1 className='text-xl'>Not as Dreamy as it Looks From the Outside</h1>
      </div>
      <div className="Paragraph mt-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint repellat amet voluptatum, veritatis consectetur quas deleniti voluptate, blanditiis veniam architecto temporibus fuga ut ea autem magni asperiores tempora unde? ...</p>
      </div>
      <hr className="mt-4" />
      <div className="buttons mt-5 flex items-center justify-evenly cursor-pointer">
        <LikeData />
      </div>
      <br />
    </div>
  );
};

export default Post;
