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
import AddWorkout from "../addWorkout/AddWorkout";
import axios from "axios";
import EditWorkout from "../editWorkout/EditWorkout";

const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token")};

const Workout = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isAddOpen, setIsAddOpen] = React.useState(false);
    const [isEditOpen, setIsEditOpen] = React.useState(false);

    const [pickedDate, setpickedDate] = useState(new Date());
    const [textDate, settextDate] = useState();
    
    const [workouts, setWorkouts] = useState();
    const [myWorkouts, setMyWorkouts] = useState();
    
    const handleShowClick = () => {
        console.log(localStorage.getItem("token"))
        try{
            let month = pickedDate.getMonth() + 1;
            let day = pickedDate.getDate();
            let date = pickedDate.getFullYear() + "-" + month + "-" + day;
            settextDate(date);
            fetch("http://localhost:8080/api/workouts/myWorkouts/" + date + "/" + localStorage.getItem("email"), {headers})
                .then((response) => response.json())
                .then((data) => {
                    setWorkouts(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }catch(exc){}
     };

     function getDayName(day)
    {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[day];        
    }

    const [exercises, setExercises] = useState();
    
    const addClick = () => {
        setIsAddOpen(!isAddOpen);
        if(!isAddOpen)
            axios.get("http://localhost:8080/api/exercises/").then((res) =>
        {
         console.log(res.data);
         setExercises(res.data);
        }
       , fail => {
       console.error(fail); // Error!
});
    }

    const updateClick = () => {
        setIsEditOpen(!isEditOpen);
        let month = pickedDate.getMonth() + 1;
        let day = pickedDate.getDate();
        let date = pickedDate.getFullYear() + "-" + month + "-" + day;
        settextDate(date);
        if(!isEditOpen)
            axios.get("http://localhost:8080/api/workouts/myWorkouts/" + date + "/" + localStorage.getItem("email"), {headers}).then((res) =>
        {
         console.log(res.data);
         setMyWorkouts(res.data);
        }
       , fail => {
       console.error(fail); // Error!
});
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
                            <ListGroup.Item className="action-list-item">
                                <h3 className="action-element" onClick={handleShowClick}>Show</h3>
                            </ListGroup.Item>
                            <hr />
                            <ListGroup.Item className="action-list-item">
                                <h3 className="action-element" onClick=
                                    {addClick}
                                >
                                Add</h3>
                            </ListGroup.Item >
                            {isAddOpen ? <AddWorkout exercises={exercises}/> : null}
                            <hr />
                            <ListGroup.Item className="action-list-item">
                                <h3 className="action-element" onClick=
                                    {updateClick}
                                >
                                Edit</h3>
                            </ListGroup.Item>
                            {isEditOpen ? <EditWorkout myWorkouts={myWorkouts}/> : null}
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
                            defaultValue={new Date(2022, 6-1, 1)}
                            minDate={new Date(2022, 5-1, 1)}
                            maxDate={new Date(2023, 10-1, 1)}
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
                            <ListGroup.Item className="exercise-item" >
                                <h4 className="bg-color">{workout.exercise}</h4>
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