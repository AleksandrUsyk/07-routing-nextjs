"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import Modal from "@/components/Modal/Modal";
import css from "./NoteDetails.module.css";

interface NoteDetailsProps {
  id: string;
}

export default function NoteDetails({ id }: NoteDetailsProps) {
  const [note, setNote] = useState<Note | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchNoteById(id)
      .then(setNote)
      .catch(() => setNote(null));
  }, [id]);

  if (!note) return null;

  return (
    <Modal
      onClose={() => {
        // просто пытаемся вернуться назад
        router.back();

        // если URL не изменился (нет истории), делаем fallback через setTimeout
        setTimeout(() => {
          if (window.location.pathname.startsWith("/notes/")) {
            router.push("/notes/filter");
          }
        }, 50);
      }}
    >
      <div className={css.wrapper}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    </Modal>
  );
}
