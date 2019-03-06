import React from 'react';
import { Button } from 'semantic-ui-react';


class TargetList extends React.Component {
    render() {

        const archers = this.props.archers.map((archer) =>
            <div>
                <p>{archer.first_name} {archer.surname} {archer.target}</p>
            </div>
        )

        return (
            <div className='University'>
                <h3>Target {this.props.target.number} ({this.props.target.position})
                <p>{this.props.name}</p></h3>
                {archers}
                <Button onClick={this.props.onEditClick}>Edit</Button>

            </div>
        )
    }
}

export default TargetList