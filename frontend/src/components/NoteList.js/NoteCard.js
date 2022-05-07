import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../store/notes'

function NoteCard({ note }) {
  const dispatch = useDispatch();
  const [noteId, setnoteId] = useState(note.id)
  const notes = useSelector(state => state.notes)
  const createdAt = new Date(note?.createdAt)
  const singleNote = notes[noteId]
  const convertedDate = createdAt.toDateString();

  const handleDelete = async () => {
    const oldNote = await dispatch(deleteNote(singleNote))
  }

return (
  <div className="note-card" onClick={ () => { setnoteId(note?.id); localStorage.setItem('note', note?.id) } }>
    <div className="note-card-head">
      <div className='note-card-id'>note {note?.id}</div>
      <div className="note-card-title">{note?.title}</div>
      <div className="note-card-desc ">{note?.content}</div>
      <div className='btn-box'>
        <button className='btn-blue'>Edit Note</button>
        <button className='btn-red-card'
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    <div className="note-card-date">{convertedDate}</div>
    </div>
  </div>
);
}

export default NoteCard;
