import React, { useEffect, useState } from "react";
import Note from "../components/Note";
import { nanoid } from "nanoid";
import { Reorder } from "framer-motion";
import { BiCheckboxChecked } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineCloseSquare, AiOutlineBulb } from "react-icons/ai";

function NotesList({ searchNote }) {
   const [textarea, setTextarea] = useState(false);
   const [checkbox, setCheckbox] = useState(false);

   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

   const [input, setInput] = useState({
      title: "",
      content: "",
   });

   useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
   }, [notes]);

   function handleChange(e) {
      const { name, value } = e.target;
      setInput((prevInput) => {
         return {
            ...prevInput,
            [name]: value,
         };
      });
   }

   function handleSubmit(e) {
      e.preventDefault();
      addNote(input);
      setInput({ title: "", content: "" });
      setTextarea(false);
      setCheckbox(false);
   }

   function addNote(note) {
      const newNote = {
         id: nanoid(),
         title: note.title,
         content: note.content,
         completed: false,
         date: new Date().toLocaleString(),
         color: "#ffffff",
      };

      setNotes((prevNotes) => {
         return [...prevNotes, newNote];
      });
   }

   function editNote(id, title, content) {
      const tobeUpdated = notes.find((singleNote) => singleNote.id === id);
      tobeUpdated.id = id;
      tobeUpdated.title = title;
      tobeUpdated.content = content;
      tobeUpdated.date = new Date().toLocaleString();

      setNotes([...notes]);
   }

   function deleteNote(id) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
   }

   function changeColor(id, color) {
      const tobeUpdated = notes.find((singleNote) => singleNote.id === id);
      tobeUpdated.color = color;

      setNotes([...notes]);
   }

   function resetAdd() {
      setTextarea(false);
      setCheckbox(false);
      setInput({
         title: "",
         content: "",
      });
   }

   return (
      <div className="w-full px-8 relative">
         <form
            onSubmit={handleSubmit}
            className={`relative max-w-[600px] mx-auto bg-white shadow-md shadow-gray-300 p-2 rounded-md mt-8 flex items-center justify-between ${
               (textarea || checkbox) && "flex-col"
            }`}
         >
            <input
               type="text"
               name="title"
               value={input.title}
               onChange={handleChange}
               placeholder={textarea || checkbox ? "Titlu" : "Creati o nota..."}
               className="w-full p-2 outline-none placeholder:text-black placeholder:text-semibold text-lg"
               onClick={() => !checkbox && setTextarea(true)}
            />

            <div className={`${(textarea || checkbox) && "hidden"}`} onClick={() => setCheckbox(true)}>
               <BiCheckboxChecked className="w-7 h-7 cursor-pointer" />
            </div>

            {textarea && (
               <>
                  <textarea
                     name="content"
                     value={input.content}
                     onChange={handleChange}
                     placeholder="Creati o nota..."
                     className="w-full p-2 outline-none border-0 resize-none placeholder:text-sm placeholder:text-black"
                  />
                  <div className="w-full flex justify-end">
                     <button className="bg-green-500 py-1 px-4 rounded-md">Adaugati</button>
                  </div>
                  <AiOutlineCloseSquare
                     className="absolute top-5 right-5 w-6 h-6 cursor-pointer text-red-600"
                     onClick={resetAdd}
                  />
               </>
            )}

            {checkbox && (
               <>
                  <div className="w-full flex items-center">
                     <AiOutlinePlus />
                     <input
                        type="text"
                        name="content"
                        value={input.content}
                        onChange={handleChange}
                        placeholder="Creati o nota..."
                        className="w-full bg-transparent p-2 outline-none border-0 placeholder:text-sm placeholder:text-black"
                     />
                  </div>
                  <div className="w-full flex justify-end">
                     <button className="bg-green-500 py-1 px-4 rounded-md">Adaugati</button>
                  </div>
                  <AiOutlineCloseSquare
                     className="absolute top-5 right-5 w-6 h-6 cursor-pointer text-red-600"
                     onClick={resetAdd}
                  />
               </>
            )}
         </form>

         {!notes.length && (
            <div className="w-full h-[400px] text-center flex flex-col items-center justify-center">
               <AiOutlineBulb className="w-16 h-16 text-gray-400" />
               <h1 className="mt-4 text-2xl text-gray-400">Notele pe care le adaugati apar aici</h1>
            </div>
         )}

         <Reorder.Group values={notes} onReorder={setNotes} axis="x" className="my-grid w-full py-8 mt-8 z-0">
            {notes
               .filter((note) => {
                  return (
                     note.title.toLowerCase().includes(searchNote) || note.content.toLowerCase().includes(searchNote)
                  );
               })
               .map((note) => (
                  <Reorder.Item key={note.id} value={note}>
                     <Note
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        date={note.date}
                        color={note.color}
                        editNote={editNote}
                        deleteNote={deleteNote}
                        changeColor={changeColor}
                     />
                  </Reorder.Item>
               ))}
         </Reorder.Group>
      </div>
   );
}

export default NotesList;
