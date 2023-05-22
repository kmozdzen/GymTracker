import "../home/Home.css"
import "./Exercise.css"
import React from "react";
import Header from "../header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Exercise = () => {

    const { name } = useParams();

    const [exercises, setExercises] = useState();
    
    useEffect(() => {
    fetch('http://localhost:8080/api/exercises/' + name)
           .then((response) => response.json())
           .then((data) => {
               console.log(data);
               setExercises(data);
           })
           .catch((err) => {
               console.log(err.message);
           });
     }, []);
 
    return (
        <Container fluid="lg">
        <Header />
        <div className="exercises-container">
                <h2 className="exercsies-title">Exercises</h2>
                <hr />
                <Row className="row justify-content-lg-around categories">
                    <Col lg="3" className="category">
                        <a href="legs"><h3>LEGS</h3></a>
                    </Col>
                    <Col lg="3"className="category">
                        <a href="chest"><h3>CHEST</h3></a>
                    </Col>
                    <Col lg="3" className="category">
                        <a href="biceps"><h3>BICEPS</h3></a>
                    </Col>
                </Row>
            </div>
            <div>
                {exercises?.map(exercise => 
                    <div>
                        {exercise.name}
                    </div>
             )}
            </div>
     </Container>
    );
}
export default Exercise;