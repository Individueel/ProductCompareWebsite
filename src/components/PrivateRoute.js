import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
    const user = useSelector(state => state.user);

    return user.id ? <Outlet /> : <Navigate to="/" />;
};