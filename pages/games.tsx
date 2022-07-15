import { NextPage } from "next"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import GameCard from "./components/GameCard"
import Head from "next/head"

const Games: NextPage = () => {
  return (
    <div className="flex font-sans flex-col items-center h-auto bg-primary-dark min-w-[600px]">
      <Head>
        <title>Geo Games</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <section className="w-[500px] md:w-[800px] lg:w-[1000px] mt-10 font-sans text-white bg-gray-900 ">
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
    </div>
  )
}

export default Games