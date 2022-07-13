import { NextPage } from "next"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Games: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <h1 className="">Games</h1>
      <Footer/>
    </div>
  )
}

export default Games