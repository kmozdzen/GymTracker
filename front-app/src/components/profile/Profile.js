import '../home/Home.css'
import './Profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Container } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import Header from '../header/Header';

const Profile = () => {
    let email = localStorage.getItem("email");
    let name = localStorage.getItem("name");
    let surname = localStorage.getItem("surname");

    return (
        <Container fluid="lg">
        <Header/>
        <div className="profile-container">
            <div className="profile-icon">
                <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className="profile-content">
                <ListGroup className="user-data-list" variant="flush">
                    <ListGroup.Item className="user-data-list-item">
                        <div className="data-item">
                            <h2>Email:</h2>
                            <p>{email}</p> 
                        </div>
                        <hr />
                    </ListGroup.Item>
                    <ListGroup.Item className="user-data-list-item">
                        <div className="data-item">
                            <h2>Name:</h2>
                            <p>{name}</p>
                        </div>
                        <hr />
                    </ListGroup.Item>
                    <ListGroup.Item className="user-data-list-item">
                        <div className="data-item">
                            <h2>Surname:</h2>
                            <p>{surname}</p>
                        </div>
                        <hr />
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
     </Container>
    );
}

export default Profile;
