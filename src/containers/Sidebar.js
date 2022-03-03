import React from "react";
import SidebarRow from "../components/SidebarRow";
import { AiOutlineBulb, AiOutlineBell } from "react-icons/ai";
import { MdOutlineArchive, MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";

function Sidebar({ showSide }) {
   return (
      <div className="w-full mt-2 flex-[0.6] pl-5 md:pl-0">
         <NavLink to="/">
            <SidebarRow showSide={showSide} Icon={AiOutlineBulb} title="Note" />
         </NavLink>

         <NavLink to="/memento">
            <SidebarRow showSide={showSide} Icon={AiOutlineBell} title="Mementouri" />
         </NavLink>

         <NavLink to="/etichete">
            <SidebarRow showSide={showSide} Icon={MdOutlineEdit} title="Editati etichetele" />
         </NavLink>

         <NavLink to="/arhiva">
            <SidebarRow showSide={showSide} Icon={MdOutlineArchive} title="Arhiva" />
         </NavLink>

         <NavLink to="/cosdegunoi">
            <SidebarRow showSide={showSide} Icon={IoTrashOutline} title="Cos de gunoi" />
         </NavLink>
      </div>
   );
}

export default Sidebar;
