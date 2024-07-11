import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watch from "./components/Watch";
import React, { useEffect, useState } from "react";

// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleWatchList = (movie) => {
    let newWatchList = [...watchlist, movie];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList([...watchlist, movie]);
  };

  const handleDeleteMoviesFromWatchList = (movie) => {
    let filterMovies = watchlist.filter((m) => {
      return movie.id != m.id;
    });  
    localStorage.setItem('moviesApp', JSON.stringify(filterMovies))
    setWatchList(filterMovies);
  };

  useEffect(()=>{
    let moviesLocalStorage = localStorage.getItem('moviesApp');

    if(!moviesLocalStorage) return
    setWatchList(JSON.parse(moviesLocalStorage))

  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleWatchList={handleWatchList}
                  handleDeleteMoviesFromWatchList={
                    handleDeleteMoviesFromWatchList
                  }
                  watchlist={watchlist}
                />
              </>
            }
          />

          <Route path="/watchlist" element={<Watch watchlist={watchlist} setWatchList={setWatchList} handleDeleteMoviesFromWatchList={handleDeleteMoviesFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
