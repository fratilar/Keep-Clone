import React from "react";
import NotesList from "../containers/NotesList";
import Sidebar from "../containers/Sidebar";

function Notes({ showSide, searchNote }) {
   return (
      <div className="flex mt-[72px]">
         <Sidebar showSide={showSide} />
         <NotesList searchNote={searchNote} />
      </div>
   );
}

export default Notes;
