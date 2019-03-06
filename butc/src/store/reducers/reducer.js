import * as actionTypes from '../actions/actionTypes';
import initialState from '../initial_data/iniitalState';
import { calculateScores, rank_archers } from './reducer_logic/seedingScoring';
import { calculateH2HScores } from './reducer_logic/h2h_logic';
import { saveUniversities, getData, failedDataFetch } from '../actions/actions';
import axios from '../../axios';

function addUniversity(state, action) {
  var new_university_id = state.last_university_id + 1;
  return {
    ...state,
    universities:
      state.universities.concat(
        {
          id: state.new_university_id,
          name: action.data.name,
          archers: action.data.archers,
          target: action.data.target
        }),
    last_university_id: new_university_id
  };
}

function updateUniversity(state, action) {
  console.log('inside UPDATE_UNIVERSITY');
  console.log(action.data);
  console.log(Object.keys(action.data));
  const universities = [...state.universities];
  const action_keys = Object.keys(action.data);
  state.universities.map((university, index) => {
    if (university.id === action.data.id) {
      action_keys.map((key) => {
        universities[index][key] = action.data[key];
      });
      
    }
  });
  return {
    ...state,
    universities: universities
  };
}

function updateScores(state, action) {
  console.log('inside UPDATE_SC ORE');
  // Find which archer the score applies to and update arrows accordingly
  // Then recalculate hits, ranking, total and numXs etc.

  const universities = [...state.universities];

  console.log(action);
  state.universities.map((university, uni_index) => {
    university.archers.map((archer, archer_index) => {
      if (archer.id === action.data.archer.id && archer.first_name === action.data.archer.first_name && archer.surname === action.data.archer.surname) {
        universities[uni_index].archers[archer_index] = action.data.archer;
      }
    });
  });
  return {
    ...state,
    universities: calculateScores(universities),
    archerScores: rank_archers(universities)
  };
}

function updateH2HRound(state, action) {
  console.log('updating H2H round');
  console.log(action);
  console.log(state);
  const universities = [...state.universities];
  // add h2h score entry to correct university
  state.universities.map((university, index) => {
    if (university.id === action.data.university.id && university.name === action.data.university.name) {
      universities[index].h2hScoring[action.data.round].ends = action.data.ends;
      universities[index].h2hScoring[action.data.round].shootOff = action.data.shootOff;
    }
  });
  // call calculateScores
  return {
    ...state,
    universities: calculateH2HScores(universities, action.data.round)
  };
}

// -------------------- DB LOGIC ---------------------------

function returnState(state, action) {
  console.log('returning state');
  console.log(action);
  return {
    ...state,
    universities: action.data,
    error: false
  };
}

function dataFetchFailed(state, action) {
  return {
    ...state,
    error: true
  };
}


// ----------------------REDUCER -----------------------------

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_UNIVERSITY:
      return addUniversity(state, action);

    case actionTypes.UPDATE_UNIVERSITY:
      return updateUniversity(state, action);

    case actionTypes.UPDATE_SCORE:
      return updateScores(state, action);

    case actionTypes.UPDATE_H2H_ROUND:
      return updateH2HRound(state, action);

    case actionTypes.GET_UNIVERSITIES:
      return returnState(state, action);

    case actionTypes.SAVE_UNIVERSITIES:
      return returnState(state, action);

    default:
      return state;
  }
};


export default reducer;