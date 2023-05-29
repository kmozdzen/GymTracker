import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

  const logout = () => axios.post('http://localhost:8080/api/v1/auth/logout',{
    token: localStorage.getItem("token")
  })
    .then((response) => {
      window.location.reload(false);
    }
    )
    .catch((err) => {
        console.log(err.message);
    });

    return (
        <Navbar expand="lg" variant="dark" >
          <Container>
            <Navbar.Brand href="/"><h1>GymTracker</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="/workouts" >Workout</Nav.Link>
                <Nav.Link href="/exercises/all">Exercises</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link id="man-id" href="#"><FontAwesomeIcon onClick={logout}  icon={faArrowRightFromBracket}/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header