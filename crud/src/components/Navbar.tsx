import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HomeIcon, Sprout } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full border-b bg-background z-50'>
      <div className='max-w-7xl mx-auto px-4 flex h-16 items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <Sprout className='w-5 h-5' />
          <span>Plantventory</span>
        </Link>

        {/* Navbar Links */}
        <div className='hidden md:flex items-center gap-4'>
          <Button variant='ghost' className='flex items-center gap-2' asChild>
            <Link href='/'>
              <HomeIcon className='w-4 h-4' />
              <span className='hidden lg:inline'>Home</span>
            </Link>
          </Button>

          <Button variant='ghost' className='flex items-center gap-2' asChild>
            <Link href='/plants'>
              <Sprout className='w-4 h-4' />
              <span className='hidden lg:inline'>Plants</span>
            </Link>
          </Button>
        <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar