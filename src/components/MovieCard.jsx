import React from "react";
import Fighter from "../assets/Fighter.jpg";
const MovieCard = ({
  poster_path,
  title,
  handleWatchList,
  movie,
  handleDeleteMoviesFromWatchList,
  watchlist,
}) => {
  const checkMovie = (movie) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (movie.id == watchlist[i].id) return true;
    }
    return false;
  };

  return (
    <div className=" relative h-[40vh] w-[200px]  m-2 bg cover bg-center rounded-xl bg-white shadow-xl hover:scale-110 hover:cursor-pointer duration-300">
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          className="relative h-full w-full rounded-xl hover:scale-125   hover:cursor-pointer duration-300"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        ></img>
      </div>

      {checkMovie(movie) ? (
        <div
          onClick={() => {
            handleDeleteMoviesFromWatchList(movie);
          }}
          className="absolute top-2 right-2 h-8 w-8 flex justify-center items-center bg-gray-900/50 rounded-lg shadow-lg"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleWatchList(movie);
          }}
          className="absolute top-2 right-2 h-8 w-8 flex justify-center items-center bg-gray-900/50 rounded-lg shadow-lg"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0  left-0 w-full text-center text-white rounded-br-xl rounded-bl-xl  bg-black bg-opacity-50 py-2 ">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;
