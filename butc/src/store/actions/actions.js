import * as actionTypes from './actionTypes';
import { TIMEOUT_VALUE } from '../../settings';


// ---------------------- Database Logic ------------------------
export const getData = (data) => {
    console.log('Setting Data from Firebase');
    return {
        type: actionTypes.GET_UNIVERSITIES,
        data: data
    };
};

export const getUniversityScoreList = (data) => {
    return {
        type: actionTypes.GET_UNIVERSITY_SCORE_LIST,
        data: data
    };
};

export const getIndividualScoreList = (data) => {
    return {
        type: actionTypes.GET_INDIVIDUAL_SCORE_LIST,
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