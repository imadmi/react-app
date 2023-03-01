import { Link } from "react-router-dom"
// import { useState } from "react";
import logo from './logo.png'; 

export default function Navbar() {

  return (
    <nav className="  flex items-center justify-between flex-wrap bg-teal-500 p-4 h-20">
      <Link to="/react-app" >
         <img className="h-10 w-10 filter invert hover:brightness-0" src={logo} alt="Logo" />
      </Link>
      <div className="block lg:hidden">
        <svg className="right-0 fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </div>

      <div className="hidden lg:block">
        <div className="w-full block flex-grow lg:items-center lg:w-auto ">
          <div className=" text-sm lg:flex-grow">
          {/* <Link to="/game" className= "inline-block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">game</Link> */}
          <Link to="/react-app/Contact" className= "inline-block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-2 text-lg hover:font-bold duration-100">
            Contact
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
