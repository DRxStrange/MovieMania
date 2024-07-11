import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = ({
  handleWatchList,
  handleDeleteMoviesFromWatchList,
  watchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPage] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPage(pageNo - 1);
    }
  };
  const handleNext = () => {
    setPage(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5376685ffb5df6e282eb815fcd660d9b&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        // console.log(res);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  // console.log(watchlist);
  return (
    <div>
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap ">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster_path={movie.poster_path}
            title={movie.title}
            handleWatchList={handleWatchList}
            movie={movie}
            handleDeleteMoviesFromWatchList={handleDeleteMoviesFromWatchList}
            watchlist={watchlist}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Movies;
// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
