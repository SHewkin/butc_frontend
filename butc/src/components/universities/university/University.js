import React from 'react';
import { Button } from 'semantic-ui-react';

class University extends React.Component {
    render() {
        const archers = this.props.archers.map((archer) =>
            <div>
                <p>{archer.first_name} {archer.surname} ({archer.gender} {archer.experience})</p>
            </div>
        )

        return (


            <div className="University">
                <h3>{this.props.name}</h3>
                <p>{archers}</p>
            <Button onClick={this.props.onEditClick}>Edit</Button>
            </div >
        )
    }
}


export default University;