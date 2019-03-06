import React from 'react';
import EditableUniversityList from './university/EditableUniversityList';
import { connect } from 'react-redux';
import { add_university, update_university} from '../../store/actions/actions';
import {initialiseUniversities} from '../../store/database_logic';

class UniversityDashboard extends React.Component {
  state = {
    universities: this.props.universities,
    error: false
  }

  componentDidMount() {
    this.props.onInitialiseUniversities();
    console.log('props');
    console.log(this.props);
  }

  render() {
    return (
      <div className='TargetList'>

        <EditableUniversityList
            universities={this.props.universities}
            onFormSubmit={this.handleEditFormSubmit}
        />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    universities: state.uni.universities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUniAdded: (uni) => dispatch(add_university(uni)),
    onUniEdited: (uni) => dispatch(update_university(uni)),
    onInitialiseUniversities: () => dispatch(initialiseUniversities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversityDashboard);