import { Movie } from "./Movie";

export const MovieList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <Movie movie={m} />)}
        </ul>
    </section>
);
