
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Details
//         pack="FREE"
//         price="&#36;0"
//         periods="/month"
       
//         user="✔ Single User"
//         storage="✔ 5GB Storage"
//         publicProjects="✔ Unlimited Public Projests"
//         comAcc="✔ Community Access"
//         prvPro="❌ Unlimited Private Projects"
//         phSup="❌ Dedicated Phone Support"
//         subdom="❌ Free Subdomine"
//         msp="❌ Monthly Status Report"
//       />

//       <Details
//         pack="PLUS"
//         price="&#36;9"
//         periods="/month"
       
//         user="✔ 5 User"
//         storage="✔ 50GB Storage"
//         publicProjects="✔ Unlimited Public Projests"
//         comAcc="✔ Community Access"
//         prvPro="✔ Unlimited Private Projects"
//         phSup="✔ Dedicated Phone Support"
//         subdom="✔ Free Subdomine"
//         msp="❌ Monthly Status Report"
//       />

//       <Details
//         pack="PRO"
//         price="&#36;49"
//         periods="/month"
       
//         user="✔ Unlimited Users"
//         storage="✔ 150GB Storage"
//         publicProjects="✔ Unlimited Public Projests"
//         comAcc="✔ Community Access"
//         prvPro="✔ Unlimited Private Projects"
//         phSup="✔ Dedicated Phone Support"
//         subdom="✔ Unlimited Free Subdomine"
//         msp="✔ Monthly Status Report"
//       />
//     </div>
//   );
// }

// export default App;

// function Details(props) {
//   return (
//     <div className="card">
//       <p class="pack">{props.pack}</p>
//       <h1>
//         {props.price}
//         <span class="periods">{props.periods}</span>
//       </h1>
//       <hr></hr>
//       <p class="para">
//          {props.user}
//       </p>
//       <p class="para">
//          {props.storage}
//       </p>
//       <p class="para">
//          {props.publicProjects}
//       </p>
//       <p class="para">
//          {props.comAcc}
//       </p>
//       <p class="para">
//          {props.prvPro}
//       </p>
//       <p class="para">
//          {props.phSup}
//       </p>
//       <p class="para">
//          {props.subdom}
//       </p>
//       <p class="para">
//          {props.msp}
//       </p>
//       <button>BUTTON</button>
//     </div>
//   );
// }


// day 28 today pratice
// without usecontext


// import React, { useState } from "react";

// function Parent() {
// const [fName] = useState("firstName");
// const [lName] = useState("LastName");
// return (
// 	<>
// 	<div>This is a Parent component</div>
// 	<br />
// 	<ChildA fName={fName} lName={lName} />
// 	</>
// );
// }

// function ChildA({ fName, lName }) {
// return (
// 	<>
// 	This is ChildA Component.
// 	<br />
// 	<ChildB fName={fName} lName={lName} />
// 	</>
// );
// }

// function ChildB({ fName, lName }) {
// return (
// 	<>
// 	This is ChildB Component.
// 	<br />
// // 	<ChildC fName={fName} lName={lName} />
// // 	</>
// // );
// // }

// // function ChildC({ fName, lName }) {
// // return (
// // 	<>
// // 	This is ChildC component.
// // 	<br />
// // 	<h3> Data from Parent component is as follows:</h3>
// // 	<h4>{fName}</h4>
// // 	<h4>{lName}</h4>
// // 	</>
// // );
// // }

// // export default Parent;

// // A Simple Note taking Application
// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';

// function Note({note}) {
//   return (
//     <li>{ note.content }</li>
//   )
// }

// function App(props) {
  
//   // define a state
//   const [notes, setNotes] = useState([]);
//   const [newNoteContent, setNewNoteContent] = useState('');
//   const [newNoteImportant, setNewNoteImportant] = useState('');
//   const [showStatus, setShowStatus] = useState('all');
//   //run always
//   useEffect(() => {
// 	axios
// 	 .get (' http://localhost:3001/notes')
// 	.then (response=> setNotes(response.data));
//   })

//   // get the data
//   useEffect(() => {
//     setNotes(props.notes);
//   }, []);

//   // create a reference for the first input text box
//   const newNoteContentRef = useRef(null);


//   // define the addNote method
//   let addNote = (event) => {
//     event.preventDefault();
    
//     // create a new object
//     let noteObject = {
//       id: notes.length + 1,
//       content: newNoteContent,
//       important: newNoteImportant==='true',
//     }

//     // add the new object to the notes state
//     setNotes(notes.concat(noteObject));

//     // console.log(noteObject);

//     // clear the input text box
//     setNewNoteContent('');
//     setNewNoteImportant('');
//     newNoteContentRef.current.focus();
//   }

//   let handleNoteChange = (event) => {
//     setNewNoteContent(event.target.value);
//   }

//   let handleSelectChange = (event) => {
//     setNewNoteImportant(event.target.value);
//   }

//   let handleStatusChange = (event) => {
//     setShowStatus(event.target.value);
//     // console.log(event.target.value);
//   }

//   let filterNotes = (notes, status) => {
//     switch (status) {
//       case 'all':
//         return notes;
//       case 'imp':
//         return notes.filter(note => note.important === true);
//       case 'nonimp':
//         return notes.filter(note => note.important === false);
//     }
//   }

//   const notesFiltered = filterNotes(notes, showStatus);

//   return (
//     <div>
//       <h1>Notes</h1>

//       <label>
//         <input type='radio' name='filter' value="all" checked={ showStatus === 'all' } onChange={handleStatusChange} />
//         Show All Notes
//       </label>

//       <label>
//         <input type='radio' name='filter' value="imp" checked={ showStatus === 'imp' } onChange={handleStatusChange} />
//         Show Important Notes
//       </label>

//       <label>
//         <input type='radio' name='filter' value="nonimp" checked={ showStatus === 'nonimp' } onChange={handleStatusChange} />
//         Show Non-Important Notes
//       </label>

//       <ul>
//         {notesFiltered.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>

//       {/* add a simple form for adding notes */}
//       <form onSubmit={addNote}>
//         <input
//           value={newNoteContent}
//           onChange={handleNoteChange}
//           placeholder='type a note...' 
//           ref={newNoteContentRef}
//           /> <br /><br />
//         {/* <input
//           type='text'
//           placeholder='enter true or false'
//           value={newNoteImportant}
//           onChange={(e) => setNewNoteImportant(e.target.value)} /> */}
//         <label form='dropdownNoteImportant'>Is Important: </label>
//         <select
//           id='dropdownNoteImportant'
//           onChange={handleSelectChange}
//           value={newNoteImportant}>
//           <option>--Select--</option>
//           <option>true</option>
//           <option>false</option>
//         </select>
//         <br /><br />
//         <button type='submit'>Add New Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;