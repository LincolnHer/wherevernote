import { csrfFetch } from "./csrf";

const GET_NOTEBOOKS = "notebooks/GET_NOTEBOOKS";
const GET_NOTEBOOK = "notebooks/GET_NOTEBOOK";
const POST_NOTEBOOK = "notebooks/POST_NOTEBOOK";
const PUT_NOTEBOOK = "notebooks/PUT_NOTEBOOK";
const DELETE_NOTEBOOK = "notebooks/DELETE_NOTEBOOK";

const getUserNotebooks = (notebooks) => {
  return {
    type: GET_NOTEBOOKS,
    payload: notebooks,
  };
};

const getNotebook = (notebookId) => {
  return {
    type: GET_NOTEBOOK,
    payload: notebookId,
  };
};

const postNotebook = (notebook) => {
  return {
    type: POST_NOTEBOOK,
    payload: notebook,
  };
};

const putNotebook = (notebook) => {
  return {
    type: PUT_NOTEBOOK,
    payload: notebook,
  };
};

const removeNotebook = (notebook) => {
  return {
    type: DELETE_NOTEBOOK,
    payload: notebook,
  };
};

// GET all notebooks owned by user
export const getNotebooks = (userId) => async (dispatch) => {
  const res = await fetch(`/api/notebooks/${userId}`);

  if (res.ok) {
    const allNotebooks = await res.json();
    return dispatch(getUserNotebooks(allNotebooks));
  }
};

//Get a single notebook
export const getSingleNotebook = (notebookId) => async (dispatch) => {
  const res = await fetch(`/api/notebooks/notebook/${notebookId}`);

  if (res.ok) {
    const singleNotebook = await res.json();
    return dispatch(getNotebook(singleNotebook));
  }
};

// POST create a notebook
export const createNotebook = (notebook) => async (dispatch) => {
  const res = await csrfFetch("/api/notebooks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notebook),
  });

  if (res.ok) {
    const newNotebook = await res.json();
    return dispatch(postNotebook(newNotebook));
  }
};

// PUT edit a notebook
export const editNotebook = (notebook, notebookId) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/notebook/${notebookId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notebook),
  });

  if (res.ok) {
    const updatedNotebook = await res.json();
    return dispatch(putNotebook(updatedNotebook));
  }
};

// DELETE delete a notebook
export const deleteNotebook = (notebook) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/notebook/${notebook.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const oldNotebook = await res.json();
    return dispatch(removeNotebook(notebook));
  }
};

const initialState = {};

export default function notebooksReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_NOTEBOOKS:
      newState = {};
      action.payload.forEach((notebook) => {
        newState[notebook.id] = notebook;
      });
      return newState;
    case GET_NOTEBOOK:
      newState = { ...state, notebook: action.payload };
      return newState;
    case POST_NOTEBOOK:
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    case PUT_NOTEBOOK:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_NOTEBOOK:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}
