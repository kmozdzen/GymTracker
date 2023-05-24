import './Home.css'
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import HomeHeader from "./HomeHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate(); 
    const routeChangeToRegister = () =>{ 
        let path = `register`; 
        navigate(path);
    }

    const routeChangeToLogin = () =>{ 
        let path = `login`; 
        navigate(path);
    }


    return (
        <Container fluid="md">
            <HomeHeader/>
            <Row >
                <Col lg="6">
                    <h2 className='h2-text'>Watch your progress!</h2>
                    <div className="buttons">
                        <Button onClick={routeChangeToRegister} className="log-buttons" variant="dark" size="lg" type="button"><FontAwesomeIcon icon={faAddressCard}/> Register</Button>
                        <Button onClick={routeChangeToLogin} className="log-buttons" variant="outline-light" size="lg" type="button"><FontAwesomeIcon icon={faRightToBracket}/> Login</Button>
                    </div>
                </Col>
                <Col lg="6" className="man-img-container">
                    <img className="man-img" src="images/man.svg" alt="man"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
