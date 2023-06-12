import { useNavigate } from "react-router-dom";
import "./Movie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";

const Movie = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then((result) => {
      setMovieDetail(result);
    })
    .catch((error)=>{
        console.error(error);
    })
  }, [id]);

  console.log({ movieDetail: movieDetail });

  return (
    <>
      <div className="movie">
        <div className="movie_intro">
          <img className="movie_backdrop"
            src={`${import.meta.env.VITE_API_BASEIMGURL}${
              movieDetail?.backdrop_path || "no_image_available.jpg"
            }`}
            alt=""
          />
        </div>
        <div className="movie_detail">
          <div className="movie_detailLeft">
            <div className="movie_posterbox">
              <img className="movie_poster"
                src={`${import.meta.env.VITE_API_BASEIMGURL}${
                  movieDetail?.poster_path || "no_image_available.jpg"
                }`}
                alt=""
              />
            </div>
          </div>
          <div className="movie_detailRight">
            <div className="movie_detailRightTop">
              <div className="movie_name">
                {movieDetail?.original_title || "no title found"}
              </div>
              <div className="movie_tagline">
                {movieDetail?.tagline || "no tagline found"}
              </div>
              <div className="movie_rating">
                {movieDetail?.vote_average || "no rate found"}{" "}
                <i className="fas fa-star" />
                <span className="movie_voteCount">
                  {movieDetail ? `(${movieDetail.vote_count} votes)` : ""}
                </span>
              </div>
              <div className="movie_runtime">
                {movieDetail?.runtime + " mins" || "no runtime found"}
              </div>
              <div className="movie_release_date">{"Release date: " +
                  (movieDetail?.release_date || "no release date found")}{" "}<i className="fas fa-star" />
              </div>
              <div className="movie_genres">{movieDetail?.genres?.map((genre) => (
                  <span className="movie_genre" id={genre.id} key={genre.id}>{genre.name}</span>
                ))}</div>
            </div>
            <div className="movie_detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{movieDetail?.overview || ""}</div>
            </div>
          </div>
        </div>
        <div className="movie_links">
          <div className="movie_heading">Useful Links</div>
          {movieDetail?.homepage && (
            <a
              href={movieDetail.homepage}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie_homeButton movie_Button">
                  Homepage <i className="newTab fas fa-external-link-alt" />
                </span>
              </p>
            </a>
          )}
          {movieDetail?.imdb_id && (
            <a
              href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie_imdbButton movie_Button">
                  IMDb
                  <i className="newTab fas fa-external-link-alt" />
                </span>
              </p>
            </a>
          )}
        </div>
        <div className="movie_heading">Production companies</div>
        <div className="movie_production">{movieDetail?.production_companies?.map((company) =>
            company.logo_path ? (
              <span className="productionCompanyImage" key={company.id}>
                <img
                  className="movie_productionComapany"
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                  alt={company.name}
                />
                <span>{company.name}</span>
              </span>
            ) : null
          )}</div>
      </div>
    </>
  );
};

export default Movie;
