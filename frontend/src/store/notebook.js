import { csrfFetch } from './csrf';

const GET_NOTEBOOKS = 'notebooks/GET_NOTEBOOKS'

const getUserNotebooks = (notebooks) => {
    return {
      type: GET_NOTEBOOKS,
      payload: notebooks,
    };
  };

export const getNotebooks = (userId) => async dispatch => {
  const res = await fetch(`/api/notebooks/${userId}`);

  if (res.ok) {
    const allNotebooks = await res.json();
    dispatch(getUserNotebooks(allNotebooks));
  }
};

const initialState = {};

export default function notebooksReducer (state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_NOTEBOOKS:
      console.log('payload', action.payload)
      newState = {};
      action.payload.forEach(notebook => {
       newState[notebook.id] = notebook
      });
      return newState;
    default:
      return state;
  }
};
