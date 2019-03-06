import React from 'react';
import { Button, Table } from 'semantic-ui-react';

class H2HScore extends React.Component {
    state = {
        round: 'R1'
    }

    componentWillMount() {
        if ((this.props.round === 'R1A') | (this.props.round === 'R1B')) {
            console.log(this.props)
            console.log('setting round to R1')
            this.setState({ round: 'R1' })
        } else {
            console.log('setting round to ' + this.props.round)
            console.log(this.props)
            this.setState({ round: this.props.round })
        }
    }

    render() {

        var ends = this.props.university.h2hScoring[this.state.round].ends.map((end) => (
            <td>{end}</td>
        ))
        var shootOff = this.props.university.h2hScoring[this.state.round].shootOff.map((end) => (
            <td>{end}</td>
        ))
        return (

            <div className='Scores'>
                <h3>{this.props.university.name}</h3>
                <p>
                    <b>Total: </b>{this.props.university.h2hScoring[this.state.round].totalScore}
                </p>
                <p>
                    <Table className='ui celled table'>
                        <tbody>
                            <tr><td><b>Ends:</b></td>{ends}</tr>
                            <tr><td><b>Shoot Off:</b></td>{shootOff}</tr>
                        </tbody>
                    </Table>
                </p>

                <Button onClick={this.props.onEditClick}>Edit</Button>
            </div>
        )
    }
}

export default H2HScore;