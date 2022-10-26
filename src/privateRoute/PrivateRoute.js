import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
const {user} = useContext(AuthContext)
if(!user){
    
}


  
};

export default PrivateRoute;