import './home.css'

import Feed from "./Feed/Feed";
import Widget from "./Widget/Widget";
import Sidebar from "./sidebar/Sidebar";

import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { Outlet } from 'react-router-dom';

export default function Home() {

    const user = useAuthState(auth)
    const handleLogout = () =>{
        signOut(auth)
    }

    

    return (

     
       <div className='homeapp' >
            <Sidebar handleLogout={handleLogout} user={user}  ></Sidebar>
            <Outlet></Outlet>
            <Widget></Widget>
       </div>

    )
}