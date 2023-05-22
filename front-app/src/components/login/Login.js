import '../home/Home.css'
import './Login.css'
import HomeHeader from "../home/HomeHeader";

import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    return (
        <Container fluid="md">
            <HomeHeader/>
            <Row >
                <Col lg="6" className='login-container'>
                    <Form>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="user-addon"><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                aria-describedby="user-addon"
                            />
                        </InputGroup>
                        
                        <InputGroup className="mb-4">
                        <InputGroup.Text id="lock-addon"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="lock-addon"
                        />
                        </InputGroup>

                        <Button className="log-buttons" variant="outline-light" size="lg" type="button"><FontAwesomeIcon icon={faRightToBracket}/> Login</Button>
                    </Form>
                </Col>
                <Col lg="6" className="man-img-container">
                    <img className="man-img" src="images/man.svg" alt="man"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
