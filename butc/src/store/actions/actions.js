import * as actionTypes from './actionTypes';
import { TIMEOUT_VALUE } from '../../settings';
import axios from '../../axios';

// -------------------- Authentication Logic --------------------

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDKAc1oO5QGYnzEWvoNshh7AaH-ncTvyig';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDKAc1oO5QGYnzEWvoNshh7AaH-ncTvyig';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};

// ---------------------- Database Logic ------------------------
export const getData = (data) => {
    console.log('Setting Data from Firebase');
    return {
        type: actionTypes.GET_UNIVERSITIES,
        data: data
    };
};

export const saveUniversities = (data) => {
    console.log('saving universities');
    console.log(data);
    return {
        type: actionTypes.SAVE_UNIVERSITIES,
        data: data
    };
};


export const failedDataFetch = () => {
    return {
        type: actionTypes.FAILED_DATA_FETCH
    };
};

// -------------------------  Core Logic --------------------


const saveResult = (action_type, res) => {
    return {
        type: action_type,
        data: res
    };
};


export const add_university = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(actionTypes.ADD_UNIVERSITY, res));
        }, TIMEOUT_VALUE);
    };
};

export const remove_university = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(actionTypes.REMOVE_UNIVERSITY, res));
        }, TIMEOUT_VALUE);
    };
};

export const update_university = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(actionTypes.UPDATE_UNIVERSITY, res));
        }, TIMEOUT_VALUE);
    };
};

export const update_score = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(actionTypes.UPDATE_SCORE, res));
        }, TIMEOUT_VALUE);
    };

};

export const update_h2h_round = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(actionTypes.UPDATE_H2H_ROUND, res));
        }, TIMEOUT_VALUE);
    };
};