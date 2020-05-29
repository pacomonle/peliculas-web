import React from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";
import Pagination from "../components/Pagination"


import './NewMovies.scss'

const NewMovies = () => {
  const [movieList, setmovieList] = React.useState([]);
  const [page, setpage] = React.useState(1);

  React.useEffect(() => {
    const consultarApi = async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API}&lenguaje=es-ES&page=${page}`
      );
      const movies = await response.json();
      // console.log(movies)
      setmovieList(movies);
    };

    consultarApi();
  }, [page]);

  console.log(movieList);

const onChangePage = (page) =>{
    setpage(page)
}




  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fintSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList}></MovieCatalog>
          </Col>
          <Col span={24}>
         
        <Pagination
          currentPage={movieList.page}
          totalItems={movieList.total_results}
          onChangePage={onChangePage}
        />
        
       
          </Col>
        </Row>
      ) : (
        <Col span={24}>
          <Loading></Loading>
        </Col>
      )}

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default NewMovies;
