import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

import { setError, unsetError } from '../../actions/ui';
import useForm from '../../hooks/useForm';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: 'David',
        email: 'david1997@live.com.ar',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;


    const handleRegister = ( e ) => {
        e.preventDefault();
        if( isFormValid() ){
            dispatch( startRegisterWithEmailPasswordName(email,password,name) );
        }
    };

    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required'));
            return false;
        } 

        if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is invalid'));
            return false;
        }

        if ( password !== password2 || password2.length < 6 ) {
            dispatch( setError('Password should be at least 6 characters and match'));
            return false;
        }

        dispatch( unsetError() );
        return true;
    };

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            
            <form onSubmit = { handleRegister }>
                {msgError &&
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }   
                <input 
                    type="name "
                    placeholder="Name"
                    name="name"
                    className="auth__input"         
                    autoComplete="off"
                    value= { name }
                    onChange= { handleInputChange }
                />
                <input 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                    value = { email }
                    onChange= { handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value = { password }
                    onChange= { handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Password confirm"
                    name="password2"
                    className="auth__input"
                    value = { password2 }
                    onChange= { handleInputChange }
                />

                <button
                    type="submit" 
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

            </form>

            <Link
                to="/auth/login"
                className="link "
            >
                Already registered?
            </Link>
        </div>
    )
}

export default RegisterScreen
