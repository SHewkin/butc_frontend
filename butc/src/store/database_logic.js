import {getData, failedDataFetch} from './actions/actions';
import axios from '../axios';

//test spreadhseet
// const API = 'https://sheets.googleapis.com/v4/spreadsheets/1uTHU3yy3RLIcvU0tstEuXr5xURJkDiVNLY7jfz_MC2s/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1&key=AIzaSyDGfidY0fI_gQs6o2HhrgXjC6RkBi8aj9w';

//butc copy spreadsheet
const API = 'https://sheets.googleapis.com/v4/spreadsheets/1uFI-7nYfe8OobXjuuHCYFC5wf9-cQsjDUwrMLvQyi-w/values:batchGet?majorDimension=COLUMNS&ranges=Universities&key=AIzaSyDGfidY0fI_gQs6o2HhrgXjC6RkBi8aj9w';

export const postUniversityData = (data) => {
    console.log('Posting university data');
    console.log(data);
    return dispatch => {
        axios.put('https://butc-6dd90.firebaseio.com/butc.json', {universities:data.universities})
                    .then(response => {
                        console.log('axios.put response');
                        console.log(response);
                dispatch(getData(response.data.universities));
            })
            .catch(error => {
                console.log('error');
                console.log(error);
                dispatch(failedDataFetch());
            });
    };
};

export const initialiseUniversities = () => {
    return dispatch => {
         
     fetch(API).then(response => response.json()).then(data => {
        console.log('fetching results');

        var batchColumnValues = data.valueRanges[0].values[0];       
        var universities = [];

        batchColumnValues.map((university) => {
            universities.push(JSON.parse(university));
        });

        console.log('universities');
        console.log(universities);

        dispatch(getData(universities));
      });
    };
};