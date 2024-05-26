import React from 'react'
import CustomNavlink from '../CommonComponents/CustomNavlink'

const CustomNavbar = () => {
    return (
        <div>
            <div>Logo</div>
            <div className="">
                <CustomNavlink title="Home" href="/" />
                <CustomNavlink title="Popular" href="/popular" />
                <CustomNavlink title="About" href="/about" />
            </div>
        </div>
    )
}

export default CustomNavbar
