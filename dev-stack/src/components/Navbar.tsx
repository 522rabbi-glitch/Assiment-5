
import Logo from '../assets/logo-text.png'
 function Navbar() {


  return (
       <nav className="sticky top-0 z-50 bg-white container mx-auto flex items-center justify-between px-10 py-4 border-b border-gray-200">
     
     
     {/* Hambar logo only mobile */}
    
     <img src='/hamburger.png' className="block sm:hidden my-3" alt="" />

     {/*  logo  mobile+pc */}
     <img src={Logo} alt="" />

      {/* Menu Links */}
      <div>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="text-pink-500 cursor-pointer">Home</li>
        <li className="cursor-pointer hover:text-pink-500">Technologies</li>
        <li className="cursor-pointer hover:text-pink-500">Projects</li>
        <li className="cursor-pointer hover:text-pink-500">About</li>
        <li className="cursor-pointer hover:text-pink-500">Contact</li>
      </ul>
      </div>
      

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 font-medium">Sign In</button>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-medium">
          Sign Up
        </button>
      </div>
    </nav>
  )
}
export default Navbar;