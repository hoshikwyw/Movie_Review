import React from 'react'
import CustomNavbar from './components/CustomNavbar'
import Path from './paths/Path'

const App = () => {
  return (
    <div className=' mainBg '>
      <div className=" overlayMainBg flex justify-center items-center">
        <div className=" subBg">
          <CustomNavbar />
          <Path />
        </div>
      </div>
    </div>
  )
}

export default App
