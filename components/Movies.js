import React, {useState, useEffect} from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function fetchMovies() {
        setLoading(true)
        const response = await fetch(' https://ghibliapi.herokuapp.com/films');
        const data = await response.json();
        setMovies(data);
        console.log(data)
    }

    useEffect(() => {
        fetchMovies();
        setLoading(false);
    }, [])
    const sortedMovies = movies.sort((a,b) => b.rt_score - a.rt_score)
    return(
        <div>
            {isLoading && <p>Loading ...</p>}
            {sortedMovies.map(movie => {
                return (
                    <article key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p className="release_date">Release in: {movie.release_date}</p>
                        <p className="rt_rate">rt_score: {movie.rt_score}</p>
                        <p className="description">{movie.description}</p>
                        <p className="director">Director: {movie.director}</p>
                        <p className="producer">Producer: {movie.producer}</p>
                    </article>
                )
            })}
        
        </div>
    )
}

export default Movies