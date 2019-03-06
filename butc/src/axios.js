import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://butc-6dd90.firebaseio.com/'
// });

const instance = axios.create({
    baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/1uTHU3yy3RLIcvU0tstEuXr5xURJkDiVNLY7jfz_MC2s/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1&key=AIzaSyDKAc1oO5QGYnzEWvoNshh7AaH-ncTvyig/'
});

export default instance;