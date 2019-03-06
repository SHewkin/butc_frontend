import React from 'react';
import { Table, Button, Form, Input } from 'semantic-ui-react';

class H2HScoreForm extends React.Component {
    state = {
        round: 'R1',
        ends: [],
        shootOff: []
    }

    componentWillMount() {
        if ((this.props.round === 'R1A') | (this.props.round === 'R1B')) {
            console.log('setting round to R1')
            this.setState({
                round: 'R1',
                ends: this.props.university.h2hScoring['R1'].ends,
                shootOff: this.props.university.h2hScoring['R1'].shootOff
            })
        } else {
            console.log('setting round to ' + this.props.round)
            this.setState({
                round: this.props.round,
                ends: this.props.university.h2hScoring[this.props.round].ends,
                shootOff: this.props.university.h2hScoring[this.props.round].shootOff
            })
        }
    }

    handleEndChange = (event) => {
        console.log(event.target)
        var ends = this.state.ends
        ends[event.target.id] = Number(event.target.value)
        this.setState({ends})
    }

    handleShootOffChange = (event) => {
        console.log(event.target)
        var shootOff = this.state.shootOff
        shootOff[event.target.id] = Number(event.target.value)
        this.setState({shootOff})
    }

    handleFormSubmit = () => {
        this.props.onFormSubmit(
            {
            ends: this.state.ends,
            shootOff: this.state.shootOff,
            university: this.props.university,
            round: this.state.round
        });
    };


    render() {
        // modify 

        var ends = this.state.ends.map((end, index) => (
            <td>
                <Input
                    id={index}
                    name='end'
                    value={end}
                    onChange={this.handleEndChange}
                />
            </td>
        ))
        var shootOff = this.state.shootOff.map((end, index) => (
            <td>
                <Input
                    id={index}
                    name='shootOff'
                    value={end}
                    onChange={this.handleShootOffChange}
                />
            </td>))
        return (

            <div className='Scores'>
                <Form>
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

                    <Form.Group className='ui grid center aligned'>
                        <Button type='button' onClick={this.handleFormSubmit}>Submit</Button>
                        <Button onClick={this.props.onFormClose}>Cancel</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default H2HScoreForm;
