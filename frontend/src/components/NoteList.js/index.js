import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useModal } from '../../context/ModalContext';
import './NoteList.css'

function NoteList() {

  return (
    <div className='note-list'>
      <div className='note-list-header'>
        <div className='note-list-title'>
            <h1 className='note-h1'>
              Notes
            </h1>
        </div>
        <div className='note-list-sub-header'>
          <div className='note-count'>
            notes length
          </div>
        </div>
      </div>
      <div className='note-list-body'>
        <div className='note-card'>
          <div className='note-card-head'>
            <div className='note-card-title'>
              note title
            </div>
            <div className='note-card-desc '>
              some description
            </div>
          </div>
          <div className='note-card-date'>
            date
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteList
