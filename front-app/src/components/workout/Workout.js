import "../home/Home.css"
import "./Workout.css"

import React from "react";

import Header from "../header/Header";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { Button, ListGroup } from "react-bootstrap";

import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'

import { useParams } from "react-router-dom";
import { useState, useEffect, onChange, value } from "react";

const Workout = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [pickedDate, setpickedDate] = useState(new Date());
    const [textDate, settextDate] = useState();
    const [workouts, setWorkouts] = useState();
    
    const handleShowClick = () => {
        let month = pickedDate.getMonth() + 1;
        let day = pickedDate.getDate();
        let date = pickedDate.getFullYear() + "-" + month + "-" + day;
        settextDate(date);
        fetch('http://localhost:8080/api/workouts/' + date)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(date);
                console.log(pickedDate);
                setWorkouts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
     };

     function getDayName(day)
    {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[day];        
    }

    return (
        <Container fluid="lg">
            <Header />
            <Container className="workout-container">
                <h2 className="workout-title">Workout</h2>
                <hr />
                <Row className="row workout-content">
                    <Col lg="6" className="bg-color">
                        <ListGroup className="bg-color">
                            <ListGroup.Item>
                                <h3 onClick={handleShowClick}>Show</h3>
                            </ListGroup.Item>
                            <hr />
                            <ListGroup.Item>
                                <h3>Add</h3>
                            </ListGroup.Item>
                            <hr />
                            <ListGroup.Item>
                                <h3>Edit</h3>
                            </ListGroup.Item>
                            <hr />
                        </ListGroup>
                    </Col>
                    <Col lg="6" className="calendar-col">
                    <div className="calendar-container">
                        <Button
                            className="open-button"
                            onClick={() => {
                            setIsOpen(true)
                            }}
                        >
                            Open
                        </Button>
                        <DatePicker
                            isOpen={isOpen}
                            onChange={setpickedDate}
                            onClose={() => setIsOpen(false)}
                            defaultValue={new Date(2023, 4, 5)}
                            minDate={new Date(2022, 10, 10)}
                            maxDate={new Date(2023, 10, 10)}
                            headerFormat='DD, MM dd'
                        />
                        </div>
                    </Col>
                </Row>
            </Container>
            {(workouts != null && workouts.length != 0)? 
                <Container className="workout-container">
                    <h2 className="workout-title">
                        {
                            textDate + " " + getDayName(pickedDate.getDay())
                        }
                    </h2>
                    {Array.isArray(workouts) ?
                        workouts?.map((workout, i) => 
                        <div key={i} className="workout-data bg-color">
                        <ListGroup className="bg-color">
                            <ListGroup.Item >
                                <h4 className="bg-color">{workout.exercises[0].name}</h4>
                                <br/>
                                <p className="bg-color">reps: {workout.reps}</p>
                                <p className="bg-color">weight: {workout.weight}</p>
                            </ListGroup.Item>
                        </ListGroup>
                        </div>
                    )
                    : []
                    } 
                </Container>
                :
                null
            }
            
     </Container>
    );
}

export default Workout;