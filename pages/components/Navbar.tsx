interface NavbarProps {
  authModal: Function
}

export default function Navbar ( { authModal }: NavbarProps ) {


  return (
    <nav className="h-[64px] w-full bg-primary-dark z-40">
      <div className="container h-[64px] flex flex-row items-center justify-around mx-auto">
        <div className="block md:hidden w-[95px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-8">
          <a href="../"className="flex flex-row items-center font-sans text-xl font-bold text-white gap-x-2 " >
            <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full border-indigo-500/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" className="h-6 pb-.5" alt="logo py-auto"/>
            </div>
            Features
          </a>
          <div className="hidden md:block h-[30px] w-1 border-l-2"></div>
          <a href="games" className="hidden font-sans text-sm font-normal text-gray-300 md:block hover:text-white">Games</a>
          <a className="hidden font-sans text-sm font-normal text-gray-300 md:block hover:text-white">Random</a>
          <a className="hidden font-sans text-sm font-normal text-gray-300 md:block hover:text-white">About</a>
        </div>
        <div className="flex items-center">
          <button onClick={event => authModal()} className="px-3 py-1 ml-8 font-sans text-sm font-normal text-gray-300 rounded-md ring-2 ring-gray-300 hover:ring-white hover:text-white hover:animate-pulse">
            Log in
          </button>
        </div>
      </div>
    </nav>
  )
}