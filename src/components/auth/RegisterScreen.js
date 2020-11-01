import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title">Register</h3>
            
            <form>
                <input 
                    type="name "
                    placeholder="Name"
                    name="name"
                    className="auth__input"         
                    autoComplete="off"           
                />
                <input 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input"                    
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />
                <input 
                    type="password"
                    placeholder="Password confirm"
                    name="password2"
                    className="auth__input"                    
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
