import React from 'react';
import EditableUniversity from './EditableUniversity'


class EditableUniversityList extends React.Component {
  render() {
    const universities = this.props.universities.map((university, index) => (
      <EditableUniversity
        id={university.id}
        name={university.name}
        archers={university.archers}
        createFormSubmit={this.props.handleCreateFormSubmit}
        editFormSubmit={this.props.onFormSubmit}
        key={index}
      />
    ));

    return (
      <div id='University'>
        {universities}
      </div>
    );
  }
}

export default EditableUniversityList