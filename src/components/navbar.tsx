'use client';
// This is from my Nextjs resources, Navbar_basic
import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link';
// import profileDefault from '@/assets/images/profile.png';

const Navbar = () => {


  const [isLoggedIn,setIsLoggedIn ] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(prev => !prev);
  }
  return (
    <nav className='bg-red-700 border-b-1 border-white backdrop-blur-'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button - hamburger --> */}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            <Link className='flex flex-shrink-0 items-center' href='/'>

              <span className='hidden md:block text-white text-2xl font-bold ml-2 hover:text-black transition duration-300'>
                <div className="w-24 h-19 rounded-md overflow-hidden shadow-lg">
                  <img
                    src="/assets/DawgDietLogo.png"
                    alt="Dawg Diet Logo"
                    className="w-full h-full object-cover rounded-3xl border-3 border-black"
                  />
                </div>
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
              
              <Link
                  href='/project'
                  className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                >
                  Plan
                </Link>
            </div>
          </div>
            </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
         { 
          !isLoggedIn && (
                <div className='hidden md:block md:ml-6'>
                  <div className='flex items-center'>
                    <Link 
                      href='/project' 
                      className='flex items-center text-white bg-gray-400 hover:bg-black hover:text-white rounded-md px-3 py-2'
                    >
                      <span>Login | Register</span>
                    </Link>
                  </div>
                </div>
          )
        }

             {/* <!-- Right Side Menu (Logged In) --> */}
        { isLoggedIn && (
                <div className='hidden md:block md:ml-6'>
                  <div className='flex items-center'>
                    <button onClick = {handleLogin} className='flex items-center text-white bg-gray-400 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2'>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
        )}

        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className='hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <a
            href='#'
            className='text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            About
          </a>
        
          <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
            <i className='fa-brands fa-google mr-2'></i>
            <span>Login or Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
