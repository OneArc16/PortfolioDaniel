import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem = useRouter

const Navbar = () => {
  
  const [activeItem, setActiveItem] = useState<string>('')

  const {pathname} = useRouter()

  useEffect(() => {
        if(pathname === "/") setActiveItem('About')
        if(pathname === "/Projects") setActiveItem('Projects')
        if(pathname === "/Resume") setActiveItem('Resume')
  }, [])
  
    return (
    <div>
      <span className='font-bold text-green'>{activeItem}</span>
      <div className='flex space-x-3 text-red-400 font-lg'>
        {activeItem !== 'About' && (
        <Link href='/'>
            
                <span onClick={()=>setActiveItem('About')}>About</span>
            
        </Link>
        )}
                {activeItem !== 'Projects' && (
        <Link href='/projects'>
            
                <span onClick={()=>setActiveItem('Projects')}>Projects</span>
            
        </Link>
        )}
                {activeItem !== 'Resume' && (
        <Link href='/resume'>
            
                <span onClick={()=>setActiveItem('Resume')}>Resume</span>
            
        </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar