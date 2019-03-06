import React from 'react';
import EditableUniversityList from './university/EditableUniversityList';
import ToggleableUniversityForm from './university/ToggleableUniversityForm';
import { connect } from 'react-redux';
import { add_university, update_university} from '../../store/actions/actions';
import {postUniversityData, initialiseUniversities} from '../../store/database_logic';

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

  handleCreateFormSubmit = (university) => {
    this.createUniversity(university);
  }

  handleEditFormSubmit = (attrs) => {
    console.log('inside handleEditFormSubmit');
    this.props.onUniEdited(attrs);
    this.setState({universities:this.props.universities});
    this.props.onSaveUniversities(this.props);
  };

  createUniversity = (attrs) => {
    this.setState({
      universities: this.state.universities.concat({
        name: attrs.name,
        archers: attrs.archers
      })
    });
  };


  updateUniversity = (attrs) => {
    this.state.universities.map((university, index) => {
      // console.log(university);
      if (university.id === attrs.id) {
        const universities = [...this.state.universities];
        universities[index].name = attrs.name;
        universities[index].archers = attrs.archers;
        return this.setState({ universities });
      } else {
        return university;
      }
    });
  }

  render() {
    return (
      <div className='TargetList'>
        <h1>  Registered Universities</h1>

        <ToggleableUniversityForm
            onFormSubmit={this.props.onUniAdded}
        />
        <p />
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
    onInitialiseUniversities: () => dispatch(initialiseUniversities()),
    onSaveUniversities: (universities) => dispatch(postUniversityData(universities))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversityDashboard);