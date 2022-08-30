import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import { deleteNotebook, editNotebook } from "../../store/notebook";
import "./CreateNotebookModal.css";

function EditNotebookModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { notebookId } = useParams();
  const notebook = useSelector((state) => state.notebooks[notebookId]);
  const notebooksObj = useSelector((state) => state.notebooks);
  const notebooksArr = Object.values(notebooksObj);
  const notebookTitles = notebooksArr.map((notebook) => notebook.title);
  const [title, setTitle] = useState(notebook?.title);
  const [errors, setErrors] = useState([]);
  const { setModal2IsOpenToFalse } = useModal();

  const handleDelete = async (e) => {
    e.preventDefault();
    setModal2IsOpenToFalse();
    const oldNotebook = await dispatch(deleteNotebook(notebook));
    localStorage.removeItem("note")
    history.push("/home");
  };

  useEffect(() => {
    const validationErrors = [];
    if (!title?.length)
      validationErrors.push(
        "Your notebook name must contain at least one character"
      );
    if (title?.length > 50)
      validationErrors.push(
        "Your notebook name cannot be longer than 50 characters"
      );
    if (notebookTitles?.includes(title))
      validationErrors?.push(`Notebook name '${title}' is already in use`);
    setErrors(validationErrors);
  }, [title]);

  const submit = async (e) => {
    e.preventDefault();

    const formValues = {
      title: title,
    };

    const notebook = await dispatch(editNotebook(formValues, notebookId));
    setTitle(notebook?.payload?.title);
    setModal2IsOpenToFalse();
  };

  return (
    <div className="notebook-modal">
      <header>
        <h1 className="edit-notebook-title">Edit notebook</h1>
      </header>
      <form className="notebook-form" onSubmit={submit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        {/* <label>
        Name
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Notebook name'
        />
      </label> */}
        <label>
          Name
          <input
            className="edit-note-title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Notebook Name"
          />
        </label>
        <div className="modal-btns">
          <button onClick={handleDelete} className="btn-red">
            Delete
          </button>
          <button className="btn" disabled={errors.length > 0} type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNotebookModal;
