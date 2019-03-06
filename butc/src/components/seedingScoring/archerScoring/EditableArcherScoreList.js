import React from 'react';
import EditableArcherScore from './EditableArcherScore';
import { Grid } from 'semantic-ui-react';

class EditableArcherScoreList extends React.Component {
    render() {

        const archers = this.props.university.archers.map((archer, index) => {
            return <Grid.Column>
                <EditableArcherScore
                    key={index}
                    archer={archer}
                    editFormSubmit={this.props.onFormSubmit}
                />
            </Grid.Column>
        });
        return (
            <Grid columns={3} divided>
                <Grid.Row>
                    {archers}
                </Grid.Row>
            </Grid>
        )
    }
}

export default EditableArcherScoreList;