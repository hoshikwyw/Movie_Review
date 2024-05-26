import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavlink = ({ title, href }) => {
    return (
        <NavLink to={href}>{title}</NavLink>
    )
}

export default CustomNavlink
