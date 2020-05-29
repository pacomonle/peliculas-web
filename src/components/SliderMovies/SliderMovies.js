import React from 'react'
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from '../Loading'


import './SliderMovies.scss'

const SliderMovies = ({movies}) => {

if (movies.loading || !movies.result) {
    return <Loading></Loading>
}

// componente interno

const Movie = ({movie}) => {

const {id, backdrop_path, title, overview} = movie

const image =`https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
      <div 
      className='slider_movies__movies'
       style={{backgroundImage: `url('${image}')`}}>
          <div className='slider_movies__movies_info'>
              <div>
                  <h2>{title}</h2>
                   <p>{overview}</p>
                   <Link to={`movie/${id}`}>
                        <Button type='primary'>Ver mas</Button>
                   </Link>
              </div>
          </div>
      </div>
  )
}







const {results} = movies.result

    return (
        
     
           <Carousel 
           autoplay
           className='slider_movies'
           >
           {
               results.map((movie, index) =>(
                   <Movie key={index} movie={movie}></Movie>
               ))
           }
           </Carousel>
        
    )
}

export default SliderMovies

