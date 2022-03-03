import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Notes, Memento, Etichete, Arhiva, CosDeGunoi } from "./pages/index";

function App() {
   const [searchNote, setSearchNote] = useState("");
   const [showSide, setShowSide] = useState(true);

   return (
      <div className="min-h-screen w-full overflow-x-hidden">
         <Navbar handleSearch={setSearchNote} showSide={showSide} setShowSide={setShowSide} />

         <Routes>
            <Route path="/" element={<Notes showSide={showSide} searchNote={searchNote} />} />
            <Route path="/memento" element={<Memento showSide={showSide} />} />
            <Route path="/etichete" element={<Etichete showSide={showSide} />} />
            <Route path="/arhiva" element={<Arhiva showSide={showSide} />} />
            <Route path="/cosdegunoi" element={<CosDeGunoi showSide={showSide} />} />
         </Routes>
      </div>
   );
}

export default App;
