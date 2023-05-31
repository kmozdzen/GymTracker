import '../home/Home.css'
import './Register.css'
import HomeHeader from "../home/HomeHeader";
import { useState } from 'react';
import axios from "axios"

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
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        save(event);
      }
  
      setValidated(true);
    };

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/auth/register", {
          email: email,
          password: password,
          name: name,
          surname: surname,
          });
          alert("Registation Successfully");
 
        } catch (err) {
          alert(err);
        }
      }

    return (
        <Container fluid="md">
            <HomeHeader/>
            <Row >
                <Col lg="6" className='register-container'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <InputGroup 
                        className="mb-4"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        >
                        <InputGroup.Text id="user-addon"><FontAwesomeIcon icon={faUserAlt}/></InputGroup.Text>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            aria-describedby="user-addon"
                        />
                        </InputGroup>
    
                        <InputGroup 
                        className="mb-3"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        >
                        <InputGroup.Text id="lock-addon"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            aria-describedby="lock-addon"
                        />
                        </InputGroup>

                        <InputGroup 
                        className="mb-3"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        >
                        <InputGroup.Text id="signature-addon"><FontAwesomeIcon icon={faSignature}/></InputGroup.Text>
                        <Form.Control
                            required
                            placeholder="Name"
                            aria-describedby="signature-addon"
                        />
                        </InputGroup>

                        <InputGroup 
                        className="mb-3"
                        value={surname}
                        onChange={(event) => {
                            setSurname(event.target.value);
                        }}
                        >
                        <InputGroup.Text id="signature-addon"><FontAwesomeIcon icon={faSignature}/></InputGroup.Text>
                        <Form.Control
                            required
                            placeholder="Surname"
                            aria-describedby="signature-addon"
                        />
                        </InputGroup>
                        <Button 
                        type="submit"
                        className="log-buttons" variant="dark" size="lg" ><FontAwesomeIcon icon={faAddressCard}/> Register</Button>
                    </Form>
                </Col>
                <Col lg="6" className="man-img-container">
                    <img className="man-img" src="images/man.svg" alt="man"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
