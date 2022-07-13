

export default function Navbar () {
  return (
    <nav className="fixed w-full px-2 py-4 border-b-2 md:px-4 md:mx-24 bg-primary-dark border-secondary-dark">
        <div className="container w-[500px] md:w-[800px] lg:w-[1000px] flex flex-row flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <h2 className="font-bold text-white">Geo Games</h2>
          </div>
          <div className="flex items-center gap-x-4">
            <h4 className="text-gray-400">Games</h4>
            <h4 className="text-gray-400">About</h4>
          </div>
        </div>
      </nav>
  )
}