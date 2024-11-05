import React from 'react';


import { Routes, Route } from 'react-router-dom';
import Story from './Components/Form/Story';
import Identity from './Components/Form/Identity';
import Home from './Components/Body/Home';
import Admin from './Components/Admin/Admin';




const App = () => {
  return (
    <div className='w-full h-full'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/id' element={<Identity />} />
        <Route path='/form' element={<Story />} /> 
        <Route path='/story' element={<Story/>}/>
      </Routes>
    {/* <Admin/> */}
    </div>
  );
};

export default App;
