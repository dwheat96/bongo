import React, { useState } from 'react'
import './Login.css'
import logo from './bongo-black.png'
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>


    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login_logo"
                    src={logo} 
                    alt="bongo logo"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onchange={e => setPassword(e.target.value)}
                    />
                    <button 
                        onlick={ signIn }
                        className="login_signInButton"
                        type='submit'
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the FAKE AMAZON CLONE, Bongo Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login_registerButton">
                    Create your Bongo Account
                </button>
            </div>
        </div>
    )
}

export default Login
