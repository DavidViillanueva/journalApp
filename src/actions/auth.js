import { types } from "../types/types"


export const startLoginWithEmailPassword = ( email, password) => {
    return ( dispatch) => {

        setTimeout(() => {
            dispatch( login(1234,'David') );
        }, 3000);
    }
}

export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});