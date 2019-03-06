import {getData} from './actions/actions';

//butc copy spreadsheet
const API = 'https://sheets.googleapis.com/v4/spreadsheets/1uFI-7nYfe8OobXjuuHCYFC5wf9-cQsjDUwrMLvQyi-w/values:batchGet?majorDimension=COLUMNS&ranges=Universities&key=AIzaSyDGfidY0fI_gQs6o2HhrgXjC6RkBi8aj9w';


export const initialiseUniversities = () => {
    return dispatch => {
         
     fetch(API).then(response => response.json()).then(data => {
        console.log('fetching results');

        var batchColumnValues = data.valueRanges[0].values[0];       
        console.log(batchColumnValues[0]);
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