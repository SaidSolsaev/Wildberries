import React, { useContext, useState } from 'react'
import "./Login.css";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import pic from "../../assets/images/login.svg";


export default function Login() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const [newUserCredentials, setNewUserCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
        firstname: undefined,
        lastname: undefined
    });

    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const navigate = useNavigate();

    const {error, dispatch} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const handleNewUserChange = (e) => {
        setNewUserCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const handleLogin = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVERURL}/auth/login`, credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch (error) {
            dispatch({type: "LOGIN_FAIL", payload: error.response.data})
        }
    };

    const handleRegister = async e => {
        e.preventDefault();
        dispatch({type: "REGISTER_START"})

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVERURL}/auth/register`, newUserCredentials)
            
            dispatch({type: "REGISTER_SUCCESS", payload: res.data})
            window.location.reload();
        } catch (error) {
            console.log(error)
            dispatch({type: "REGISTER_FAIL", payload: error.response.data})
        }
    }

    return (
        <div className={`login-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Logg inn</h2>
                        {error && <p className="error-message">{error.message}</p>}
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} style={{margin: "auto"}}/>
                            <input required id='username' onChange={handleChange} type="text" placeholder="Brukernavn" />
                        </div>
                        
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} style={{margin: "auto"}}/>
                            <input required id='password' onChange={handleChange} type="password" placeholder="Passord" />
                        </div>

                        <button className='button' onClick={handleLogin}>Logg inn</button>
                        <p className="social-text">Logg inn med</p>
                        
                        <div className="social-media">
                            <span className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} style={{margin: "auto"}}/>
                            </span>
                            
                            <span className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} style={{margin: "auto"}}/>
                            </span>
                            
                        </div>
                    </form>
            
                    <form className="sign-up-form">
                        <h2 className="title">Registrer deg</h2>
                        
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} style={{margin: "auto"}}/>
                            <input required id='firstname' onChange={handleNewUserChange} type="text" placeholder="Fornavn" />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} style={{margin: "auto"}}/>
                            <input required id='lastname' onChange={handleNewUserChange} type="text" placeholder="Etternavn" />
                        </div>
                        
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} style={{margin: "auto"}}/>
                            <input required id='username' onChange={handleNewUserChange} type="text" placeholder="Brukernavn" />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} style={{margin: "auto"}}/>
                            <input required id='email' onChange={handleNewUserChange} type="email" placeholder="Email" />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} style={{margin: "auto"}}/>
                            <input required id='password' onChange={handleNewUserChange} type="password" placeholder="Passord" />
                        </div>

                        <button className='button' onClick={handleRegister}>Registrer</button>
                        <p className="social-text">Eller registrer deg med</p>
                        
                        <div className="social-media">
                            <span className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} style={{margin: "auto"}}/>
                            </span>
                            
                            <span className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} style={{margin: "auto"}}/>
                            </span>
                            
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Ny her?</h3>
                        
                        <p>Registrer en bruker nå!</p>
                        
                        <button className="button transparent" onClick={handleSignUpClick}>
                            Registrer deg
                        </button>
                    </div>
                    
                    <img src={pic} className="image" alt="login" />
                </div>
                
                <div className="panel right-panel">
                    <div className="content">
                        <h3>En av oss?</h3>
                        
                        <p>
                            Fortsett til innlogging!
                        </p>
                        
                        <button onClick={handleSignInClick} className="button transparent" id="sign-in-btn">
                            Logg inn
                        </button>
                    </div>
                    <img src={pic} className="image" alt="login" />
                </div>
            </div>
        </div>
    )}
        
  