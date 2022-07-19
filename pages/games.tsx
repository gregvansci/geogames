import { NextPage } from "next"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import GameCard from "./components/GameCard"
import AuthModal from "./components/AuthModal"
import Head from "next/head"
import React, { useState } from 'react'
import { auth } from '../firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const Games: NextPage = () => {

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
    <div className="flex font-sans flex-col items-center h-auto bg-primary-dark min-w-[600px]">
      <Head>
        <title>Games - Features</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Navbar authModal={handleOpenAuth} openProfile={openProfile} handleOpenProfile={handleOpenProfile} isAuthenticated={isAuthenticated}/>
      <section className="w-[500px] md:w-[800px] lg:w-[1000px] font-sans text-white bg-gray-900 ">
        <div className="items-center w-[500px] md:w-[800px] lg:w-[1000px] pt-12 m-auto">
          <h2 className="text-3xl font-bold">Game List</h2>
        </div>
        <div className="grid justify-between grid-flow-row grid-cols-3 gap-8 pt-6 font-medium ">
          <GameCard title="Higher Lower" link="HigherLower"/>
          <GameCard title="Country Names: World" link=""/>
          <GameCard title="Country Names: Europe" link=""/>
          <GameCard title="Country Names: Asia" link=""/>
          <GameCard title="Country Names: Africa" link=""/>
          <GameCard title="Capital Cities: World" link=""/>
          <GameCard title="Capital Cities: Europe" link=""/>
          <GameCard title="Capital Cities: North America" link=""/>
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

export default Games