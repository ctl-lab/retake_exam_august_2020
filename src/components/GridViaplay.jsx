import React, { useEffect, useState } from "react";
import { Movies } from '../Modules/movies'


const GridViaplay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesIndex = async () => {
      setMovies(await Movies.index());
    };
    getMoviesIndex();
  }, []);





  return (
    <div >
      {movies.map((movie) => {
        return(
          <div class="display-show">
            <img src={movie.content.images.landscape.url} alt="pic"/>
          </div>
        )
      })}


    </div>
  )
}

export default GridViaplay

