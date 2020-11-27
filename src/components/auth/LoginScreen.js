import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { setError, unsetError } from '../../actions/ui';
import useForm from '../../hooks/useForm';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'david1997@live.com.ar',
        password: '123456'
    });

    const { email, password } = formValues;


    const handleLogin = (e) =>{
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startLoginWithEmailPassword(email, password) );
        }
    };

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const isFormValid = () => {
        if( !validator.isEmail(email) ) {
            dispatch( setError('Email invalid') )
            return false;
        }

        if( password.length === 0 ) {
            dispatch( setError('Password is empty') )
            return false;
        }
        
        dispatch( unsetError() );
        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h3 className="auth__title">Login</h3>
            
            <form onSubmit={ handleLogin }>
                {msgError &&
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }
                <input 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input" 
                    value={email}
                    onChange={ handleInputChange }                   
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value= {password}
                    onChange={ handleInputChange }
                />

                <button
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled = { loading }
                >
                    Log In
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick= { handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>

                <Link   
                    to="/auth/register"
                    className="link "
                >
                    Create new account
                </Link>

            </form>

        </div>
    )
}

export default LoginScreen
