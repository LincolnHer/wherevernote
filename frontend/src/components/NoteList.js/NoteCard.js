function NoteCard({ note }) {
    // console.log(note)
    const createdAt = new Date(note?.createdAt)
    const convertedDate = createdAt.toDateString();

  return (
    <div className="note-card">
      <div className="note-card-head">
        <div className="note-card-title">{note?.title}</div>
        <div className="note-card-desc ">{note?.content}</div>
      </div>
      <div className="note-card-date">{convertedDate}</div>
    </div>
  );
}

export default NoteCard;
