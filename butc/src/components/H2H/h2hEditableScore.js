import React from 'react';
import H2HScore from './h2hScore';
import H2HScoreForm from './h2hScoreForm';

class H2HEditableScore extends React.Component {
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

    openForm () {
        this.setState({ editFormOpen: true });
    };

    handleSubmit = (data) => {
        this.props.editFormSubmit(data);
        this.closeForm();
    }
    render() {
        if (this.state.editFormOpen) {
            return (
                <H2HScoreForm
                    university={this.props.university}
                    round={this.props.round}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div>
                    <H2HScore
                        onEditClick={this.handleEditClick}
                        round={this.props.round}
                        university={this.props.university}
                        onFormSubmit={this.props.onScoreEdited}
                    />
                </div>
            );
        }
    }
}

export default H2HEditableScore;