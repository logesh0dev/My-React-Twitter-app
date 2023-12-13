import twitterImage from "../../assets/image/Twitter.webp";
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from "../../firebase.init";
import './login.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import GoogleButton from 'react-google-button'


export default function Login() {




    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    console.log('login cred google', googleUser, googleLoading, googleError, useSignInWithGoogle(auth))

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    console.log('login cred normal', user, loading, error, useSignInWithEmailAndPassword(auth))
    console.log('usefunction call', useSignInWithEmailAndPassword(auth))

    const navigate = useNavigate()
    console.log(user)


    if (user || googleUser) {
        navigate('/')
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('clicked', email, password)
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }


    return (
 

        <div className="parent clearfix">
            <div className="bg-illustration">


            </div>

            <div className="login">
                <div className="container">
                    <br></br>
                    <TwitterIcon className="Twittericon" style={{ color: 'skyblue' }} />
                    <h2 className="heading1" >Happening now</h2>

                    <div className="login-form">
                        <form onSubmit={handlesubmit} >
                            <input type="email" value={email} className="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" value={password} className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <div className="btn-login" >
                                <button type="submit" className="btn" >Login</button>
                            </div>
                        </form>
                        <hr />
                        <div className="google-button" >
                            <GoogleButton onClick={handleGoogleSignIn} className="g-btn" type="light" ></GoogleButton>
                        </div>
                        <div>
                            Dont have an account?
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'skyblue', fontWeight: 'Bold', marginLeft: '5px' }} > Sing Up </Link>
                        </div>
                    </div>
                    <br></br>

                </div>
            </div>
        </div>

    )
}