import React from 'react';
import TargetForm from './TargetForm';
import TargetList from './TargetList';

class EditableTarget extends React.Component {

  state = {
    editFormOpen: false,
  };
  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };
  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };
  handleSubmit = (target) => {
    this.props.editFormSubmit(target);
    this.closeForm();
  }

  render() {


    if (this.state.editFormOpen) {
      return (
        <TargetForm
          universities={this.props.universities}
          id={this.props.id}
          name={this.props.name}
          archers={this.props.archers}
          target={this.props.target}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
          availableTargets={this.props.availableTargets}
        />
      );
    } else {
      return (
        <div>
          <TargetList
            name={this.props.name}
            archers={this.props.archers}
            target={this.props.target}
            onEditClick={this.handleEditClick}
          />
        </div>
      );
    }
  }
}

export default EditableTarget