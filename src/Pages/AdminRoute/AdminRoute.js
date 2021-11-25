import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation()
    if (isLoading) {
        return <CircularProgress color="success" />
    }
    if (user.email && admin) {
        return children
    }
    <Navigate to='/' state={{ from: location }} />
};

export default AdminRoute;