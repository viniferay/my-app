import { useEffect, useState } from "react";
import { MovieClient } from "../client/MovieClient";
import { MovieContainer } from "../styles/MovieContainer";
import { MovieList } from "./MovieList";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
      const { data } = await MovieClient.getMovies();
      setMovies(data.results)
    }
  
    useEffect(() => {
      fetchMovies();
    }, []);
return(
  <MovieContainer>
     <MovieList movies={movies} />
  </MovieContainer>)
}