import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-primary-dark h-screen w-screen flex flex-col items-center">
      <nav className="bg-secondary-dark border-gray-200 px-2 sm:px-4 py-2.5 rounded w-[800px] mt-5">
        <div className="container flex flex-row flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <h2 className="text-white font-bold">Geo Games</h2>
          </div>
          <div className="flex items-center">
            <h4 className="text-gray-400">About</h4>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home
