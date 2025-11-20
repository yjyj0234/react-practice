import React, { useState } from 'react'
import { FaAlignJustify, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
const Navbar = () => {

  const [nav, setNav] = useState(false);
  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='flex items-center justify-between w-full h-full px-10'>
        <div className='flex items-center'>
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl '>Chatty</h1>
          <ul className='hidden md:flex'>
            {/* 원랜 안보이다가 화면이 미디움보다 커지면 보이게 하도록 */}
            <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link to='support' smooth={true} duration={500}>Support</Link></li>
            <li><Link to='feature' smooth={true} duration={500}>Feature</Link></li>
            <li><Link to='testimonials' smooth={true} duration={500}>Feedback</Link></li>
          </ul>
        </div>
        <div className='hidden pr-4 md:flex'>
          <button className='mr-4 text-slate-600 bg-transparent border-none'>
            Sign In
          </button>
          <button className='px-8 py-3'>
            Sign Up
          </button>
        </div>
        <div className='mr-4 md:hidden' onClick={() => setNav(!nav)}>
          {/* FaAlignJustify: 햄버거버튼 토글  */}
          {/* FaTimes: X표시 */}
          {nav ? <FaTimes/> : <FaAlignJustify/>}
        </div>
      </div>
      <ul className={nav ? 'absolute bg-zinc-200 w-full px-8' : 'hidden'}>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to='home' smooth={true} duration={500}> Home</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to='about' smooth={true} duration={500}> About</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to='support' smooth={true} duration={500}> Support</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to='feature' smooth={true} duration={500}> Feature</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to='testimonials' smooth={true} duration={500}> Feedback</Link></li>
        
        <div className='flex flex-col my-4'>
        <button className='px-8 py-3 mb-4 text-slate-600 bg-transparent'>
          Sign In
        </button>
        <button className='px-8 py-3'>Sign Up</button>
      </div>
      </ul>
      
    </nav>
  )
}

export default Navbar