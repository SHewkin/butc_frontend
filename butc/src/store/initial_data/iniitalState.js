import {universities} from './initial_universities_anonymous';

const initialState = {
    activeItem: 'home',
    last_university_id: 2,
    num_targets: 16,
    universities: universities,
    universityScoreList: null,
    individualScoreList: null,
    targets: [
        { number: 1, position: 'top' },
        { number: 1, position: 'bottom' },
        { number: 2, position: 'top' },
        { number: 2, position: 'bottom' },
        { number: 3, position: 'top' },
        { number: 3, position: 'bottom' },
        { number: 4, position: 'top' },
        { number: 4, position: 'bottom' },
        { number: 5, position: 'top' },
        { number: 5, position: 'bottom' },
        { number: 6, position: 'top' },
        { number: 6, position: 'bottom' },
        { number: 7, position: 'top' },
        { number: 7, position: 'bottom' },
        { number: 8, position: 'top' },
        { number: 8, position: 'bottom' },
        { number: 9, position: 'top' },
        { number: 9, position: 'bottom' },
        { number: 10, position: 'top' },
        { number: 10, position: 'bottom' },
        { number: 11, position: 'top' },
        { number: 11, position: 'bottom' },
        { number: 12, position: 'top' },
        { number: 12, position: 'bottom' },
        { number: 13, position: 'top' },
        { number: 13, position: 'bottom' },
        { number: 14, position: 'top' },
        { number: 14, position: 'bottom' },
        { number: 15, position: 'top' },
        { number: 15, position: 'bottom' },
        { number: 16, position: 'top' },
        { number: 16, position: 'bottom' }
    ]
};

export default initialState;