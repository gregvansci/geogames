import { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import HigherLowerMap from "./maps/HigherLowerMap";
import React, { useState } from 'react'
import { auth } from '../firebase/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const HigherLower: NextPage = () => {

  const [openAuth, setOpenAuth] = useState(false)
  const [user, loading, error] = useAuthState(auth);
  const [isAuthenticated, setIsAuthenticated] = useState(user !== null ? true : false);
  onAuthStateChanged(auth, user => {
    setIsAuthenticated(user !== null ? true : false);
  });
  function handleOpenAuth() {
    setOpenAuth(!openAuth);
  }
  console.log(isAuthenticated);

  return (
    <div className="flex font-sans flex-col items-center h-auto max-h-screen bg-primary-dark min-w-[600px]">
      <Head>
        <title>Higher Lower - Features</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Navbar authModal={handleOpenAuth} isAuthenticated={isAuthenticated}/>
      <section className="relative flex flex-col items-center w-full h-screen text-white bg-gray-900">
        <div className="relative flex flex-col items-center">
          <div className="bg-slate-800 w-[500px] md:w-[750px] lg:w-[800px] md:h-[50vh] mt-[2vh] rounded-2xl">
            <HigherLowerMap />
          </div>
          <div className="bg-slate-700 w-[450px] lg:w-[550px] md:h-[40vh] absolute top-[45vh] rounded-xl">
            <div className="text-center">
              <p className="text-base text-gray-200">Higher Lower</p>
              <p className="text-2xl font-bold text-">Population</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[8vh] flex flex-row justify-between px-4 w-[500px] md:w-[800px] lg:w-[1000px] text-gray-400">
          <div>
            <p>High Score: </p>
          </div>
          <div>
            <p>Current Score: </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HigherLower;