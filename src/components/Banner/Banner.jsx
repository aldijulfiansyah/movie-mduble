import "./Banner.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = ({ popularMovies }) => {
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            key={movie.id}
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <div className="img">
                <img
                  src={`${import.meta.env.VITE_API_BASEIMGURL}${
                    movie.backdrop_path || "no_image_available.jpg"
                  }`}
                  alt={movie.title}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movie.original_title || "Title not available"}
                </div>
                <div className="posterImage_runtime">
                  {movie.release_date || "Release date not available"}
                  <span className="posterImage_rating">
                    {movie.vote_average || "Rating not available"}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="posterImage_description">
                  {movie.overview || "Description not available"}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
