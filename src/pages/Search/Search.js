import React from 'react'
import {Row, Col, Input} from 'antd'
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from '../../components/MovieCatalog';
import Footer from '../../components/Footer';
import { API, URL_API } from "../../utils/constants";

import './Search.scss'

const Search = (props) => {
console.log(props)

const {location, history} = props
const [movieList, setmovieList] = React.useState([])
const [searchValue, setsearchValue] = React.useState('')

React.useEffect(() => {
   
const consultarApi = async() => {
    const search = queryString.parseUrl(location.search)
   //  console.log(queryString.parseUrl(location.search))
    const {s} = search.query
    
     
    console.log(s)

    const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
    )
    const movies = await response.json()
    
    console.log('busqueda', movies)

    setsearchValue(s)
    setmovieList(movies)

}

consultarApi()

}, [location.search])


const onChangeSearch = e => {
    // traer params d ela url
    const urlParams = queryString.parse(location.search)
    console.log(urlParams)
    console.log(e.target.value)
    // actualizar params url
    urlParams.s = e.target.value
    //refrescar url
    history.push(`?${queryString.stringify(urlParams)}`)
    //actualizar valor buscado
    setsearchValue(e.target.value)
}

    return (
        <Row>
        <Col span={12} offset={6} className='search'>
            <h1>Busca tu pelicula</h1>
            <Input value={searchValue} onChange={onChangeSearch} />
        </Col>
        {
            movieList.results && (
                <Row>
                     <Col span={24}>
                        <MovieCatalog movies={movieList}></MovieCatalog>
                     </Col>
                </Row>
            )

        }
            <Col span={24}>
                <Footer></Footer>
            </Col>
        </Row>
    )
}

export default withRouter(Search)
