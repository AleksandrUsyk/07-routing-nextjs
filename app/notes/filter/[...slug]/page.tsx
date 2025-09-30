import Notes from "./Notes.client";

interface NotesPageProps {
  params: { slug?: string[] };
}

export default function NotesPage({ params }: NotesPageProps) {
  const tag = params.slug?.[0]; // /notes/filter/Work → "Work"
  return <Notes tag={tag} />;
}
