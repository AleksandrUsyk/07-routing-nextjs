"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchNotes } from "@/lib/api";
import { Note } from "@/types/note";
import css from "./Notes.client.module.css";

interface NotesProps {
  tag?: string;
}

export default function Notes({ tag }: NotesProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Не передаём search, если тег "All" или undefined
    const params = tag && tag !== "All" ? { search: tag } : undefined;

    fetchNotes(params)
      .then((data) => setNotes(data.notes))
      .catch((err) => {
        console.error(err);
        setNotes([]);
      })
      .finally(() => setLoading(false));
  }, [tag]);

  if (loading) return <p className={css.loading}>Loading notes...</p>;
  if (!notes.length) return <p className={css.empty}>No notes found</p>;

  return (
    <div className={css.notes}>
      {notes.map((note) => (
        <Link key={note.id} href={`/notes/${note.id}`} className={css.note}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </Link>
      ))}
    </div>
  );
}
