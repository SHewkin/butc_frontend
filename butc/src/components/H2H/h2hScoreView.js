import React from 'react';

import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {initialiseUniversities} from '../../store/database_logic';

class H2HScoreView extends React.Component {
    state = {
        current_round: 'R1A',
        round_description: 'Round 1 A',
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

    componentDidMount() {
        this.props.onInitialiseUniversities();
    }

    handleRoundChange = (round) => {
        this.setState({
            current_round: round,
            round_description: this.state.round_mapping[round]
        });
    }

    render() {

        if (this.props.universities === null){
            return(
                <div>
                    <p>Waiting for scores</p>
                </div>
            );
            } else {
            var universities = [];
            this.props.universities.map((university) => {
                if (this.state.current_round === 'R1A') {
                    if (university.h2hScoring.R1 !== null ) {
                        if (university.h2hScoring.R1.target.round === 'A') {
                            try {
                                universities.push(
                                    {
                                        target: university.h2hScoring.R1.target.number,
                                        name: university.name,
                                        ends: university.h2hScoring.R1.ends,
                                        shootOff: university.h2hScoring.R1.shootOff
                                    });
                            } catch (e) {
                                console.log('university ' + university.name + ' not found in round ' + this.state.current_round);
                            }
                        }
                    }  
                } else if (this.state.current_round === 'R1B') {
                    if (university.h2hScoring.R1 !== null ) {
                        if (university.h2hScoring.R1.target.round === 'B') {
                            try {
                                universities.push(
                                    {
                                        target: university.h2hScoring.R1.target.number,
                                        name: university.name,
                                        ends: university.h2hScoring.R1.ends,
                                        shootOff: university.h2hScoring.R1.shootOff
                                    });
                            } catch (e) {
                                console.log('university ' + university.name + ' not found in round ' + this.state.current_round);
                            }
                        }
                    }
                } else {
                    try {
                        if(university.h2hScoring[this.state.current_round].target !== null) {
                            universities.push(
                                {
                                    target: university.h2hScoring[this.state.current_round].target,
                                    name: university.name,
                                    ends: university.h2hScoring[this.state.current_round].ends,
                                    shootOff: university.h2hScoring[this.state.current_round].shootOff
                                });
                        }
    
                    } catch (e) {
                        console.log('university ' + university.name + ' not found in round ' + this.state.current_round);
                    }
                }
            });
    
            universities = _.sortBy(universities, ['target']);
    
            const universityTargets = universities.map((university) =>                 
                <Table.Row>
                    <Table.Cell data-label='Target'>{university.target}</Table.Cell>
                    <Table.Cell data-label='Name'>{university.name}</Table.Cell>
                    <Table.Cell data-label='End1'>{university.ends[0]}</Table.Cell>
                    <Table.Cell data-label='End2'>{university.ends[1]}</Table.Cell>
                    <Table.Cell data-label='End3'>{university.ends[2]}</Table.Cell>
                    <Table.Cell data-label='End4'>{university.ends[3]}</Table.Cell>
                    <Table.Cell data-label='ShootOff1'>{university.shootOff[0]}</Table.Cell>
                    <Table.Cell data-label='ShootOff2'>{university.shootOff[1]}</Table.Cell>
                    <Table.Cell data-label='ShootOff3'>{university.shootOff[2]}</Table.Cell>
                    <Table.Cell data-label='ShootOff4'>{university.shootOff[3]}</Table.Cell>
                    <Table.Cell data-label='ShootOff5'>{university.shootOff[4]}</Table.Cell>

                </Table.Row>
            );
    
            console.log(universities);
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
                    <h1 className='ui center aligned'>Head to Head Scores for {this.state.round_description}</h1>
                    <Table className='ui celled table'>
                        <Table.Header>
                            <Table.HeaderCell>Target</Table.HeaderCell>
                            <Table.HeaderCell>University</Table.HeaderCell>
                            <Table.HeaderCell colSpan='4'>Ends</Table.HeaderCell>
                            <Table.HeaderCell colSpan='4'>shootOff</Table.HeaderCell>
                        </Table.Header>
                        <Table.Body>
                            {universityTargets}
                        </Table.Body>
                    </Table>
                </div >
            );
        }

        
    }
}

const mapStateToProps = state => {
    return {
        universities: state.uni.universities
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitialiseUniversities: () => dispatch(initialiseUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(H2HScoreView);