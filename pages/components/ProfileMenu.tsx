import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

interface NavbarProps {
  openProfile: boolean
  handleOpenProfile: Function
}


export default function ProfileMenu( { openProfile, handleOpenProfile }: NavbarProps ) {

  function handleSignOut () {
    handleOpenProfile();
    signOut(auth);
  }

  return (
    <div className={openProfile ? "block" : "hidden"}>
      <div className="absolute z-40 text-white bg-secondary-dark top-10 right-0 rounded-lg h-[100px] w-[200px]">
        <div className="flex flex-col items-center justify-center mt-2">
          <button onClick={event => handleSignOut()} className="w-full overflow-hidden hover:bg-slate-700">
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}