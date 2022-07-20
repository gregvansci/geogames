import { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import WorldCountriesMap from "./maps/WorldCountriesMap";
import React, { useState } from 'react'
import { auth } from '../firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthModal from "./components/AuthModal";

const HigherLower: NextPage = () => {
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

  

  var leftCountry = "China";
  var rightCountry = "United States";

  var category = "Population";

  var currentScore = 0;
  var highScore = 0;

  return (
    <div className="flex font-sans flex-col items-center h-auto max-h-screen bg-primary-dark min-w-[600px]">
      <Head>
        <title>Higher Lower - Features</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Navbar authModal={handleOpenAuth} openProfile={openProfile} handleOpenProfile={handleOpenProfile} isAuthenticated={isAuthenticated}/>
      <section className="relative flex flex-col items-center w-full h-screen text-white bg-gray-900">
        <div className="relative flex flex-col items-center">
          <div className="bg-secondary-dark w-[500px] md:w-[750px] lg:w-[800px] md:h-[50vh] mt-[2vh] rounded-2xl">
            <WorldCountriesMap countries={[leftCountry, rightCountry]} />
          </div>
          <div className="bg-tertiary-dark overflow-hidden w-[450px] lg:w-[550px] md:h-[40vh] absolute top-[45vh] rounded-xl flex flex-col">
            <div className="mt-2 text-center">
              <p className="text-base text-gray-200">Higher Lower</p>
              <p className="text-2xl font-bold text-">{category}</p>
            </div>
            <div className="flex flex-row justify-between w-full px-4 pt-8 text-sm">
              <div className="flex flex-col items-center w-24 gap-4 pt-1">
                <p className="">{leftCountry}</p>
                <p className="underline whitespace-pre">                        </p>
              </div>
              <div className="flex flex-col">
                <button className="px-8 pb-1 mb-3 text-3xl font-medium text-center ring bg-secondary-dark ring-indigo-600 hover:bg-indigo-600 rounded-xl">&gt;</button>
                <button className="px-8 pb-1 mb-3 text-3xl font-medium text-center ring bg-secondary-dark ring-indigo-600 hover:bg-indigo-600 rounded-xl">&lt;</button>
              </div>
              <div className="flex flex-col items-center w-24 gap-4 pt-1">
                <p className="">{rightCountry}</p>
                <p className="underline whitespace-pre">                        </p>
              </div>

            </div>
          </div>
        </div>
        <div className="text-sm lg:text-base absolute bottom-[8vh] flex flex-row justify-between px-4 w-[500px] md:w-[800px] lg:w-[1000px] text-gray-400">
          <div>
            <p>High Score: {highScore}</p>
          </div>
          <div>
            <p>Current Score: {currentScore}</p>
          </div>
        </div>
      </section>
      {isAuthenticated ?
        "" :
        <AuthModal openAuth={openAuth} handleOpenAuth={handleOpenAuth}/>
      }
    </div>
  )
}

export default HigherLower;