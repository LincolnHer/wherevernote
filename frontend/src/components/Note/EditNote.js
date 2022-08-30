import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";
// import "react-quill/dist/quill.core.css";
import { editNote } from "../../store/notes";
import "./Note.css";
// import BackgroundImage from "../../assets/background.jpeg";

function EditNote({ notebooks, selectedNoteId}) {
  const { notebookId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state?.session.user);
  const notes = useSelector((state) => state?.notes);
  const currNote = notes[selectedNoteId];
//   const notesArr = Object.values(notes);
//   console.log("EDIT NOTE COMP", currNote);

  const [title, setTitle] = useState(currNote?.title);
  const [content, setContent] = useState(currNote?.content);

  const [notebook, setNotebook] = useState(notebookId);
  const [errors, setErrors] = useState([]);
//   const notebooksArr = Object.values(notebooks);

  // const backgroundStyle = {
  //   backgroundImage: `url(${BackgroundImage})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   height: '100vh',
  //   width: '100vmax'
  // };

  const submit = async (e) => {
    e.preventDefault();

    const formValues = {
      userId: sessionUser.id,
    //   notebookId: notebookId,
      title: title,
      content: content,
    };

    const note = await dispatch(editNote(formValues, currNote?.id));
    history.push(`/notebooks/${note?.payload?.notebookId}`);
    // console.log("NOTE.............", note)
    setNotebook(notebookId);
    setTitle(note?.payload?.title);
    setContent(note?.payload?.content);
  };

  useEffect(() => {
    setTitle(notes[selectedNoteId]?.title);
    setContent(notes[selectedNoteId]?.content);
  }, [selectedNoteId]);

  useEffect(() => {
    const validationErrors = [];
    if (!title?.length)
      validationErrors.push(
        "Your note name must contain at least one character"
      );
    if (title?.length > 50)
      validationErrors.push(
        "Your note name cannot be longer than 50 characters"
      );
    if (content?.length < 1)
      validationErrors.push("Your note must contain atleast 1 character");
    // if (!notebook) validationErrors.push("You must select a notebook");
    setErrors(validationErrors);
  }, [title, content, notebook]);

  return (
    <div className="note-container">
      <div className="note-form-container">
        <form className="note-form" onSubmit={submit}>
          <header>
            <h1 className="note-header">Create A Note</h1>
          </header>
          {errors.length > 0 && (
            <ul className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <input
            className="title-box"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          ></input>
          <div className="editor">
            <ReactQuill theme="snow" value={content || ""} onChange={setContent} />
          </div>
          <div className="note-actions">
            <button className="btn" disabled={errors.length > 0} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
