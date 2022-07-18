import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeMap from './components/WelcomeMap'
import GameCard from './components/GameCard'
import Login from './components/Login'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Home: NextPage = () => {
  const [openAuth, setOpenAuth] = useState(false)
  
  function handleOpenAuth() {
    setOpenAuth(!openAuth);
  }

  const authModal = () => {
    console.log('auth open');
  }

  return (
    <div>
      <div className="flex font-sans flex-col items-center h-auto bg-primary-dark min-w-[600px]">
        <Head>
          <title>Features</title>
          <link rel="icon" href="/logo.svg" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        </Head>
        <Navbar authModal={handleOpenAuth}/>
        <section className="bg-gray-900 w-[500px] md:w-[850px] lg:w-[1150px]">
          <div className="grid py-16 mx-auto max-w-screen md:grid-cols-12 md:gap-8">
            <div className="mr-auto place-self-center md:col-span-7">
              <h1 className="max-w-2xl mb-4 font-sans text-4xl font-extrabold tracking-tight lg:max-w-[500px] text-white md:text-5xl">Train your geography skills</h1>
              <p className="max-w-2xl mb-6 text-lg font-light text-gray-400 md:mb-8 md:text-xl">From the peak of Mt. Everest to the depths of Death Valley, learn what makes each country unique.</p>
              <div className="flex flex-row gap-x-4">
                <button onClick={handleOpenAuth} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:animate-pulse hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-900">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <a href="games" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-300 border-2 border-gray-300 rounded-lg focus:ring-4 hover:text-white hover:border-white hover:animate-pulse">
                  Explore games
                </a>
              </div>
            </div>
            <div className="invisible h-0 mt-0 md:h-auto md:visible md:col-span-5">
              <WelcomeMap/>
            </div>
          </div>
        </section>
        <section className="w-[500px] md:w-[800px] lg:w-[1000px] mt-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold text-white">Featured Games</h2>
          </div>
          <div className="grid justify-between grid-flow-row grid-cols-3 gap-8 pt-6 font-medium">
            <GameCard title="Higher Lower" link="HigherLower"/>
            <GameCard title="Country Names: World" link=""/>
            <GameCard title="Country Names: Europe" link=""/>
            <GameCard title="Country Names: Asia" link=""/>
            <GameCard title="Country Names: Africa" link=""/>
            <GameCard title="Capital Cities" link=""/>
          </div>
        </section>
        <Footer/>
        {/* Auth modal */}
        {/* <div className={openAuth ? "block" : "hidden"}>
          <div className="fixed ">
          </div>
        </div> */}
        
      </div>
      <div className={openAuth ? "block" : "hidden"}>
        <div className="relative z-50 modal" aria-labelledby="modal-title" role="dialog" aria-modal="false">
          <div className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-75"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            {/*
              Modal panel, show/hide based on modal state.
              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            */}
            <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="flex flex-col">
                  <div className="font-bold">
                    Sign in to your account
                  </div>
                  <div>
                    <div>
                      Sign in with
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleOpenAuth} type="button" className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
