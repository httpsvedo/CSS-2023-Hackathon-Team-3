import React, { useEffect, useState } from 'react'
import MovieList from '../componets/MovieList'
import AllMovies from '../componets/AllMovies'

const Home = () => {
    const [popular, setPopular] = useState()
    const [topRated, setTopRated] = useState()
    const [allMovies, setAllMovies] = useState()
    const fetchPopularMovies = async () =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        const resData = await res.json()

        setPopular(resData)
    }

    const fetchTopMovies = async () =>{
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=db64d37dfe8ed2bb3f08f69e308bb6d3&language=en-US&page=1`)
      const resData = await res.json()

      console.log(resData)
      setTopRated(resData)
    }

    const fetchAllMovies = async () =>{
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=db64d37dfe8ed2bb3f08f69e308bb6d3&language=en-US&page=1`)
      const resData = await res.json()

      console.log(resData)
      setAllMovies(resData)
    }

    useEffect(() =>{
        fetchPopularMovies()
        fetchTopMovies()
        fetchAllMovies()
    }, [])
  return (
    <section id="home">
        <MovieList data={popular} topRated={topRated} />
        <AllMovies allMovies={allMovies} />
    </section>
  )
}

export default Home