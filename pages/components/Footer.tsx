
export default function Footer () {
  return (
    <footer className="w-full py-8 mt-24 bg-secondary-dark">
        <div className="flex flex-col items-center justify-center gap-1 text-white">
          <div className="flex flex-row items-center gap-1">
            <div className="flex items-center justify-center w-6 h-6 border-2 rounded-full border-indigo-500/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" className="h-4 pb-.5" alt="logo py-auto"/>
            </div>
            <h4 className="font-medium">Features</h4>
          </div>
          <p className="font-thin text-gray-300">Exercise your perspective.</p>
        </div>
      </footer>
  )
}