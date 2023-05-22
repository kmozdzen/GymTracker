import "../home/Home.css"
import "./Workout.css"

import React from "react";

import Header from "../header/Header";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { ListGroup } from "react-bootstrap";

import { DatePicker } from "react-responsive-datepicker"
import 'react-responsive-datepicker/dist/index.css'


const Workout = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [pickedDate, setpickedDate] = React.useState()

    console.log(pickedDate)
    
    return (
        <Container fluid="lg">
        <Header />
        <div className="workout-container">
                <h2 className="workout-title">Workout</h2>
                <hr />
                <Row className="row jalign-items-center">
                    <Col lg="6">
                        <ListGroup className="choice-list">
                            <ListGroup.Item border="0">
                                <h3>Show</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Add</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Edit</h3>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="6" className="asd">
                    <div>
                        <button
                            onClick={() => {
                            setIsOpen(true)
                            }}
                        >
                            Open
                        </button>
                        <DatePicker
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            onChange={setpickedDate}
                            defaultValue={new Date(2022, 8, 8)}
                            minDate={new Date(2023, 1, 1)}
                            maxDate={new Date(2023, 30, 12)}
                            headerFormat='DD, MM dd'
                        />
                    </div>
                    </Col>
                </Row>
            </div>
     </Container>
    );
}

export default Workout;