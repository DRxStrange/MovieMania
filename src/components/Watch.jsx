import React, { useEffect, useState } from "react";
import WatchMovie from "./WatchMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import genreids from '../utility/genreids.js'
const Watch = ({ watchlist ,setWatchList, handleDeleteMoviesFromWatchList}) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]) 
  const [currGenre, setGenre] = useState('All Genres');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortIncreasing = ()=>{
       const sortedIncreasing = watchlist.sort((movieA, movieB)=>{
        return movieA.vote_average - movieB.vote_average;
       })
       setWatchList([...sortedIncreasing]);

  }
 
  const sortDecreasing = ()=>{
    const sortedDecreasing = watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average;
     })
     setWatchList([...sortedDecreasing]);
  }
  
  const handleGenre = (genre)=>{
    setGenre(genre)
  }
 
  useEffect(()=>{
    let temp = watchlist.map((movie)=>{
      return genreids[movie.genre_ids[0]];
    }) 
   temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    // console.log(temp)
  },[watchlist])
  

  return (
    <> 

      <div className="flex justify-center flex-wrap m-4">
      {
        genreList.map((genre)=>{
           return <div onClick = {()=>handleGenre(genre) } className={currGenre==genre ? "flex justify-center items-center h-[2rem] w-[8rem] text-white rounded-xl mx-3 bg-blue-400 font-bold" : "flex justify-center items-center h-[2rem] w-[8rem] text-white rounded-xl mx-3 bg-gray-400/50 font-bold"}>
          {genre}
        </div>
        })
      }
       
        
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          type="text"
          placeholder="Search Movie"
        ></input>
      </div>
      <div className=" overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div>
                  <FontAwesomeIcon onClick={sortIncreasing} className="px-4 hover:scale-125 hover:cursor-pointer" icon={faArrowUp} />
                </div>
                <div>Ratings</div>
                <div>
                  <FontAwesomeIcon onClick={sortDecreasing} className="px-4 hover:scale-125 hover:cursor-pointer" icon={faArrowDown} />
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre == 'All Genres') return true;
                 return currGenre == genreids[movieObj.genre_ids[0]];
            }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movie, index) => (
                <WatchMovie key={index} movie={movie} handleDeleteMoviesFromWatchList={handleDeleteMoviesFromWatchList} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watch;
