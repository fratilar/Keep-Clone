import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import Sidebar from "../containers/Sidebar";

function CosDeGunoi({ showSide }) {
   return (
      <div className="flex mt-[72px]">
         <Sidebar showSide={showSide} />

         <div className="w-full h-[500px] text-center flex flex-col items-center justify-center">
            <IoTrashOutline className="w-16 h-16 text-gray-400" />
            <h1 className="mt-4 text-2xl text-gray-400">Nu exista note in cosul de gunoi</h1>
         </div>
      </div>
   );
}

export default CosDeGunoi;
