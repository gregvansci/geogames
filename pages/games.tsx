import { NextPage } from "next"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import GameCard from "./components/GameCard"

const Games: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900">
      <Navbar />
      <section className="w-full mt-12 text-white bg-gray-900 ">
        <div className="items-center w-[500px] md:w-[800px] lg:w-[1000px] pt-12 m-auto">
          <h2 className="text-3xl font-bold">Game List</h2>
        </div>
        <div className="grid w-[500px] md:w-[800px] lg:w-[1000px] m-auto grid-cols-2 pt-6 font-medium md:grid-cols-3 gap-y-6">
          <GameCard title="HigherLower"/>
          <GameCard title="HigherLower"/>
          <GameCard title="HigherLower"/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Games