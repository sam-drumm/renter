import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Header () {
  return (
    <>
    <Link to="/">
    <img src='./images/RenterFinal-removebg-preview.png' alt="renterlogo" className='logo'/>
    </Link>
    <Nav />
    </>
  )
}
