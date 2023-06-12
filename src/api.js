import axios from "axios";
const apiKey = import.meta.env.VITE_API_APIKEY;
const baseUrl = import.meta.env.VITE_API_BASEURL;
export const getMovieList = async () => {

  const movieList = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}`
  );
  // console.log({ movies: movieList.data.results });
  return movieList.data.results;
};

export const getMoviesType = async (type) => {
  const movieList = await axios.get(
    `${baseUrl}/movie/${type ? type: "popular"}?api_key=${apiKey}`
  );
  return movieList.data.results;
};

export const getMovieDetails = async (id) => {
  

  const movieDetails = await axios.get(
    `${baseUrl}/movie/${id}?api_key=${apiKey}`
  );
  // console.log({ movies: movieList.data.results });
  return movieDetails.data;
};
