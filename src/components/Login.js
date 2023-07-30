import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import '../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/home');
            })
            .catch((error) => {
                alert("Wrong Username or Password!");
            });
    }

    return (
        <div className='main'>
            <div className='contain'>
                <h1>Login</h1>
                <form onSubmit={submit}>
                    <input type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email-ID' value={email}/>
                    <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' value={password}/>

                    <input type='submit'/>
                </form>
                <br />
                Dont have an Account?<Link to="/signup" className='sub_btn'>Sign up here!</Link>
            </div>
        </div>
    )
}

export default Login
