import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const handleClick = () =>{
    const navbar = document.querySelector(".mobile-nav")
    navbar.classList.toggle("h-fit")
  }
  return (
    <>
        <nav className='flex py-3 px-2 items-center justify-between gap-5 bg-sky-800 text-white sm:px-10 sm:py-3'>
            <h1 className='text-2xl sm:text-3xl'><Link to="/">sahyogbca</Link></h1>
            <i onClick={handleClick} className="fa-solid fa-bars text-xl sm:hidden"></i>
            <ul className='hidden sm:flex flex-row-reverseitems-center  text-lg gap-4'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link >Feedback</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
        <ul className='mobile-nav overflow-hidden h-0 divide-y-[1px] divide-[gray] px-2 flex flex-col bg-sky-800 text-white'>
          <li className='px-2 py-1' ><Link to="/">Home</Link></li>
          <li className='px-2 py-1' ><Link to="/about">About</Link></li>
          <li className='px-2 py-1' ><Link to="/">Feedback</Link></li>
          <li className='px-2 py-1' ><Link to="/contact">Contact</Link></li>
        </ul>
    </>
  )
}
