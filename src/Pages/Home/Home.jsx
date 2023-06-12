import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { getMovieList } from "../../api";
import Banner from "../../components/Banner/Banner";
import MoviesPage from "../MoviesPage";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  return (
    <>
      <Banner popularMovies={popularMovies} />
      <MoviesPage/>
    </>
  );
};
export default Home;
