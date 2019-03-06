import React from 'react';
import EditableTargetList from './EditableTargetList';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { update_university } from '../../store/actions/actions';
import { postUniversityData, initialiseUniversities } from '../../store/database_logic';

var _ = require('lodash');


class TargetListDashboard extends React.Component {

    state = {
        targets: this.props.targets,
        universities: []
    }


    componentDidMount() {
        this.props.onInitialiseUniversities();
        this.setState({ universities: this.props.universities })
    }


    handleRandomNumberGeneration = () => {
        var array_len = this.props.universities.length
        var new_universities = [...this.props.universities]

        var target_numbers = []

        while (array_len) {
            var i = _.random(0, array_len - 1);

            while (target_numbers.includes(i)) {
                i = _.random(0, array_len);
            }
            target_numbers.push(i)
            array_len = array_len - 1
        };

        for (i = 0; i < new_universities.length; i++) {
            new_universities[i].target = this.state.targets[target_numbers[i]]
        }
        this.setState({ universities: new_universities })

    }


    handleEditFormSubmit = (attrs) => {
        this.props.onUniEdited(attrs)
        this.setState({universities:this.props.universities})
        this.props.onSaveUniversities(this.props)
    };

    render() {
        return (
            <div className='TargetList'>
                <h1>Seeding Round Target List</h1>
                <Button className='ui primary basic button' onClick={this.handleRandomNumberGeneration}>Generate Target Numbers</Button>
                <EditableTargetList
                    universities={this.props.universities}
                    targets={this.props.targets}
                    onFormSubmit={this.handleEditFormSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        universities: state.uni.universities,
        targets: state.uni.targets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUniEdited: (uni) => dispatch(update_university(uni)),
        onInitialiseUniversities: () => dispatch(initialiseUniversities()),
        onSaveUniversities: (universities) => dispatch(postUniversityData(universities))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TargetListDashboard);