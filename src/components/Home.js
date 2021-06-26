import React from "react";
//api

//config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";
//components

import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
import SlideShow from "./SlideShow";
//hook
import { useHomeFetch } from "../hooks/useHomeFetch";
//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);
  const firstRowState = state.results.slice(0, 7);
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <SlideShow img={firstRowState} />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
