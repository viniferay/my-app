import axios from 'axios';

const API_KEY = '72def9aff3f0b2c0f07da4512b207694';
const BASE_URL = 'https://api.themoviedb.org/3';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

const filmesMock = [{title:"Avatar", id:2},{title:"Corra policia vem ai", id:1} ]

export class MovieClient {
    static getMovies() {
   
        return axios(withBaseUrl('/movie/popular')).then((response) => {
            return response;
        }).catch((error) => { 
            return {data:{results:filmesMock}};
        });
    }

    static getMoviesById(movieId){
        const movie = axios(withBaseUrl(`/movie/${movieId}`));
        console.log(movie)
        return movie
    }

    static getImage(urlImage){
        const image = axios(withBaseUrl(`${urlImage}`))
        console.log(image)
        return image
    }
}