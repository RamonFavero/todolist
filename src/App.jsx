import { useState } from 'react';
import './App.css';



function List(props) {
  return(
      <li>
        {props.title}
      </li>
      )
    }

function App() {
const [note,setNote]=useState([]);
const [text,setText]=useState([]);

function handleChange(e) {
  setText(e.target.value)
}

function handleClick(e) {
  e.preventDefault()
  setText("")
  setNote(prevNotes=>{
    return [...prevNotes,text]
  })

}

  return (
    <div className="App">
     <form className="form">
    <p className="heading">To-Do List</p>
    <div>
    <input onChange={handleChange} autoFocus value={text} name="nota" type="text" className="input"  />
    <button onClick={handleClick} className="btn">Add</button>
    </div>
    <ul>
      {note.map((note)=>{
        return <List title={note} />
      })}
      </ul>
   </form>
    </div>
  );
}

export default App;
