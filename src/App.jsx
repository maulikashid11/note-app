import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [note, setNote] = useState(JSON.parse(localStorage.getItem('note')) || '')

  const saveToLs = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
    localStorage.setItem('note', JSON.stringify(note))
  }
  saveToLs()
  const addNote = () => {
    setNotes([...notes, { note, id: crypto.randomUUID() }])
    setNote('')
    saveToLs()
  }

  const editNote = (e, id) => {
    let item = notes.findIndex(item => item.id === id)
    setNote(notes[item].note)
    let newNotes = notes.filter((item) => item.id !== id)
    setNotes(newNotes)
    saveToLs()

  }

  const deleteNote = (e, id) => {
    let newNotes = notes.filter((item) => item.id !== id)
    setNotes(newNotes)
    saveToLs()
  }
  return (
    <>
      <Navbar />
      <main className="container bg-purple-300 md:w-[90%] mx-auto mt-5 p-5 rounded-xl h-[90vh]">
        <h2 className='font-bold text-xl mb-2'>Add a note</h2>
        <div className="add-note flex flex-col md:flex-row gap-2">
          <input value={note} onChange={(e) => { setNote(e.target.value) }} type="text" className='bg-white rounded mr-5 md:w-1/2 px-2 font-bold' />
          <button onClick={addNote} className='bg-green-400 px-3 py-1 rounded font-bold text-white outline-0'>Add</button>
        </div>
        <div className="notes-container">
          <h2 className='font-bold mb-5'>Your notes</h2>
          <div className="notes flex flex-wrap gap-5">
            {
              notes.map((item) => {
                return <article key={item.id} className="note w-[225px]  rounded overflow-hidden">
                  <div className="edit-delete bg-violet-800 p-1 text-white text-sm font-bold  ">
                    <button onClick={(e) => { editNote(e, item.id) }} className='mx-2 cursor-pointer border-1 p-1 rounded '>Edit</button>
                    <button onClick={(e) => { deleteNote(e, item.id) }} className='mx-2 cursor-pointer border-1 p-1 rounded '>Delete</button>
                  </div>
                  <div className="content ">
                    <p className='bg-white p-2 text-sm min-h-[150px] font-bold'>{item.note}</p>
                  </div>
                </article>
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}
