import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap';

import './Header.css'
const Header = () => {
    return (
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/"><h1>GymTracker</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="/workout" >Workout</Nav.Link>
                <Nav.Link href="/exercises/all">Exercises</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link id="man-id" href="/logout"><FontAwesomeIcon icon={faArrowRightFromBracket}/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header