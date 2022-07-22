import { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import WorldCountriesMap from "./maps/WorldCountriesMap";
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthModal from "./components/AuthModal";
import { match } from "assert";

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

  const [gameOver, setGameOver] = useState(false);
  const [roundOver, setRoundOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const [category, setCategory] = useState("");

  
  const [leftCountry, setLeftCountry] = useState({});
  const [rightCountry, setRightCountry] = useState({});
  const [leftCountryName, setLeftCountryName] = useState("");
  const [rightCountryName, setRightCountryName] = useState("");
  const [leftCountryData, setLeftCountryData] = useState(0);
  const [rightCountryData, setRightCountryData] = useState(0);

  console.log(leftCountryData);
  console.log(rightCountryData);

  const countriesRef = collection(db, "countries");
  const countryList = ["ARG", "AUS", "BRA", "CAN", "CHN", "DZA", "IND", "KAZ", "RUS", "USA"];
    
  const [leftIndex, setLeftIndex] = useState(Math.floor(Math.random() * countryList.length));

  useEffect(() => {
    const fillGame = async () => {
      var right = Math.floor(Math.random() * countryList.length);
      while (leftIndex === right) {
        right = Math.floor(Math.random() * countryList.length);
      }
      const docSnap = await (await getDoc(doc(countriesRef, countryList[leftIndex]))).data();
      console.log(docSnap);
      if(docSnap !== undefined) {
        setLeftCountry(docSnap);
        setLeftCountryName(docSnap.name);
        setLeftCountryData(docSnap[parseCategory()]);
      } 
      const docSnap2 = await (await getDoc(doc(countriesRef, countryList[right]))).data();
      if(docSnap2 !== undefined) {
        setRightCountry(docSnap2);
        setRightCountryName(docSnap2.name);
        setRightCountryData(docSnap2[parseCategory()]);
      }
    }
    fillGame();
    getCategory();
  }, [gameCount])
    

  function getCategory () {
    // pick a random category from the list that is different from the last one
    const categoryList = ["Population", "Border Countries", "Highest Point", "Land Area"];
    const lastCategory = category;
    let newCategory = categoryList[Math.floor(Math.random() * categoryList.length)];
    while (newCategory === lastCategory) {
      newCategory = categoryList[Math.floor(Math.random() * categoryList.length)];
    }
    setCategory(newCategory);
  }

  function parseCategory () {
    if (category === "Population") {
      return "population";
    }
    else if (category === "Border Countries") {
      return "borderCountries";
    }
    else if (category === "Highest Point") {
      return "highestPoint";
    }
    else if (category === "Land Area") {
      return "landArea";
    }
    return "";
  }

  async function handleChoice(choice: number) {
    if (gameOver) { return; }
    if (roundOver) { return; } 

    setRoundOver(true);
    if (choice === 1) {
      console.log("Left Country Chosen");
      if (leftCountryData > rightCountryData) {
        setCurrentScore(currentScore + 1);
      } else {
        setGameOver(true);
        if(currentScore > highScore) {
          setHighScore(currentScore);
        }
        return;
      }
    } else {
      console.log("Right Country Chosen");
      if (leftCountryData < rightCountryData) {
        setCurrentScore(currentScore + 1);
      } else {
        setGameOver(true);
        if(currentScore > highScore) {
          setHighScore(currentScore);
        }
        return;
      }
    }
    
    if(!gameOver) {
      setTimeout(() => {
        setRoundOver(false);
        getCategory();
        shiftCountries();
      }, 3000);
    }
    
  }

  async function shiftCountries () {
    setRightCountry(leftCountry);
    setRightCountryName(leftCountryName);
    setRightCountryData(leftCountryData);
    var left = Math.floor(Math.random() * countryList.length);
    while (left === leftIndex) {
      left = Math.floor(Math.random() * countryList.length);
    } 
    setLeftIndex(left);
    const docSnap = await (await getDoc(doc(countriesRef, countryList[left]))).data();
    if(docSnap !== undefined) {
      setLeftCountry(docSnap.name);
      setLeftCountryData(docSnap[parseCategory()]);
    }
  }

  
   // get the countries collection
  
  


  async function handleNewRound( oldCountry: string ) {
    // Get 2 random countries from the list of countries
    // Get a random value from the list of values
    // Set the left country to the random country
    // Set the right country to the random country
    // Set the left country value to the random value
    // Set the right country value to the random value
    
    // rightCountry = oldCountry;
    // let index = Math.floor(Math.random() * countryList.length);
    // leftCountry = countryList[index];
    // const countryDoc = doc(db, "USA");
    // const docSnap = await getDoc(countryDoc);
    
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
            {/* <WorldCountriesMap countries={[leftCountry, rightCountry]} /> */}
          </div>
          <div className="bg-tertiary-dark overflow-hidden w-[450px] lg:w-[550px] md:h-[40vh] absolute top-[45vh] rounded-xl flex flex-col">
            <div className="mt-2 text-center">
              <p className="text-base text-gray-200">Higher Lower</p>
              <p className={`text-2xl font-bold ${roundOver ? gameOver ? 'text-red-500' : 'text-green-500' : 'text-white'}`}>{category}</p>
            </div>
            <div className={"flex flex-row justify-between w-full px-4 lg:px-8 pt-8 text-sm"}>
              <div className="relative flex flex-col items-center w-24 pt-1">
                <p className="mb-4">{leftCountryName}</p>
                <p>{roundOver ? leftCountryData : ""}</p>
                <p className="absolute underline whitespace-pre bottom-10">                        </p>
              </div>
              <div className="flex flex-col">
                <button onClick={event => handleChoice(1)} className="px-8 pb-1 mb-3 text-3xl font-medium text-center ring bg-secondary-dark ring-indigo-600 hover:bg-indigo-600 rounded-xl">&gt;</button>
                <button onClick={event => handleChoice(2)} className="px-8 pb-1 mb-3 text-3xl font-medium text-center ring bg-secondary-dark ring-indigo-600 hover:bg-indigo-600 rounded-xl">&lt;</button>
              </div>
              <div className="relative flex flex-col items-center w-24 pt-1">
                <p className="mb-4">{rightCountryName}</p>
                <p>{roundOver ? rightCountryData : ""}</p>
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