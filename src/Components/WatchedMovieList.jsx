import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watched, onRemoveWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onRemoveWatched={onRemoveWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
