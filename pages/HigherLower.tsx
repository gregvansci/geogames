import { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import WorldCountriesMap from "./maps/WorldCountriesMap";
import React, { useState } from 'react'
import { auth, db } from '../firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
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

  var leftCountry: string = "China";
  var rightCountry: string = "United States";
  var leftCountryValue: number = 1400000000;
  var rightCountryValue: number = 330000000;

  var category: string = "Population";
  var highScore: number = 0;

  const [gameOver, setGameOver] = useState(false);
  const [roundOver, setRoundOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  
  function handleChoice(choice: number) {
    if (gameOver) { return; }
    if (roundOver) { return; } 

    if (choice === 1) {
      console.log("Left Country Chosen");
      if (leftCountryValue > rightCountryValue) {
        setCurrentScore(currentScore + 1);
        if (currentScore > highScore) {
          highScore = currentScore;
        }
      } else {
        setGameOver(true);
      }
    } else {
      console.log("Right Country Chosen");
      if (leftCountryValue < rightCountryValue) {
        setCurrentScore(currentScore + 1);
        if (currentScore > highScore) {
          highScore = currentScore;
        }
      } else {
        setGameOver(true);
      }
    }
    console.log(gameOver);
    setRoundOver(true);
    if(!gameOver) {
      setTimeout(() => {
        setRoundOver(false);
      }, 3000);
    }
  }

 


  // const colRef = collection(db, "countries");
  // getDocs(colRef)
  //   .then((snapshot) => {
  //     console.log(snapshot.docs);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

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
              <p className={`text-2xl font-bold ${roundOver ? gameOver ? 'text-red-500' : 'text-green-500' : 'text-white'}`}>{category}</p>
            </div>
            <div className={"flex flex-row justify-between w-full px-4 lg:px-8 pt-8 text-sm"}>
              <div className="relative flex flex-col items-center w-24 pt-1">
                <p className="mb-4">{leftCountry}</p>
                <p>{roundOver ? leftCountryValue : ""}</p>
                <p className="absolute underline whitespace-pre bottom-10">                        </p>
              </div>
              <div className="flex flex-col">
                <button onClick={event => handleChoice(1)} className="px-8 pb-1 mb-3 text-3xl font-medium text-center ring bg-secondary-dark ring-indigo-600 hover:bg-indigo-600 rounded-xl">&gt;</button>
                <button onClick={event => handleChoice(2)} className="px-8 pb-1 mb-3 text-3xl font-medium text-center ring bg-secondary-dark ring-indigo-600 hover:bg-indigo-600 rounded-xl">&lt;</button>
              </div>
              <div className="relative flex flex-col items-center w-24 pt-1">
                <p className="mb-4">{rightCountry}</p>
                <p>{roundOver ? rightCountryValue : ""}</p>
                <p className="absolute underline whitespace-pre bottom-10">                        </p>
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