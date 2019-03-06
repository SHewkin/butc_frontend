import React from 'react';
import {Table} from 'semantic-ui-react';


class EditableUniversityList extends React.Component {
  render() {
    const universities = this.props.universities.map((university, index) => 
        <tr >
          
            <Table.Cell>{university.name}</Table.Cell>                    
            <Table.Cell data-label="FirstName">
              {university.archers[0].first_name} <br/>
              {university.archers[1].first_name} <br/>
              {university.archers[2].first_name} <br/>
            </Table.Cell>
            <Table.Cell data-label="LastName">
              {university.archers[0].surname} <br/>
              {university.archers[1].surname} <br/>
              {university.archers[2].surname} <br/>
            </Table.Cell>
            <Table.Cell data-label="Gender">
              {university.archers[0].gender} <br/>
              {university.archers[1].gender} <br/>
              {university.archers[2].gender} <br/>
            </Table.Cell>
            <Table.Cell data-label="Experience">
              {university.archers[0].experience} <br/>
              {university.archers[1].experience} <br/>
              {university.archers[2].experience} <br/>
            </Table.Cell>
        </tr>
    );

    return (
      <div>
        <h1 className='ui center aligned'>Registered Teams</h1>
        <Table className='ui celled table'>
          <Table.Header>
              <Table.HeaderCell>University</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Experience</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {universities}
          </Table.Body>
          </Table>
      </div>
    );
  }
}

export default EditableUniversityList;