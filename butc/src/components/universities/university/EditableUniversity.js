import React from 'react';
import UniversityForm from './UniversityForm';
import University from './University';

class EditableUniversity extends React.Component {

  state = {
    editFormOpen: false,
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (university) => {
    this.props.editFormSubmit(university);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {

      return (
        <UniversityForm
          universities={this.props.universities}
          id={this.props.id}
          name={this.props.name}
          archers={this.props.archers}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div>
          <University
            name={this.props.name}
            archers={this.props.archers}
            onEditClick={this.handleEditClick}
          />
        </div>
      );
    }
  }
}


export default EditableUniversity;