import React from "react";
import { MdOutlineArchive } from "react-icons/md";
import Sidebar from "../containers/Sidebar";

function Arhiva({ showSide }) {
   return (
      <div className="flex mt-[72px]">
         <Sidebar showSide={showSide} />

         <div className="w-full h-[500px] text-center flex flex-col items-center justify-center">
            <MdOutlineArchive className="w-16 h-16 text-gray-400" />
            <h1 className="mt-4 text-2xl text-gray-400">Notele arhivate apar aici</h1>
         </div>
      </div>
   );
}

export default Arhiva;
