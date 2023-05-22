import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';
import Exercise from './components/exercises/Exercise';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Workout from './components/workout/Workout';
const App = () => {
    console.log("response.data");
    const [exercises, setExercises] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/api/exercises/')
           .then((response) => response.json())
           .then((data) => {
               console.log(data);
              setExercises(data);
           })
           .catch((err) => {
               console.log(err.message);
           });
     }, []);

     useEffect(() => {
        fetch('http://localhost:8080/api/users/5')
           .then((response) => response.json())
           .then((data) => {
               console.log(data);
              setUser(data);
           })
           .catch((err) => {
               console.log(err.message);
           });
     }, []);

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/profile' element={<Profile user={user}/>}></Route>
                    <Route path='/workout' element={<Workout/>}></Route>
                    {/* <Route path='/exercises' element={<Exercise />}></Route> */}
                    <Route 
                        path='/exercises/:name' 
                        element={<Exercise />}>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}
export default App;
