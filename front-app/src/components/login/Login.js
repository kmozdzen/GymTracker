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
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "Email not exits")
             {
               alert("Email not exits");
             }
             else if(res.data.message === "Login success")
             {
                
                navigate('/workouts');
             }
              else
             {
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

    return (
        <Container fluid="md">
            <HomeHeader/>
            <Row >
                <Col lg="6" className='login-container'>
                    <Form>
                        <InputGroup 
                        className="mb-4"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        >
                            <InputGroup.Text id="user-addon"><FontAwesomeIcon icon={faUserAlt}/></InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                aria-describedby="user-addon"
                            />
                        </InputGroup>
                        
                        <InputGroup 
                        className="mb-4"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        >
                        <InputGroup.Text id="lock-addon"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="lock-addon"
                        />
                        </InputGroup>

                        <Button 
                        onClick={login}
                        className="log-buttons" variant="outline-light" size="lg" type="button"><FontAwesomeIcon icon={faRightToBracket}/> Login</Button>
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
