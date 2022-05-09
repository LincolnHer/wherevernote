import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import { deleteNotebook } from "../../store/notebook";
import "./CreateNotebookModal.css";

function EditNotebookModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { notebookId } = useParams();
  const notebook = useSelector((state) => state.notebooks[notebookId]);
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const { setModal2IsOpenToFalse } = useModal();

  const handleDelete = async (e) => {
    e.preventDefault();
    setModal2IsOpenToFalse();
    const oldNotebook = await dispatch(deleteNotebook(notebook));
    history.push("/home");
  };

  useEffect(() => {
    const validationErrors = [];
    if (!title.length)
      validationErrors.push(
        "Your notebook name must contain at least one character"
      );
    if (title.length > 50)
      validationErrors.push(
        "Your notebook name cannot be longer than 50 characters"
      );
    setErrors(validationErrors);
  }, [title]);

  return (
    <div className="notebook-modal">
      <header>
        <h1 className="edit-notebook-title">Edit notebook</h1>
      </header>
      <form className="notebook-form">
        {/* <ul className='errors'>
      {errors.map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
      <label>
        Name
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Notebook name'
        />
      </label> */}
        {/* <button type='submit'>Edit</button> */}
        <div className="modal-btns">
          <button onClick={handleDelete} className="btn-red">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNotebookModal;
