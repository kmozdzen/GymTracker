import "../home/Home.css"
import "./Exercise.css"
import React from "react";
import Header from "../header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import data from "./ExercisesContent";

const Exercise = () => {
    const { name } = useParams();
    const [exercises, setExercises] = useState();

    useEffect( () => {
         fetch('http://localhost:8080/api/exercises/' + name)
           .then((response) => response.json())
           .then((data) => {
               setExercises(data);
           })
           .catch((err) => {
               console.log(err.message);
           });
    }, []);
 
    return (
        <Container fluid="lg">
        <Header/>
        <div className="exercises-container">
                <h2 className="exercsies-title">Exercises</h2>
                <hr />
                <div className="cards-container">
                    <Row className="justify-content-md-center">
                    {
                        data.map((exerciseCard, index) =>{
                            return (<Col md={4}>
                                <Card style={{ width: '18rem' }} key={index}>
                                <Card.Link href={exerciseCard.muscle}>
                                <Card.Img variant="top" src={exerciseCard.img} />
                                <Card.Body>
                                    <Card.Title><span className="muscle-name" >{exerciseCard.muscle.toUpperCase()}</span></Card.Title>
                                </Card.Body>
                                </Card.Link>
                                </Card>
                            </Col>
                         )})
                    } 
                    </Row>
                </div>
            </div>
            <div className="exercises-content">
                {data.findIndex(e => e.muscle === name) !== -1
                    ?
                    <h3 className="muscle-title">{name.toUpperCase()}</h3>
                    :
                    null
                }
                {exercises?.map((exercise, index) => 
                    <div key={index}>
                        <p><span className="text-label">Name: </span><span className="text-exercise-name">{exercise.name}</span></p>
                        <p><span className="text-label">Equipment: </span> {exercise.equipment}</p>
                        <p><span className="text-label">Difficulty: </span> {exercise.difficulty}</p>
                        <p><span className="text-label">Instructions: </span> {exercise.instructions}</p>
                        <hr/>
                    </div>
             )}
            </div>
     </Container>
    );
}
export default Exercise;