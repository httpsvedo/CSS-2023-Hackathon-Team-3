import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NavbarComponent = ({blackNavbar}) => {
  const params = useParams()

  console.log(params)
  return (
    <Navbar expand="lg" id={blackNavbar ? 'navbarWhite' : 'navbar'} className='mb-6'>
      <Container> 
        <Navbar.Brand href="/"> 
        <h2><span className='primary-c'>Cinema</span> Search</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link path='/'>Movies</Link>
            <Link path='/tv-shows'>TV Shows</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent