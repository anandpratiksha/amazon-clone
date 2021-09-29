import React, { useState } from 'react';
import { auth } from "../../firebase/firebase";
import "./Login.css"
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {
        e.preventDefault(); //this stop the refresh
        auth
            .signInWithEmailAndPassword(email, password) //logic for SignIn
            .then(auth => {  //logged in successfully , redirect to home page
                history.push('./');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault(); //this stop the refresh
        auth
            .createUserWithEmailAndPassword(email, password) //logic for register
            .then((auth) => { //created the user & logged in
                history.push('./');

            })
            .catch(error => alert(error.message))
    }
    return (

// Login form with EMAIL n PASSWORD

        <div className="login">
            <Link to="/">

                {/* Amazon Logo will get us to Main page*/}
                <img className="login__logo"
                    src="data:image/jpeg;base64,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" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>

                    {/* who ALREADY have Email can signIn */}
                    <h5>E-mail</h5>
                    <input type='text' placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                    
                    {/* Password should be of 6 Char */}
                    <h5>Password</h5>
                    <input type='password' placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                    {/* SignIn button */}
                    <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <div className="login__new"><h5>New to Amazon?</h5></div>

                {/* for ppl who are NEW to amazon */}
                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;



