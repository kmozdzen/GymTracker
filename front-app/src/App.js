import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';
import Exercise from './components/exercises/Exercise';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Workout from './components/workout/Workout';
import { ProtectedRoute } from './components/authentication/ProtectedRoute';

const App = () => {


    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route 
                        path='/' 
                        element={<Home/>}>
                    </Route>
                    <Route 
                        path='/register' 
                        element={<Register/>}>
                    </Route>
                    <Route 
                        path='/login' 
                        element={<Login/>}>
                    </Route>
                    <Route 
                        path='/profile' 
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }>
                    </Route>
                    <Route 
                        path='/workouts' 
                        element={
                            <ProtectedRoute>
                                <Workout />
                            </ProtectedRoute>
                        }>
                    </Route>
                    <Route 
                        path='/exercises/:name'
                        element={
                            <ProtectedRoute>
                                <Exercise />
                            </ProtectedRoute>
                        }>
                    </Route>
                    <Route 
                        path='/logout'
                        element={
                            <ProtectedRoute>
                                <Exercise />
                            </ProtectedRoute>
                        }>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}
export default App;
