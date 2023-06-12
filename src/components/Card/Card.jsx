import "./Card.css";

const Cards = ({ movie }) => {
  return (
    <div className="cards">
      <div id="link-movie" style={{ textDecoration: "none", color: "white" }}>
        <img
          className="cards_img"
          src={`${import.meta.env.VITE_API_BASEIMGURL}${
            movie ? movie.poster_path : "poster not found"
          }`}
          alt=""
        />
        <div className="cards_overlay">
          <div className="card_title">
            {movie ? movie.original_title : "title not found"}
          </div>
          <div className="card_runtime">
            {movie ? movie.release_date : "release date not found"}
            <span className="card_rating">
              {movie ? movie.vote_average : "rate not found"}
              <i className="fas fa-star" />
            </span>
          </div>
          <div className="card_description">
            {movie ? movie.overview.slice(0, 118) + "..." : "title not found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
