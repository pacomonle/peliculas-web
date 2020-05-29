import React from 'react'
import {List, Avatar, Button} from 'antd'
import { RightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Loading from '../Loading'

import './MovieList.scss'


const MovieList = ({title, movies}) => {

    const{loading, result, error} = movies

if(movies.loading || !movies.result) return <Loading />

// componente interno

const RenderMovie= ({movie}) =>{

    const {id, title, poster_path} = movie

const poster = `https://image.tmdb.org/t/p/original${poster_path}`


     return (
         <List.Item className='movie_list__movie' >
            <List.Item.Meta
            avatar={<Avatar src={poster}/>}
            title={<Link to={`/movie/${id}`}>{title}</Link>} 
            />
            <Link to={`/movie/${id}`}>
            <Button type="primary" shpe="cirlce" icon={<RightOutlined />} />
            </Link>
         </List.Item>
     )
}

    return (
        <List
        className='movie_list'
        size='default'
        header={<h2>{title}</h2>}
        bordered
        dataSource= {result.results}
        renderItem= {movie => <RenderMovie movie={movie} />}>
           
        </List>
    )
}

export default MovieList
