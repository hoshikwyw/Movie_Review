import React from 'react'
import CustomNavlink from '../CommonComponents/CustomNavlink'

const CustomNavbar = () => {
    return (
        <div className=' flex py-7 px-10 gap-5 justify-between'>
            <div className=" flex gap-5">
            <div>Logo</div>
                <CustomNavlink title="Home" href="/" />
                <CustomNavlink title="Popular" href="/popular" />
                <CustomNavlink title="About" href="/about" />
            </div>
            <div className=' flex gap-5'>
                <CustomNavlink title="Login" href="/" />
                <CustomNavlink title="SignUp" href="/" />
            </div>
        </div>
    )
}

export default CustomNavbar
