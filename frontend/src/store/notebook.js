import { csrfFetch } from './csrf';

// GET all notebooks that is owned by the user
const GET_NOTEBOOKS = 'notebooks/GET_NOTEBOOKS'
const GET_NOTEBOOK = 'notebooks/GET_NOTEBOOK'

const getUserNotebooks = (notebooks) => {
  return {
    type: GET_NOTEBOOKS,
    payload: notebooks,
  };
};

const getNotebook = (notebookId) => {
  return {
    type: GET_NOTEBOOK,
    payload: notebookId
  }
}

export const getNotebooks = (userId) => async dispatch => {
  const res = await fetch(`/api/notebooks/${userId}`);

  if (res.ok) {
    const allNotebooks = await res.json();
    dispatch(getUserNotebooks(allNotebooks));
  }
};

//Get a single notebook
export const getSingleNotebook = (notebookId) => async dispatch => {
  const res = await fetch(`/api/notebooks/notebook/${notebookId}`)

  if (res.ok) {
    const singleNotebook = await res.json()
    dispatch(getNotebook(singleNotebook))
  }
}

const initialState = {};

export default function notebooksReducer (state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_NOTEBOOKS:
      // console.log('payload', action.payload)
      newState = {};
      action.payload.forEach(notebook => {
       newState[notebook.id] = notebook
      });
      return newState;
    case GET_NOTEBOOK:
      newState = {...state, notebook: action.payload}
      return newState;
    default:
      return state;
  }
};
