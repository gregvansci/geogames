import { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";

const HigherLower: NextPage = () => {
  return (
    <div className="flex font-sans flex-col items-center h-auto max-h-screen bg-primary-dark min-w-[600px]">
      <Head>
        <title>Geo Games</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar/>
      <section className="relative flex flex-col items-center w-full h-screen mt-12 text-white bg-gray-900">
        <div className="">
          <div>
            <p>Map</p>
          </div>
          <div>
            <p>Game</p>
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-row justify-between px-4 w-[500px] md:w-[800px] lg:w-[1000px]">
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