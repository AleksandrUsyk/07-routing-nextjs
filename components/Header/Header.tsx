import TagsMenu from "./TagsMenu/TagsMenu";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <h1 className={css.logo}>NoteHub</h1>
      <TagsMenu />
    </header>
  );
}
