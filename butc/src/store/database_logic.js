import {getData, getUniversityScoreList, getIndividualScoreList} from './actions/actions';
import _ from 'lodash';

//butc copy spreadsheet
const API = 'INSERT URL HERE';


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


export const initialiseUniversityScoreList = () => {
  return dispatch => {
       
   fetch(API).then(response => response.json()).then(data => {
      console.log('fetching results');

      var batchColumnValues = data.valueRanges[0].values[0];       
      console.log(batchColumnValues[0]);
      var universities = [];
    
      var parsed_university = null;
      batchColumnValues.map((university) => {
          parsed_university = JSON.parse(university);
            universities.push({
                name:parsed_university.name, 
                rank: parsed_university.teamSeedingScore.overallRank, 
                score:parsed_university.teamSeedingScore.overallScore, 
                hits: parsed_university.teamSeedingScore.overallHits,
                golds: parsed_university.teamSeedingScore.overallXs
            });

      });

      universities = _.sortBy(universities, ['rank']);
      console.log('university score list');
      console.log(universities);

      dispatch(getUniversityScoreList(universities));
    });
  };
};


export const initialiseIndividualScoreList = () => {
  return dispatch => {
       
   fetch(API).then(response => response.json()).then(data => {
    console.log('fetching results');

    var batchColumnValues = data.valueRanges[0].values[0];       
    console.log(batchColumnValues[0]);
    var archers = [];
  
    var parsed_university = null;
    batchColumnValues.map((university) => {
        parsed_university = JSON.parse(university);
        var parsed_university_archers = parsed_university.archers;

        parsed_university_archers.map((archer, index) => {
          archers.push({
            team: parsed_university.name,
            first_name:archer.first_name, 
            surname:archer.surname, 
            rank: archer.seedingScore.overallRank, 
            score:archer.seedingScore.overallScore, 
            hits: archer.seedingScore.Hits,
            golds: archer.seedingScore.numXs
          });
        });
      });
    console.log('unsorted archers');
    console.log(archers);
    archers = _.sortBy(archers, ['rank']);
    console.log('individual score list');
    console.log(archers);

    dispatch(getIndividualScoreList(archers));
    });
  };
};