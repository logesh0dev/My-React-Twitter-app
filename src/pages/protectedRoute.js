import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { BrowserRouter as Router, Routes, Route, Link,useNavigate,Navigate } from "react-router-dom";
import PageLoading from './PageLoading';


const ProtectRoute = ({children}) =>{

    const [user,isloading]= useAuthState(auth)
    console.log('ssss',useAuthState(auth))

    if(isloading){
        // console.log('asdf',isloading,user)
        return <PageLoading/>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children
};

export default ProtectRoute;