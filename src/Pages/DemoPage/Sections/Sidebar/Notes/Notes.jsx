import React from "react";
import { NotesSimple } from "./NotesSimple";
import { useNotes } from "./useNotes";

export const Notes = () => {
  const catNotes = useNotes();
  return (
    <div>
      Notes
      <NotesSimple data={catNotes} />
    </div>
  );
};
