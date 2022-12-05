import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Other from '../pages/Other';
import Albums from '../pages/Albums';
import Photos from '../pages/Photos';
import User from '../pages/User';
import Todos from '../pages/Todos';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/users' element={<Users/>}/>
            <Route path='/user/:id' element={<User/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/albums' element={<Albums/>}/>
            <Route path='/photos' element={<Photos/>}/>
            <Route path='/other' element={<Other/>}/>
            <Route path='/todos' element={<Todos/>}/>
            <Route path='*' element={<Users/>}/>
        </Routes>
    );
};

export default AppRoutes;