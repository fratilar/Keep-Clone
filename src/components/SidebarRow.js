import React from "react";

function SidebarRow({ Icon, title, showSide }) {
   return (
      <div
         className={`flex items-center cursor-pointer ${
            !showSide ? "md:rounded-l-full md:pl-0 md:ml-4" : "md:rounded-l-none md:pl-4"
         } rounded-full space-x-6 mr-8 hover:bg-gray-100`}
      >
         <Icon className={`w-12 h-12 p-3 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer`} alt="icon" />
         {showSide && <p className="min-w-[220px] hidden md:inline-flex font-semibold">{title}</p>}
      </div>
   );
}

export default SidebarRow;
