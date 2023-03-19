import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import Slider from "react-slick";


const MovieList = ({data, topRated}) => {
    // https://image.tmdb.org/t/p/original${movie.poster_path}
    console.log(topRated)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <section id="popular" className="mb-6">
        <Container>
            <h3 className="pageTitle mb-6">Popular</h3>
        {data && data.results && <Slider {...settings2}>
            {data.results.map((movie, i) =>(
                <div key={i} className='movie-item'>
                    <Link to={`/movieDetail/${movie.id}`}>
                    <div className="overlay"></div>
                   <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie" />
                   <div className="text">{movie.original_title}</div>
                    </Link>
                </div>
            ))}
    </Slider>
    }
    <h3 className="pageTitle title-2">
        Top Rated
    </h3>
    {topRated && topRated.results && <Slider {...settings}>
            {topRated.results.map((movie, i) =>(
                <div key={i} className='movie-item'>
                    <div className="overlay"></div>
                   <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie" />
                   <div className="text">{movie.original_title}</div>
                </div>
            ))}
    </Slider>
    }
        </Container>
    </section>
  )
}

export default MovieList