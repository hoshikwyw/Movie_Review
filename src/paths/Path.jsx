import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Popular from '../pages/Popular'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Details from '../pages/Details'

const Path = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail' element={<Details />} />
        </Routes>
    )
}

export default Path
