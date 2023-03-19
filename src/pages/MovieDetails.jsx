import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

const MovieDetails = (props) => {
    const [movieDetail, setMovieDetail] = useState()
    const params = useParams()


    const fetchMovieDetail = async() =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        const resData = await res.json()

        console.log(resData)

        setMovieDetail(resData)
    }

    useEffect(() =>{
        props.handleWhiteNavbar();
        fetchMovieDetail()
    }, [])

  return (
    <section id="movie-details">
        {movieDetail &&
        <>
        <div className="overlay2"></div>
        <img className='background-photo' src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} alt="" /> 
        <Container>
            <Row>
                <Col md={8} className='item'>
                    <img src={`https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`} alt="" /> 
                    <div className="info">
                    <h3><span className='icon'><AiFillStar /></span> <span>{movieDetail.vote_average.toFixed(1)}/10</span></h3> 
                    <h3>{movieDetail.release_date.split('-')[0]}</h3>
                    <ul>
                    {movieDetail.genres.map((genre, i) =>{
                        return(
                            <li key={i}>{genre.name}</li>
                        )
                    })}
                    </ul>
                    <h3>{Math.floor(movieDetail.runtime / 60)} h {movieDetail.runtime % 60}m</h3>
                    </div>
                    <p className='desc'>{movieDetail.overview}</p>
                    <a href={`${movieDetail.homepage}`} target='_blank'>
                    <button className='movie-btn'>Homepage</button>
                    </a>
                </Col>
                <Col md={4}>
                    <a href={`https://www.youtube.com/watch?v=PLl99DlL6b4`} target='_blank' className="play-btn">
                       
                    </a>
                </Col>
            </Row>
        </Container>
        </>
        }
        
    </section>
  )
}

export default MovieDetails