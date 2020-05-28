import React, {Fragment} from "react";
import SliderMovies from "../components/SliderMovies";
import useFetch from "../hooks/useFetch";
import {API, URL_API } from '../utils/constants'

const Home = () => {
  // const movies = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=4fccb6d3be3e1bd942229405fca36f32&language=en-US&page=1' )
  // console.log(movies)

  const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`)


  return (
    <Fragment>
      <SliderMovies movies={newMovies} ></SliderMovies>
    </Fragment>
  );
};

export default Home;
