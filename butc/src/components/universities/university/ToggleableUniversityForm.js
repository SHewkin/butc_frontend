import React from 'react';
import UniversityForm from './UniversityForm';
import { Button, Icon } from 'semantic-ui-react';

class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = (attrs) => {
        this.props.onFormSubmit(attrs);
        this.setState({ isOpen: false });
    };

    render() {
        if (this.state.isOpen) {
            return (
                <UniversityForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <Button icon
                        onClick={this.handleFormOpen} >
                        <Icon name='plus' />
                    </Button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm
