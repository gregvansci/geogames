import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeMap from './maps/WelcomeMap'
import GameCard from './components/GameCard'
import AuthModal from './components/AuthModal'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [openAuth, setOpenAuth] = useState(false)
  const [openProfile, setOpenProfile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(user !== null ? true : false);

  onAuthStateChanged(auth, user => {
    setIsAuthenticated(user !== null ? true : false);
  });
  function handleOpenAuth() {
    setOpenAuth(!openAuth);
  }
  function handleOpenProfile() {
    setOpenProfile(!openProfile);
  }

  return (
    <div className="flex font-sans flex-col items-center h-auto w-full bg-primary-dark min-w-[600px]">
      <Head>
        <title>Features</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Navbar authModal={handleOpenAuth} openProfile={openProfile} handleOpenProfile={handleOpenProfile} isAuthenticated={isAuthenticated}/>
      <section className="bg-gray-900 w-[500px] md:w-[850px] lg:w-[1150px]">
        <div className="grid py-16 mx-auto max-w-screen md:grid-cols-12 md:gap-8">
          <div className="mr-auto place-self-center md:col-span-7">
            <h1 className="max-w-2xl mb-4 font-sans text-4xl font-extrabold tracking-tight lg:max-w-[500px] text-white md:text-5xl">Train your geography skills</h1>
            <p className="max-w-2xl mb-6 text-lg font-light text-gray-400 md:mb-8 md:text-xl">From the peak of Mt. Everest to the depths of Death Valley, learn what makes each country unique.</p>
            <div className="flex flex-row gap-x-4">
              { isAuthenticated ? "" :
                <button onClick={handleOpenAuth} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:animate-pulse hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-900">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              }
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
      {isAuthenticated ?
        "" :
        <AuthModal openAuth={openAuth} handleOpenAuth={handleOpenAuth}/>
      }
    </div>
  )
}

export default Home
