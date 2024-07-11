import React from 'react'
import genreids from '../utility/genreids.js'

const WatchMovie = ({movie,handleDeleteMoviesFromWatchList}) => { 
  
  return (
    <>
      <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img className='h-[6rem] w-[10rem] ' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img> 
                 <div className="mx-10">{movie.title}</div>
              </td> 
              <td>
                {movie.vote_average}
              </td>
              <td>
                {
                  movie.popularity
                }
              </td>
              <td>
                {genreids[movie.genre_ids[0]]}
              </td>
              <td onClick = {()=>handleDeleteMoviesFromWatchList(movie)}className="text-red-500">Delete</td>
            </tr> 
    </>
  )
}

export default WatchMovie
