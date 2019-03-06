import React from 'react';

import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class H2HTarget extends React.Component {
    state = {
        current_round: 'R1A',
        round_description: 'Round 1 A',
        universities: undefined,
        round_mapping: {
            R1A: 'Round 1 A',
            R1B: 'Round 1 B',
            R2: 'Round 2',
            QF: 'Quarter Finals',
            SF: 'Semi Finals',
            MB: 'Bronze Medal Match',
            MG: 'Gold Medal Match'
        }
    }


    handleRoundChange = (round) => {
        console.log('Changing displayed round to ' + round)
        this.setState({
            current_round: round,
            round_description: this.state.round_mapping[round]
        })

        const universities = []
        this.props.universities.map((university) => {
            if (this.state.current_round === 'R1A') {
                if (university.h2hScoring.R1.target.round === 'A') {
                    try {
                        universities.push(
                            {
                                target: university.h2hScoring.R1.target.number,
                                name: university.name
                            })
                    } catch (e) {
                        console.log('university ' + university.name + ' not found in round ' + round)
                    }
                }
            } else if (this.state.current_round === 'R1B') {
                if (university.h2hScoring.R1.target.round === 'B') {
                    try {
                        universities.push(
                            {
                                target: university.h2hScoring.R1.target.number,
                                name: university.name
                            })
                    } catch (e) {
                        console.log('university ' + university.name + ' not found in round ' + round)
                    }
                }
            } else {
                try {
                    universities.push(
                        {
                            target: university.h2hScoring[round].target,
                            name: university.name
                        })
                } catch (e) {
                    console.log('university ' + university.name + ' not found in round ' + round)
                }
            }
        })

        console.log('setting state')
        this.setState({ universities })
        console.log(universities)
    }

    componentWillMount() {
        // Automatically sets to round 1A. Would be better if this updated to the current round
        // TODO: When user interface implemented, set this to current round
        console.log('entering componentdidmount')
        if (this.state.universities === undefined) {
            var universities = []
            this.props.universities.map((university, index) => {
                if (this.state.current_round === 'R1A') {
                    if (university.h2hScoring.R1.target.round === 'A') {
                        try {
                            universities.push(
                                {
                                    target: university.h2hScoring.R1.target.number,
                                    name: university.name
                                })
                        } catch (e) { }
                    }
                }
            })
            this.setState({ universities: universities })
        }
    }



    render() {
        const universityTargets = this.state.universities.map((university) => (
            <tr>
                <td data-label='Target'>{university.target}</td>
                <td data-label='Name'>{university.name}</td>
            </tr>
        ));

        return (
            <div className='TargetList'>
                <div>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('R1A')}>Round 1 A</Button>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('R1B')}>Round 1 B</Button>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('R2')}>Round 2</Button>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('QF')}>Quarter Finals</Button>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('SF')}>Semi Finals</Button>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('MB')}>Bronze Medal Match</Button>
                    <Button className='ui primary basic button' onClick={() => this.handleRoundChange('MG')}>Gold Medal Match</Button>
                </div>
                <h1 className='ui center aligned'>Target List for {this.state.round_description}</h1>
                <Table className='ui celled table'>
                    <thead>
                        <th>Target</th>
                        <th>University</th>
                    </thead>
                    <tbody>
                        {universityTargets}
                    </tbody>
                </Table>
            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        universities: state.uni.universities,
    }
}

export default connect(mapStateToProps)(H2HTarget)