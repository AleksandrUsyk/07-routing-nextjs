import NoteDetails from "./NoteDetails.client";

interface NotePageProps {
  params: { id: string };
}

export default function NotePage({ params }: NotePageProps) {
  return <NoteDetails id={params.id} />;
}
