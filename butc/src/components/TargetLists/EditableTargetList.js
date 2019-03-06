import React from 'react';
import EditableTarget from './EditableTarget';

class EditableTargetList extends React.Component {
    render() {
        console.log('EditableTargetList')
        console.log(this.props)
        const universities = this.props.universities.map((university, index) => (
            <EditableTarget
                id={university.id}
                name={university.name}
                archers={university.archers}
                target={university.target}
                key={index}
                availableTargets={this.props.targets}
                editFormSubmit={this.props.onFormSubmit}
            />
        ));
        return (
            <div>
                {universities}
            </div>
        )
    }
}

export default EditableTargetList