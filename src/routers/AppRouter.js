import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';

import { login } from '../actions/auth';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
  

const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLogged, setIsLogged ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if( user?.uid ) {
                dispatch( login(user.uid, user.displayName));
                setIsLogged( true );
            } else {
                setIsLogged( false );
            }

            setChecking( false );
        })
    }, [ dispatch, setChecking ]);

    if( checking ){
        return(
            <h1>Loading</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRoute 
                        isAutenticated = { isLogged }
                        component = { AuthRouter}
                        path="/auth"
                    />

                    <PrivateRoute 
                        isAutenticated = { isLogged }
                        component = { JournalScreen }
                        exact
                        path="/"
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
