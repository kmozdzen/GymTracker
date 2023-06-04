import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditWorkout = (props) => {
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [selected, setSelected] = useState(0);    
    const [validated, setValidated] = useState(false);

    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token")};

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        update(event);
      }
      setValidated(true);
    };

    async function update(event) {
        event.preventDefault();
        try {
          await axios.put("http://localhost:8080/api/workouts/", {
            idWorkout: selected,
            reps: reps,
            weight: weight,
            email: localStorage.getItem("email")
            }, {headers}).then((res) =>
            { alert("Success");
          }, fail => {
            console.error(fail); // Error!
    });
          }
  
          catch (err) {
            alert(err);
          }
        
        }

    return (
        <div className="add-container">
            <Form.Select className="add-select" size="md" aria-label="Default select example" value={selected} onChange={e => {
                setSelected(e.target.value);
            }}>
            {props.myWorkouts?.map((workout, index) => 
                <option key={index} value={workout.idWorkout}>Name: {workout.exercise} Reps: {workout.reps} Weight: {workout.weight}</option>
             )}
            </Form.Select>   
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 justify-content-md-center bg-color">
                    <Form.Group as={Col} md="3" controlId="validationCustom01" className="add-col bg-color">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="0"
                            value={reps}
                            onChange={(event) => {setReps(event.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02" className="add-col bg-color">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="0"
                            value={weight}
                            onChange={(event) => {setWeight(event.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button className="ok-button" type="submit">OK</Button>  
            </Form>   
        </div>
    );
}
export default EditWorkout;