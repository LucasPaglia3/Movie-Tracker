import Movie from "./Movie";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
