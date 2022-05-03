import React, { useState } from "react";
import { useParams } from 'react-router-dom'

function Notebook() {
  const { notebookId } = useParams();
  return (
    <h1>hello from Notebook</h1>
  )
}

export default Notebook;
