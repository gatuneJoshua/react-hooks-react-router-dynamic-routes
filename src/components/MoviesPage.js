import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MovieList";
import MovieShow from "./MovieShow";

const MoviesPage = ({ movies }) => {
  const { url } = useRouteMatch();

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={url}>
        <h2>Movie List</h2>
      </Route>

      <Route path={`${url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
};
export default MoviesPage;
