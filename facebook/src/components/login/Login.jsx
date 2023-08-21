import React, { useContext, useState } from 'react';
import './Login.css';
import Register from '../register/Register';
import { DataContext } from '../../context/Data.context';

const Login = () => {

    const { setRegisterdiv } = useContext(DataContext);

    return (

        <div className='login-body'>
            <div className="flex-login-body">
                <div className="left-login-body">
                    <div className='login-facebook-text-image'>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
                    </div>
                    <div className='login-facebook-quote-text'>
                        <h2>Facebook helps you connect and share with the people in your life.</h2>
                    </div>
                </div>
                <div className="right-login-body">
                    <form>
                        <input className='login-input-css' type="text" placeholder='Email Address or Phone Number' />
                        <input className='login-input-css' type="password" placeholder='Password' />
                        <input type="submit" className='login-button-css' value="Log in" />
                    </form>
                    <p className='login-forget-password-css'>Forgotten Password?</p>
                    <div className='login-underline-css'></div>
                    <button className='login-create-new-account-css' onClick={() => setRegisterdiv(true)}>Create new account</button>
                </div>
            </div>
            <Register />

        </div>
    )
}

export default Login
