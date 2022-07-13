import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeMap from './components/WelcomeMap'

const Home: NextPage = () => {
  return (
    <div className="flex font-sans flex-col items-center h-auto bg-primary-dark min-w-[600px]">
      <Navbar/>
      <section className="bg-gray-900 w-[500px] md:w-[850px] lg:w-[1150px] mt-12">
        <div className="grid py-16 mx-auto max-w-screen md:grid-cols-12 md:gap-8">
          <div className="mr-auto place-self-center md:col-span-7">
            <h1 className="max-w-2xl mb-4 font-sans text-4xl font-extrabold tracking-tight text-white md:text-5xl">Train your geography skills</h1>
            <p className="max-w-2xl mb-6 text-lg font-light text-gray-400 md:mb-8 md:text-xl">From the peak of Mt. Everest to the depths of Death Valley, learn what makes each country unique.</p>
            <a href="games" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
              Get started 
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
          <div className="invisible h-0 mt-0 md:h-auto md:visible md:col-span-5">
            <WelcomeMap/>
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
