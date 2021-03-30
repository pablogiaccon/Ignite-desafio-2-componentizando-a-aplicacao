import "../styles/header.scss";

type Header = {
  title: string;
};

export function Header({ title }: Header) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {title}</span>
      </span>
    </header>
  );
}
