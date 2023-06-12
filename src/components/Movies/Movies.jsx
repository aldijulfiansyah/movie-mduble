import React, { Suspense, useEffect, useState } from "react";
import "./Movies.css";
import { Link, useParams } from "react-router-dom";
import { getMoviesType } from "../../api";
import "react-loading-skeleton/dist/skeleton.css";

import CardLoader from "../../utils/CardLoader";
const Cards = React.lazy(() => import("../Card/Card"));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getMoviesType(type)
      .then((result) => {
        setMovies(result);
      })
      .catch((err) => console.log(err));
  }, [type]);

  return <MovieList movies={movies} movieType={type} />;
};

const MovieList = ({ movies, movieType }) => (
  <div className="movie_list">
    <h2 className="list_title">
      {(movieType ? movieType : "POPULAR").toUpperCase()}
    </h2>
    <div className="list_card">
      {movies.map((movie) => (
        <Link to={`/movies/${movieType}/movie/${movie.id}`} key={movie.id}>
          <Suspense fallback={<CardLoader />}>
            <Cards movie={movie} />
          </Suspense>
        </Link>
      ))}
    </div>
  </div>
);

export default Movies;
