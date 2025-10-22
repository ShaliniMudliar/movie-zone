import React, { useState } from "react";
import { movies } from "./data.js";
const Movie = () => {
  const [movieList, setMovieList] = useState(movies);
  const filteredMovies = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };
  console.log(movieList);
  return (
    <>
      <div className="nav my-4 ">
        <button
          type="button"
          class="btn btn-outline-light"
          onClick={() => setMovieList(movies)}
        >
          All
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => filteredMovies("Action")}
        >
          Action
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={() => filteredMovies("Thriller")}
        >
          Thriller
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => filteredMovies("Animation")}
        >
          Animation
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => filteredMovies("Horror")}
        >
          Horror
        </button>
        <button
          type="button"
          class="btn btn-outline-warning"
          onClick={() => filteredMovies("Drama")}
        >
          Drama
        </button>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={() => filteredMovies("Sci-Fi")}
        >
          Sci-Fi
        </button>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "1300px",
            textAlign: "center",
            gap: "50px",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          {movieList.map((data) => (
            <div
              key={data.id}
              style={{ maxWidth: "250px" }}
              className="hoverEffect"
            >
              <img
                style={{
                  width: "230px",
                  borderRadius: "15px",
                }}
                src={data.poster_path}
                alt=""
              />
              <h4 style={{ textAlign: "center" }}>{data.title}</h4>
              <p style={{ textAlign: "center" }}>{data.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
