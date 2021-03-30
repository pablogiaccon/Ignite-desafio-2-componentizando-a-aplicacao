import { useState } from "react";

import { SideBar, GenreResponseProps } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />

      <Content
        selectedGenre={selectedGenre}
        selectedGenreId={selectedGenreId}
        setSelectedGenre={setSelectedGenre}
      />
    </div>
  );
}
