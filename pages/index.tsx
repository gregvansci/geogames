import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-auto bg-primary-dark min-w-[600px]">
      <Navbar/>
      <section className="bg-gray-900 w-[500px] md:w-[850px] lg:w-[1150px] mt-12">
        <div className="grid py-16 mx-auto max-w-screen md:grid-cols-12 md:gap-8">
          <div className="mr-auto place-self-center md:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">Train your geography skills</h1>
            <p className="max-w-2xl mb-6 text-lg font-light text-gray-400 md:mb-8 md:text-xl">From the peak of Mt. Everest to the depths of Death Valley, learn what makes each country unique.</p>
          </div>
          <div className="hidden md:mt-0 md:col-span-5 md:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
          </div>
        </div>
      </section>
      <section className="w-[500px] md:w-[800px] lg:w-[1000px] mt-8">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold text-white">Featured Games</h2>
        </div>
        <div className="grid items-center grid-cols-2 pt-6 font-medium md:grid-cols-3 gap-y-6">
          <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
            <h4 className="absolute text-white bottom-2 left-1/4">Higher Lower</h4>
          </div>
          <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
            <h4 className="absolute text-white bottom-2 left-1/4">Higher Lower</h4>
          </div>
          <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
            <h4 className="absolute text-white bottom-2 left-1/4">Higher Lower</h4>
          </div>
          <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
            <h4 className="absolute text-white bottom-2 left-1/4">Higher Lower</h4>
          </div>
          <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
            <h4 className="absolute text-white bottom-2 left-1/4">Higher Lower</h4>
          </div>
          <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
            <h4 className="absolute text-white bottom-2 left-1/4">Higher Lower</h4>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
