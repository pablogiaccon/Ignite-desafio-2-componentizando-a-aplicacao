import { useState, useEffect } from "react";

import { api } from "../services/api";

import { MovieCard } from "./MovieCard";
import { GenreResponseProps } from "./SideBar";

import "../styles/content.scss";
import { Header } from "./Header";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type Content = {
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
  setSelectedGenre(genre: React.SetStateAction<GenreResponseProps>): void;
};

export function Content({
  selectedGenre,
  selectedGenreId,
  setSelectedGenre,
}: Content) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
