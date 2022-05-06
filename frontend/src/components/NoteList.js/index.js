import React from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useModal } from '../../context/ModalContext';
import NoteCard from './NoteCard';
import './NoteList.css'

function NoteList({ notes }) {
  const sessionUser = useSelector(state => state.session.user)
  const notesArr = Object.values(notes);

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
            {notesArr.length} notes
          </div>
        </div>
      </div>
      <div className='note-list-body'>
        {notesArr?.map(note => (
          <NoteCard key={note?.id} note={note}/>
        ))}
      </div>
    </div>
  )
}

export default NoteList
