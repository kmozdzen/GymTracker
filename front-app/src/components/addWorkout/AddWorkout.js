import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddWorkout = (props) => {
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [selected, setSelected] = useState(null);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        add(event);
      }
      setValidated(true);
    };

    async function add(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/workouts/", {
            reps: reps,
            weight: weight,
            email: localStorage.getItem("email"),
            exercise: selected
            }).then((res) =>
            {
             console.log(res.data);
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }


    return (
        <div>
            <Form.Select aria-label="Default select example" value={selected} onChange={e => {
                setSelected(e.target.value);
          }}>
            {props.exercises?.map((exercise, index) => 
                <option key={index} value={exercise.name}>{exercise.name}</option>
             )}
            </Form.Select>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="reps"
                            value={reps}
                            onChange={(event) => {setReps(event.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="weight"
                            value={weight}
                            onChange={(event) => {setWeight(event.target.value)}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">OK</Button>  
            </Form>        
        </div>
    );
}
export default AddWorkout;