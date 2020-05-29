import React, { Fragment } from "react";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import useFetch from "../hooks/useFetch";
import { API, URL_API } from "../utils/constants";
import { Row, Col } from "antd";
import Footer from "../components/Footer";

const Home = () => {
  // const movies = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=4fccb6d3be3e1bd942229405fca36f32&language=en-US&page=1' )
  // console.log(movies)

  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );


  return (
    <Fragment>
      <SliderMovies movies={newMovies}></SliderMovies>
      <Row>
        <Col span={12}>
          <MovieList title='Peliculas Populares' movies={popularMovies}></MovieList>
        </Col>
        <Col span={12}>
        <MovieList title='Peliculas Mas Valoradas' movies={topRatedMovies}></MovieList>
        </Col>
      </Row>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
