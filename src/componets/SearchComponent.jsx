import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import {BiSearch} from 'react-icons/bi'
import { Link } from "react-router-dom"

const SearchComponent = () => {
    const [value, setValue] = useState()
    const [movieData, setMovieData] = useState()


    // const fetchSearchValue = async () =>{
    //     console.log(value)
    //     const movie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`)
    //     const data = await movie.json()

    //     console.log(data)

    //     setMovieData(data)  
    //     console.log(movieData)
    // }

    // const handleClick = () =>{
    //     fetchSearchValue()
    // }

  return (
    <section id='search'>
        <Container>
            <Row>
                <Col md={12}>
                <div className="input-field">
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter movie name' />
                <Link to={`/searchedMovie/${value}`}>
                <span className="icon"><BiSearch /></span>
                </Link>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SearchComponent