import { Container, Row, Col } from "react-bootstrap"

const AllMovies = ({allMovies}) => {

    console.log(allMovies)
  return (
    <section id="all-movies">
        <Container>
            <h3 className="pageTitle">All Movies</h3>
            <Row>
                {allMovies && allMovies.results.map((movie, i) =>{
                    return(
                    <Col className="item" md={3} key ={i}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie" />
                    </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
  )
}

export default AllMovies