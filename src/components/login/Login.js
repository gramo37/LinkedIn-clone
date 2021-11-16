import React, { useState } from 'react';
import './css/Login.css';
import logo from './linkedin.png'
import { auth } from '../Firebase'
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();

    const [userDetails, setuserDetails] = useState({
        userName: "",
        userProfilePic: "",
        userEmail: "",
        userPassword: ""
    });


    const onChange = (event) => {
        setuserDetails({ ...userDetails, [event.target.name]: event.target.value })
    }

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userDetails.userName,
                photoURL: userDetails.userProfilePic
            }))
        }).catch(error=>{alert(error)})
    }


    const registerToApp = () => {

        if (!userDetails.userName) {
            alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: userDetails.userName,
                    photoURL: userDetails.userProfilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: userDetails.userName,
                            photoURL: userDetails.userProfilePic
                        }))
                    })
            }).catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="login">

            <div className="login-form">

                <div className="login-top">
                    <h4>LinkedIn</h4>
                    <img src={logo} alt="" />
                </div>

                <form className="login-mid">
                    <div className="login-components">
                        <input onChange={onChange} placeholder="Full Name (required if registering)" type="text" className="form-control" id="name" aria-describedby="emailHelp" name="userName" />
                    </div>
                    <div className="login-components">
                        <input onChange={onChange} placeholder="Profile pic URL (optional)" type="url" className="form-control" id="email" aria-describedby="emailHelp" name="userProfilePic" />
                    </div>
                    <div className="login-components">
                        <input onChange={onChange} placeholder="Email" type="email" className="form-control" id="email" aria-describedby="emailHelp" name="userEmail" />
                    </div>
                    <div className="login-components">
                        <input onChange={onChange} placeholder="Password" type="password" className="form-control" id="password" name="userPassword" />
                    </div>
                    <button type="submit" onClick={loginToApp} >Sign in</button>
                </form>

                <div className="login-bottom">
                    <p><strong>Not a member? </strong><a onClick={registerToApp}>Register now</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;
