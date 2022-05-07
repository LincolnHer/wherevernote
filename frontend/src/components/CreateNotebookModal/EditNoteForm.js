import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import { editNote } from "../../store/notes";

function EditNoteForm() {
  const { notebookId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state?.session.user);
  const notebooksObj = useSelector((state) => state?.notebooks);
  const notesObj = useSelector((state) => state?.notes);
  const getNoteId = localStorage.getItem('note')
  const singleNote = notesObj[getNoteId]
  console.log('single note', singleNote)


//   const [oldTitle, setOldTitle] = useState();
//   const [oldContent, setOldContent] = useState("");
//   const [oldNotebook, setOldNotebook] = useState(notebookId);

  const [title, setTitle] = useState(singleNote?.title);
  const [content, setContent] = useState(singleNote?.content);
  const [notebook, setNotebook] = useState(singleNote?.notebookId);
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [errors, setErrors] = useState([]);
  const notebooksArr = Object.values(notebooksObj);
  const { setModalIsOpen3, setModal3IsOpenToFalse } = useModal();

  const submit = async (e) => {
    e.preventDefault();
    setModal3IsOpenToFalse();
    setHasSubmitted(true)
    const formValues = {
        userId: sessionUser.id,
        notebookId: notebook,
        title: title,
        content: content,
      }

    const editedNote = await dispatch(editNote(formValues, singleNote?.id))
    history.push(`/notebooks/${notebook}`)
    if (window.location.href === `http://localhost:3000/notebooks/${notebook}` || `https://wherevernote.herokuapp.com/notebooks/${notebook}`) return window.location.reload(false)

  };

  useEffect(() => {

  },[hasSubmitted])

//   useEffect(() => {
//     return
//   },[title, content])

  return (
    <div className="notebook-modal">
      <header>
        <h1>Edit Note</h1>
      </header>
      <form
        className="notebook-form"
        onSubmit={submit}
      >
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
              name='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='Start writing'
            >
            </textarea>
        <div className="modal-btns">
          <button
            type="button"
            onClick={setModal3IsOpenToFalse}
            className="btn-red"
          >
            Cancel
          </button>
          <button type="submit" className="btn" disabled={errors.length > 0}>
            Save Change
          </button>
        </div>
        <div className="note-preview">
          <h1>
            Note Preview
          </h1>
          <div className="note-title">
            <h2>
              {singleNote?.title}
            </h2>
          </div>
          <div className="note-body">
            <h3>
              {singleNote?.content}
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditNoteForm;
