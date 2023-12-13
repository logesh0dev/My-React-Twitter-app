import React from "react";
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from "../../firebase.init";
import twitterImage from "../../assets/image/Twitter.webp";
import TwitterIcon from '@mui/icons-material/Twitter';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import GoogleButton from 'react-google-button'
import './login.css';




const Singup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')

    // const [error, setError] = useState('')
    const [signInWithMicrosoft, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    if (user || googleUser) {
        navigate('/')
    }

    if (error) {
        console.log(error.message)
    }
    if (loading) {
        console.log('loading...')
    }

    console.log(error)

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('clicked', username, name, email, password,)
        createUserWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {
        signInWithMicrosoft()
    }

    return (

        <div className="parent clearfix">
            <div className="bg-illustration">


            </div>

            <div className="login">
                <div className="container">
                    <br></br>
                   
                    <div className="form-box" >
                        <TwitterIcon className="Twittericon" style={{ color: 'skyblue' }} />
                        <h2 className="heading1" >Happening now</h2>
                        <h3 className="heading1" >Join Twitter Today</h3>
                        <form onSubmit={handlesubmit} >
                            <input type="text" value={username} className="display-name" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" value={name} className="display-name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />

                            <input type="email" value={email} className="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" value={password} className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <div className="btn-login" >
                                <button type="submit" className="btn" >Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <hr />
                    <div className="google-button" >
                        <GoogleButton onClick={handleGoogleSignIn} className="g-btn" type="light" ></GoogleButton>
                    </div>
                    <div>
                        Already have an account?
                        <Link to="/login" style={{ textDecoration: 'none', color: 'skyblue', fontWeight: 'Bold', marginLeft: '5px' }} > Login </Link>
                    </div>
                    <br></br>

                </div>
            </div>
        </div>

    )
}

export default Singup;