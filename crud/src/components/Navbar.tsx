import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HomeIcon, LogIn, LogOut, Sprout } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { stackServerApp } from '@/stack'
import { getUserDetails } from '@/app/actions/userActions'
import { UserButton } from '@stackframe/stack'

const Navbar = async () => {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);
  return (
    <nav className='sticky top-0 w-full border-b bg-background z-50'>
      <div className='max-w-7xl mx-auto px-4 flex h-16 items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <Sprout className='w-5 h-5' />
          <span>Plantventory</span>
        </Link>

        {/* Navbar Links */}

        {userProfile && (
          <div className='flex items-center gap-2'>
            <p>
             Hello {userProfile.name} 👋
            </p>
          </div>
        )}

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
        {!user ? (<Button variant='ghost' className='flex items-center gap-2' asChild>
            <Link href={app.signIn} >

              <LogIn className='w-4 h-4' />
              <span className='hidden lg:inline'>Sign In</span>
            </Link>
          </Button>) : (
            <>
            <Button variant='ghost' className='flex items-center gap-2' asChild>
            <Link href={app.signOut} >

              <LogOut className='w-4 h-4' />
              <span className='hidden lg:inline'>Sign Out</span>
            </Link>
          </Button>
          <UserButton />
          </>
        )}
        

          

        </div>
      </div>
    </nav>
  )
}

export default Navbar