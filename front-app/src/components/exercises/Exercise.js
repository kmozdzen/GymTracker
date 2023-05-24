import "../home/Home.css"
import "./Exercise.css"
import React from "react";
import Header from "../header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import data from "./ExercisesContent";
import axios from "axios";

const Exercise = () => {

    const { name } = useParams();

    const [exercises, setExercises] = useState();
    
    useEffect(() => {
    axios.get('http://localhost:8080/api/exercises/' + name
    )
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
                <div className="cards-container">
                {
                    data.map((exerciseCard) =>{
                        return <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={exerciseCard.img} />
                        <Card.Body>
                            <Card.Title><a className="muscle-name" href={exerciseCard.muscle}>{exerciseCard.muscle.toUpperCase()}</a></Card.Title>
                        </Card.Body>
                        </Card>
                    })
                } 
                </div>
            </div>
            <div className="exercises-content">
                <h4 className="muscle-title">{name.toUpperCase()}</h4>
                {exercises?.map(exercise => 
                    <div>
                        <p><span className="text-label">Name: </span> {exercise.name}</p>
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