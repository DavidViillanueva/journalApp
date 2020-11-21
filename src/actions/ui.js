import { types } from "../types/types";

export const setError = ( msg ) => ({
    type: types.uiSetError,
    payload: msg
});

export const unsetError = () => ({
    type: types.uiUnsetError
})