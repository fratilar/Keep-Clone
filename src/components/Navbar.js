import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../images/keep-logo.png";
import Person from "../images/person-icon.png";

function Navbar({ handleSearch, setShowSide, showSide }) {
   return (
      <div className="flex items-center bg-white shadow-md py-2 px-4 fixed top-0 left-0 right-0 z-50">
         <div className="flex items-center justify-start flex-1 lg:flex-[0.4]">
            <FiMenu
               onClick={() => setShowSide(!showSide)}
               className="hidden md:flex text-xl bg-transparent hover:bg-gray-100 w-12 h-12 p-3 rounded-full cursor-pointer"
            />
            <img src={Logo} alt="Logo" className="h-10 mx-2" />
            <h1 className="text-2xl text-gray-500">Keep</h1>
         </div>

         <div className="flex items-center justify-start flex-1 flex-shrink bg-gray-100">
            <div className="flex items-center shadow-sm shadow-gray-400 p-2 rounded-md sm:w-full">
               <label htmlFor="search">
                  <AiOutlineSearch className="bg-transparent hover:bg-gray-200 w-10 h-10 text-gray-600 p-2 rounded-full cursor-pointer" />
               </label>
               <input
                  id="search"
                  className="bg-transparent outline-none ml-2 pr-3 placeholder-text-gray-500"
                  type="text"
                  placeholder="Cauta note"
                  onChange={(e) => handleSearch(e.target.value)}
               />
            </div>
         </div>

         <div className="flex items-center justify-end space-x-2 flex-[0.5]">
            <div className="flex items-center p-1">
               <img src={Person} className="rounded-full bg-gray-300 w-8 h-8 object-cover" alt="profile" />
               <p className="hidden md:flex cursor-pointer font-semibold px-2 hover:underline">Log In</p>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
