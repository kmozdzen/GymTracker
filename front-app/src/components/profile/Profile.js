import '../home/Home.css'
import './Profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Container } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import Header from '../header/Header';

import { useState } from 'react';
import { useEffect } from 'react';

const Profile = () => {
    // const [user, setUser] = useState();

    //  useEffect(() => {
    //     fetch('http://localhost:8080/api/users/email/' + localStorage.getItem("email"))
    //        .then((response) => response.json())
    //        .then((data) => {
    //            console.log(data);
    //           setUser(data);
    //        })
    //        .catch((err) => {
    //            console.log(err.message);
    //        });
    //  }, []);

    let email = localStorage.getItem("email");
    let name = localStorage.getItem("name");
    let surname = localStorage.getItem("surname");

    return (
        <Container fluid="lg">
        <Header />
        <div className="profile-container">
            <div className="profile-icon">
                <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className="profile-content">
                <ListGroup className="user-data-list" variant="flush">
                    <ListGroup.Item>
                        <h3>Email:</h3>
                        <h4 >{email}</h4>
                    </ListGroup.Item>
                    <hr />
                    <ListGroup.Item>
                        <h3>Name:</h3>
                        <h4 >{name}</h4>
                    </ListGroup.Item>
                    <hr />
                    <ListGroup.Item>
                        <h3>Surname:</h3>
                        <h4 >{surname}</h4>
                    </ListGroup.Item>
                    <hr />
                </ListGroup>
            </div>
        </div>
     </Container>
    );
}

export default Profile;
