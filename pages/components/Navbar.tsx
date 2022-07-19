import { useState } from 'react';
import ProfileMenu from './ProfileMenu';

interface NavbarProps {
  authModal: Function
  openProfile: boolean
  handleOpenProfile: Function
  isAuthenticated: boolean
}

export default function Navbar ( { authModal, openProfile, handleOpenProfile, isAuthenticated }: NavbarProps ) {

  return (
    <nav className="h-[64px] w-full md:w-[800px] lg:w-[1000px]  bg-primary-dark z-30">
      <div className="h-[64px] w-full flex flex-row items-center justify-between">
        <div className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-5" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-8">
          <a href="../"className="flex flex-row items-center font-sans text-xl font-bold text-white gap-x-2 " >
            <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full border-indigo-500/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" className="h-6 pb-.5" alt="logo py-auto"/>
            </div>
            Features
          </a>
          <div className="hidden md:block h-[30px] w-1 border-l-2"></div>
          <a href="games" className="hidden font-sans text-sm font-normal text-gray-300 md:block hover:text-white">Games</a>
          <a className="hidden font-sans text-sm font-normal text-gray-300 md:block hover:text-white">Random</a>
          <a className="hidden font-sans text-sm font-normal text-gray-300 md:block hover:text-white">About</a>
        </div>
        <div className="flex justify-end mr-5 md:mr-0">
          { isAuthenticated ?
            <div className="relative h-6 p-0 m-0">
              <button onClick={event => handleOpenProfile()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="white">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </button>
              <ProfileMenu openProfile={openProfile} handleOpenProfile={handleOpenProfile}/>
            </div>
            :
            <button onClick={event => authModal()} className="px-3 py-1 ml-8 font-sans text-sm font-normal text-gray-300 rounded-md ring-2 ring-gray-300 hover:ring-white hover:text-white hover:animate-pulse">
            Log in
            </button>
          }
        </div>
      </div>
    </nav>
  )
}