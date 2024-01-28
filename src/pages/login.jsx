import React from 'react';
import './login.css';
import { Styled } from 'styled-components';

function Login() {
    return (

      

        <div className="login-container">

            <div className="background-text">
                {/* Konten di latar belakang */}
                <h1 className='text1'>Welcome!</h1><br />
                <h2 className='text2'>We're happy to have you back. Please log in to continue.!</h2>
            </div>

            <div className="login-content">
                <div className="login-form">
                    {/* Codingan untuk form login */}
                    <h2>Login</h2>
                    <form>
                        <label>Username:</label>
                        <input type="text"/>
                        <label>Password:</label>
                        <input type="password"/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;