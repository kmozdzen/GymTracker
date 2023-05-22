import './Home.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HomeHeader = () => {
 
return (
    <Navbar expand="lg">
    <Container>
        <Navbar.Brand href="/"><h1>GymTracker</h1></Navbar.Brand>
    </Container>
    </Navbar>
  )
}

export default HomeHeader