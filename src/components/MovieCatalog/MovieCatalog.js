import React from "react";
import { Col, Card } from "antd";
import { EyeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import "./MovieCatalog.scss";

const MovieCatalog = ({ movies }) => {
  const { results } = movies;

  // componente interno

  const MovieCard = ({ movie }) => {
    console.log(movie);
    const { id, title, poster_path } = movie;

    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

    return (
      <Link to={`/movie/${id}`}>
        <Card 
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        actions={[<EyeOutlined />]}
        >
          <Card.Meta title={title}>
          </Card.Meta>
        </Card>
      </Link>
    );
  };

  return results.map(movie => (
    <Col key={movie.id} xs={4} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
};

export default MovieCatalog;
