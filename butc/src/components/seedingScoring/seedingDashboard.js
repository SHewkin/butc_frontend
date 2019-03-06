import React from 'react';
import { connect } from 'react-redux';
import { Select } from 'semantic-ui-react';
import EditableArcherScoreList from './archerScoring/EditableArcherScoreList';
import { update_score } from '../../store/actions/actions';
import {initialiseUniversities} from '../../store/database_logic';

class SeedingDashboard extends React.Component {
    state = {
        current_target: 1,
        universities_displayed: []
    }

    componentDidMount() {
        this.props.onInitialiseUniversities();
        this.setState({universities_displayed: this.props.universities});
    }

    handleTargetNumberChange = (event, value) => {
        var current_target = this.state.target;
        current_target = value.value;
        this.setState({ current_target });

        if (current_target === 'All') {
            var universities_displayed = this.props.universities;
        } else {
            var universities_displayed = this.props.universities.filter(university => university.target.number === current_target);
        }
        this.setState({ universities_displayed });
    }

    handleEditFormSubmit = (attrs) => {
        this.props.onScoreEdited(attrs);
        this.props.onSaveUniversities(this.props);
    };

    render() {
        console.log('rendering scoring dashboard');
        console.log(this.props.universities);

        // Assign targets to be shown <- initially show all targets then select which one
        const target_keys = [];
        var found_targets = [];

        target_keys.push({ key: 'All', text: 'All Targets ', value: 'All' });
        this.props.targets.map((target) => {
            var key = { key: target.number, text: 'Target ' + target.number, value: target.number };
            if (!found_targets.includes(target.number)) {
                found_targets.push(target.number);
                target_keys.push(key);
            }
        });

        // create list of components to display
        var editableArcherScores = this.state.universities_displayed.map((university, index) => {
            return <EditableArcherScoreList
                university={university}
                key={index}
                onFormSubmit={this.handleEditFormSubmit}
                   />;
        });


        console.log(editableArcherScores);
        console.log(editableArcherScores.length);

        return (
            <div className='TargetList'>
                <h1>Target Overview </h1>
                {/* Choose target - this will display only that targets worth of archers
                                - potentially change this to a bar of buttons <- might be faster in the competition
                                 */}
                <Select className='ui dropdown'
                    options={target_keys}
                    id='target_number'
                    name='target_number'
                    placeholder='Target Number'
                    onChange={this.handleTargetNumberChange}
                    onFormSubmit={this.props.onScoreEdited}
                />

                <div>
                    {/* if(!editableArcherScores.length === 0) {
                        { editableArcherScores }
                    } else {
                        <p>No universities have been assigned to the selected target</p>
                    } */}

                    {editableArcherScores}


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        universities: state.uni.universities,
        targets: state.uni.targets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onScoreEdited: (uni) => dispatch(update_score(uni)),
        onInitialiseUniversities: () => dispatch(initialiseUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeedingDashboard);