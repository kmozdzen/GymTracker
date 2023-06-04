import "../home/Home.css"
import "./Admin.css"
import Header from "../header/Header";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { useState, useEffect, forceUpdate } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";



const Admin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState(1);
    const [selectedRole, setSelectedRole] = useState("ROLE_USER");

    const roles = ["ROLE_USER", "ROLE_ADMIN"];

    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token")};

    useEffect(() => {
        clickVerify();
      }, []);

    const clickVerify = async () => {
        await axios(
          'http://localhost:8080/api/admin/' + localStorage.getItem("email")
        ).then(res => {
            if(res.data === true)
            {
                setIsAdmin(true)
            }
            else{
                setIsAdmin(false)
            }
        }).catch(err => 
            console.log(err))
      };

    const show = () => {
        setIsOpen(!isOpen);
        if(!isOpen)
            axios.get("http://localhost:8080/api/users/", {headers}).then((res) =>
        {
        setUsers(res.data);
        }
    , fail => {
    console.error(fail); // Error!
    });
    }

    async function addRole(event) {
        event.preventDefault();
        try {
          await axios.put("http://localhost:8080/api/admin/add-role", {
            id: selectedUser,
            role: selectedRole
        }, {headers}).then((res) =>
            { if(res.data.message === "user already have this role")
                alert("user already have this role");
              else
                alert("Success");
          }, fail => {
           console.error(fail); // Error!
    });
          }
          catch (err) {
            alert(err);
          }
        }

    return (
        <Container fluid="lg"> 
            <Header/>
            {
                isAdmin
                ?
                <div>
                <div className="admin-container">
                    <Form.Select
                    className="sm-size"
                    size="md"
                    value={selectedUser} 
                    onChange={e => {
                        setSelectedUser(e.target.value);
                        
                    }}>
                        {users?.map((user, index) => 
                            <option key={index} value={user.id}>{user.email} || {user.roles.map(role => role.name + " ")} </option>
                        )}
                    </Form.Select>
                    <Form.Select
                    className="sm-size"
                    size="md"
                    value={selectedRole} 
                    onChange={e => {
                        setSelectedRole(e.target.value);
                        
                    }}>
                        {roles?.map((role, index) => 
                            <option key={index} value={role}>{role}</option>
                        )}
                    </Form.Select>
                    <Button onClick={show}>Refresh users</Button>
                    <Button onClick={addRole}>Add role</Button>
                </div>
                </div>
            :
            null
            }
        </Container>
    );
}
export default Admin;