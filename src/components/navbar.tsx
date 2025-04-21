'use client';
// This is from my Nextjs resources, Navbar_basic
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Session } from "next-auth";
import { doLogout } from "../app/actions/index";

interface LocalSession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}
interface NavbarProps {
  session: LocalSession | null;
}

const Navbar = ({ session }: NavbarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!session?.user);

  useEffect(() => {
    setIsLoggedIn(!!session?.user);
  }, [session]);

  const handleLogout = () => {
    doLogout();
    setIsLoggedIn(!!session?.user);
  };

  return (
    <nav className='bg-red-700 border-b-1 border-white backdrop-blur'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          {/* Left side - Logo and nav links */}
          <div className='flex flex-1 items-center justify-start'>
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <span className='hidden md:block text-white text-2xl font-bold ml-2 hover:text-black transition duration-300'>
                <div className='w-24 h-19 rounded-md overflow-hidden shadow-lg'>
                  <img
                    src='/assets/DawgDietLogo.png' // Update this path to the actual location of your logo
                    alt='Dawg Diet Logo'
                    className='w-full h-full object-cover rounded-3xl border-3 border-black'
                  />
                </div>
              </span>
            </Link>
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2 ml-6'>
                <Link href='/' className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>Home</Link>
                <Link href='/project' className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>Plan</Link>
              </div>
            </div>
          </div>

          {/* Right side - Auth status */}
          <div className='hidden md:block md:ml-6'>
            <div className='flex items-center justify-end text-white space-x-4'>
              {isLoggedIn && session?.user ? (
                <>
                  <span>Welcome, {session.user?.name || session.user?.email}</span>
                  <button
                    onClick={handleLogout}
                    className='bg-gray-400 hover:bg-gray-500 rounded-md px-3 py-2'
                  >
                    Logout
                  </button>
                </>
              ) : (
                <span className='bg-gray-400 hover:bg-gray-500 rounded-md px-3 py-2'>
                  <Link href='/login' className='mr-1'>Login</Link> | <Link href='/signup' className='ml-1'>Register</Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;