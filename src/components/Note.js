import React, { useState } from "react";
import { BsPalette } from "react-icons/bs";
import { IoTrashOutline, IoCheckboxOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import ReactTooltip from "react-tooltip";

const colors = [
   { color: "#FFFFFF" },
   { color: "#B0D0D3" },
   { color: "#F7AF9D" },
   { color: "#fcbf49" },
   { color: "#90be6d" },
];

function Note({ id, title, content, date, color, editNote, deleteNote, changeColor }) {
   const [showForm, setShowForm] = useState(false);
   const [edit, setEdit] = useState({
      id: id,
      title: title,
      content: content,
   });

   const [showColor, setShowColor] = useState(false);

   function handleEdit(e) {
      e.preventDefault();
      editNote(edit.id, edit.title, edit.content);

      setShowForm(false);
   }

   function handleValue(e) {
      const { name, value } = e.target;
      setEdit((prevInput) => {
         return {
            ...prevInput,
            [name]: value,
         };
      });
   }

   return (
      <>
         <div
            style={{ backgroundColor: color }}
            className="relative pt-4 px-4 pb-1 border border-gray-300 rounded-md md:max-w-[250px] hover:shadow-sm hover:shadow-gray-400"
         >
            <h1 className="capitalize text-xl mb-4 w-3/4 h-auto break-words font-semibold">{title}</h1>
            <pre className="text-base font-sans">{content}</pre>

            {/* <label htmlFor={title} className="flex items-center">
               <input type="checkbox" id={title} className="w-4 h-4 mr-2 mt-[2px]" />
               {content}
            </label> */}

            <p className="absolute top-2 right-2 w-12 text-xs text-gray-400 invert">{date}</p>

            <div className="relative flex flex-1 w-full justify-between mt-4">
               <div>
                  <IoCheckboxOutline
                     className="w-8 h-8 p-2 hover:bg-gray-300 hover:bg-opacity-40 rounded-full cursor-pointer focus:outline-none z-10"
                     data-tip
                     data-for="check"
                  />
                  <ReactTooltip place="bottom" effect="solid" className="!p-1 !text-xs" id="check">
                     Bifeaza tot
                  </ReactTooltip>
               </div>

               <div className="relative">
                  <BsPalette
                     className="w-8 h-8 p-2 hover:bg-gray-300 hover:bg-opacity-40 rounded-full cursor-pointer focus:outline-none z-10"
                     data-tip
                     data-for="color"
                     onClick={() => setShowColor(!showColor)}
                  />
                  <ReactTooltip place="bottom" effect="solid" className="!p-1 !text-xs" id="color">
                     Schimba culoarea
                  </ReactTooltip>

                  {showColor && (
                     <div className="cursor-pointer absolute -left-20 -bottom-20 flex space-x-2 bg-white shadow-md shadow-gray-200 p-2">
                        {colors.map((color, index) => (
                           <div
                              key={index}
                              style={{ backgroundColor: color.color }}
                              className="w-10 h-10 rounded-full border-2"
                              onClick={() => changeColor(id, color.color)}
                           ></div>
                        ))}
                     </div>
                  )}
               </div>

               <div>
                  <MdOutlineEdit
                     className="w-8 h-8 p-2 hover:bg-gray-300 hover:bg-opacity-40 rounded-full cursor-pointer focus:outline-none z-10"
                     data-tip
                     data-for="edit"
                     onClick={() => setShowForm(!showForm)}
                  />
                  <ReactTooltip place="bottom" effect="solid" className="!p-1 !text-xs" id="edit">
                     Editeaza nota
                  </ReactTooltip>
               </div>

               <div>
                  <IoTrashOutline
                     className="w-8 h-8 p-2 hover:bg-gray-300 hover:bg-opacity-40 rounded-full cursor-pointer focus:outline-none z-10"
                     onClick={() => deleteNote(id)}
                     data-tip
                     data-for="delete"
                  />
                  <ReactTooltip place="bottom" effect="solid" className="!p-1 !text-xs" id="delete">
                     Sterge nota
                  </ReactTooltip>
               </div>
            </div>
         </div>

         <div className={`${showForm ? "overlay" : "hidden"}`}>
            <form
               onSubmit={handleEdit}
               className={`w-[400px] flex flex-col flex-wrap z-20 min-h-[200px] mx-auto bg-white shadow-sm shadow-gray-300 p-2 rounded-md mt-8 ${
                  showForm ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50" : "hidden"
               }`}
            >
               <input
                  type="text"
                  name="title"
                  value={edit.title}
                  onChange={handleValue}
                  placeholder="Editati titlul..."
                  className="w-full mb-4 p-2 outline-none placeholder:text-black placeholder:text-semibold text-lg"
               />

               <textarea
                  name="content"
                  value={edit.content}
                  onChange={handleValue}
                  placeholder="Editati nota..."
                  className="w-full min-h-[150px] p-2 outline-none border-0 resize-none placeholder:text-sm placeholder:text-black"
               />
               <div className="w-full flex justify-end">
                  <button className="bg-green-500 py-1 px-4 rounded-md">Editati</button>
               </div>
            </form>
         </div>
      </>
   );
}

export default Note;
