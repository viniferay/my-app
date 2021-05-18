import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieClient } from "../client/MovieClient";
import { MovieContainer } from "../styles/MovieContainer";
import { MovieList } from "./MovieList";

export const MovieDetails = () => {
    let {id} = useParams();

    const [movie, setMovie] = useState([]);
    const fetchMovie = async () => {
      const { data } = await MovieClient.getMoviesById(id);
      setMovie(data);
    }

    const [image, setImage] = useState([]);
    const fetchImage = async () => {
      const { data } = await MovieClient.getImage(movie.poster_path);
      setMovie(data);
    }

  
    useEffect(() => {
      fetchMovie();
      fetchImage();
    }, []);
    
    return (
        <MovieContainer>
            {movie.original_title}

        </MovieContainer>
    )
}