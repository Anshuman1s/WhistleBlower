import React from 'react'
import Story from '../Form/Story'
import {Link} from 'react-router-dom'
const Add = () => {
  
  return (
    <div className='sm:p-3 sm:m-3 bg-black text-white sm:rounded-full font[Poppins] font-semibold sm:text-sm text-xl hover:bg-blue-300 duration-500 cursor-pointer hover:text-black'>
      <Link to="/story">Add Your Story</Link>
    </div>
  )
}

export default Add
