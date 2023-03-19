import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import {AiFillStar} from 'react-icons/ai'
import SearchComponent from '../componets/SearchComponent'
import { Link } from 'react-router-dom'

const MovieSearched = ({name}) => {

    const params = useParams()

    const [movieData,setMovieData] = useState()

    useEffect(() =>{
        const fetchSearchValue = async () =>{
            const movie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.name}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`)
            const data = await movie.json()
    
            console.log(data)
    
            setMovieData(data)  
            console.log(movieData)
        }

        fetchSearchValue()

    },[params.name])

    
  return (
   <section id="searched">
    <Container>
        <SearchComponent />
        <Row>
            {movieData && movieData.results.map((movie, i) =>(
                <Col key={i} className='item' md={3}>
                    <Link to={`/movieDetail/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                    <h3 className='text-center'>{movie.original_title}</h3>
                    <div className="icon">
                        <h3><AiFillStar /> <span>{Math.floor(movie.vote_average)}</span></h3>
                    </div>
                    </Link>
                </Col>
            ))}
        </Row>
    </Container>
   </section>
  )
}

export default MovieSearched