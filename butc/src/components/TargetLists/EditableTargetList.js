import React from 'react';
import {Table, Tab} from 'semantic-ui-react';

class EditableTargetList extends React.Component {
    render() {
        console.log('EditableTargetList');
        console.log(this.props);
        const universities = this.props.universities.map((university, index) => 
            <tr>
                <Table.Cell>{university.target.number} ({university.target.position})</Table.Cell>
                <Table.Cell>{university.name}</Table.Cell>
                <Table.Cell>{university.archers[0].first_name} {university.archers[0].surname}</Table.Cell>
                <Table.Cell>{university.archers[1].first_name} {university.archers[1].surname}</Table.Cell>
                <Table.Cell>{university.archers[2].first_name} {university.archers[2].surname}</Table.Cell>
            </tr>
        );
        return (
            <div>
                <Table>
                    <Table.Header>
                        <Table.HeaderCell>Target</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Table.HeaderCell>Left (A/C)</Table.HeaderCell>
                        <Table.HeaderCell>Middle (B/E)</Table.HeaderCell>
                        <Table.HeaderCell>Right (C/F)</Table.HeaderCell>
                    </Table.Header>

                    <Table.Body>
                        {universities}
                    </Table.Body>
                </Table>
                
            </div>
        );
    }
}

export default EditableTargetList;