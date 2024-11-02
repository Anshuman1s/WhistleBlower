import React from 'react'
import Navbar from '../Navbar/Navbar'
import HashTags from '../Navbar/HashTags'
import Body from '../Body/Body'

const Home = () => {
  document.title = "Home"
  return (
    <>
      <Navbar/>
      <HashTags/>
      <Body/>
    </>
  )
}

export default Home
