import React, { useState } from 'react';
import NoteCard from './NoteCard';
import './NoteList.css'

function NoteList({ notes }) {
  const [selectedNoteId, setSelectedNoteId] = useState('')
  const notesArr = Object.values(notes);
  notesArr.reverse();

  return (
    <div className='note-list'>
      <div className='note-list-header'>
        <div className='note-list-title'>
            <h1 className='note-h1'>
              All Notes
            </h1>
        </div>
        <div className='note-list-sub-header'>
          <div className='note-count'>
          </div>
        </div>
      </div>
      <div className='note-list-body'>
        {notesArr?.map(note => (
          <NoteCard key={note?.id} note={note} setSelectedNoteId={setSelectedNoteId} />
        ))}
      </div>
    </div>
  )
}

export default NoteList
