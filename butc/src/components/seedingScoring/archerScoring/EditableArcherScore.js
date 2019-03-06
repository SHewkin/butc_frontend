import React from 'react';
import ArcherScoreForm from './ArcherScoreForm';
import ArcherScore from './archerScore';

class EditableArcherScore extends React.Component {
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

  handleSubmit = (arrows) => {
    this.props.editFormSubmit(arrows);
    this.closeForm();
  }

  render() {
    if (this.state.editFormOpen) {
      return (
        <ArcherScoreForm
          archer={this.props.archer}
          onFormSubmit = {this.handleSubmit}
          onFormClose = {this.handleFormClose}
        />
      );
    } else {
      return (
        <div>
          <ArcherScore
            archer={this.props.archer}
            onEditClick ={this.handleEditClick}
          />
        </div>
      );
    }
  }
}

export default EditableArcherScore;