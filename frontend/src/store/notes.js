import { csrfFetch } from './csrf';

//Action variables
const GET_NOTES = 'notes/GET_NOTES'
const GET_NOTE = 'notes/GET_NOTE'
const POST_NOTE = 'notes/POST_NOTE'
const PUT_NOTE = 'notes/PUT_NOTE'
const DELETE_NOTE = 'notes/DELETE_NOTE'

//Action Creators
const getUserNotes = (note) => {
  return {
    type: GET_NOTES,
    payload: note
  }
}

const getNote = (noteId) => {
  return {
    type: GET_NOTE,
    payload: noteId
  }
}

const postNote = (note) => {
  return {
    type: POST_NOTE,
    payload: note
  }
}

const putNote = (note) => {
  return {
    type: PUT_NOTE,
    payload: note
  }
}

const removeNote = (note) => {
  return {
    type: DELETE_NOTE,
    payload: note
  }
}

//Thunks

//GET all notes owned by user
export const getNotes = (userId) => async dispatch => {
  const res = await fetch(`/api/notes/${userId}`);

  if (res.ok) {
    const allNotes = await res.json();
    dispatch(getUserNotes(allNotes));
  }
};

//GET a single note
export const getSingleNote = (noteId) => async dispatch => {
  const res = await fetch(`/api/notes/note/${noteId}`)

  if (res.ok) {
    const singleNote = await res.json();
    dispatch(getNote(singleNote));
  }
}

//POST create a note
export const createNote = (note) => async dispatch => {
  const res = await csrfFetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })

  if (res.ok) {
    const newNote = await res.json()

    dispatch(postNote(newNote));
  }
};

//PUT edit a note
export const editNote = (note, noteId) => async dispatch => {
  const res = await csrfFetch(`/api/notes/note/${noteId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })

  if (res.ok) {
    const updatedNote = await res.json();

    dispatch(putNote(updatedNote))
  }
}

//DELETE delete a note
export const deleteNote = (note) => async dispatch => {
  const res = await csrfFetch(`/api/notes/note/${note.id}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    const oldNote = await res.json();
    dispatch(removeNote(note));
  }
}

const initialState = {};

export default function notesReducer (state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_NOTES:
      newState = {};
      action.payload.forEach(note => {
        newState[note.id] = note
      });
      return newState;
    case GET_NOTE:
      newState = { ...state, note: action.payload }
      return newState;
    case POST_NOTE:
      newState = { ...state, [action.payload.id]: action.payload }
      return newState;
    case DELETE_NOTE:
      newState = { ...state };
      delete newState[action.payload.id]
      return newState
    case PUT_NOTE:
      newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState
    default:
      return state
  }
}
