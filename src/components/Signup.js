import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../components/style.css';
import '../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                navigate('/');

            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div className='main'>
            <div className='contain'>
                <h1>Sign Up</h1>
                <form onSubmit={submit}>
                    <input type='text' placeholder='Enter your name' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email-ID' />
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />

                    <input type='submit' />
                </form>
                <br />
                Already have an Account?<Link to="/" className='sub_btn'>Log in here!</Link>
            </div>
        </div>
    )
}

export default Signup
