import '../home/Home.css'
import './Profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Container } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import Header from '../header/Header';

const Profile = ({user}) => {
    if(user === undefined) {return}
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
                        <h4 >{user.email}</h4>
                    </ListGroup.Item>
                    <hr />
                    <ListGroup.Item>
                        <h3>Name:</h3>
                        <h4 >{user.name}</h4>
                    </ListGroup.Item>
                    <hr />
                    <ListGroup.Item>
                        <h3>Surname:</h3>
                        <h4 >{user.surname}</h4>
                    </ListGroup.Item>
                    <hr />
                </ListGroup>
            </div>
        </div>
     </Container>
    );
}

export default Profile;
