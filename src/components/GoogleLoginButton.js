import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { getSingleUser, createUser } from '../api/UserService';

import "./GoogleLoginButton.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../userReducer';

export default function GoogleLoginButton() {
    const user = useSelector((state) => state.user)
    const [isSignedIn, setIsSignedIn] = useState(user?.id || null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = useGoogleLogin({
        onSuccess: tokenResponse => { retrieveData(tokenResponse.access_token); },
        onError: error => { console.error(error) }
    });

    const retrieveData = async (token) => {
        const data = await retrieveUserData(token);
        setIsSignedIn(data)
        const userData = await getSingleUser(data.sub);
        if (!userData) {
            const response = await createUser(data);
            if (!response) {
                alert("Logging in failed. Please try again later.");
                throw new Error(`Failed to create user with status code ${response.status}`);
            }
        }
        dispatch(updateUser({
            name: data.name,
            email: data.email,
            picture: data.picture,
            id: data.sub,
        }));
        navigate("/account");
    }

    const retrieveUserData = async (token) => {
        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to retrieve user data with status code ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    const handleSignOut = () => {
        setIsSignedIn(null)
        navigate("/");
    };

    return (
        <>
            <div
                className="btn me-3 btn-google"
                style={{ color: window.location.pathname === "/" ? "white" : "black", backgroundColor: window.location.pathname === "/" ? "black" : "white" }}
                onClick={() => { isSignedIn ? handleSignOut() : handleSignIn(); }}
                role="button"
            ><i>{isSignedIn ? 'Sign Out' : 'Sign In with Google'}</i></div>

            {isSignedIn &&
                <Link
                    to="/account"
                    style={{ color: window.location.pathname === "/" ? "white" : "black", backgroundColor: window.location.pathname === "/" ? "black" : "white" }}
                    className="btn me-3 btn-google"
                    role="button"><i>{user.name}</i></Link>}
        </>
    );
};