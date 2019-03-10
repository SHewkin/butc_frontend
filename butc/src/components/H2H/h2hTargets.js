import React from 'react';

import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {initialiseUniversities} from '../../store/database_logic';

class H2HTarget extends React.Component {
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
        console.log('Changing displayed round to ' + round);
        this.setState({
            current_round: round,
            round_description: this.state.round_mapping[round]
        });
    }

    render() {

        if (this.props.universities === null){
            return(
                <div>
                    <p>Waiting for target lists</p>
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
                                        name: university.name
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
                                        name: university.name
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
                                    name: university.name
                                });
                        }
    
                    } catch (e) {
                        console.log('university ' + university.name + ' not found in round ' + this.state.current_round);
                    }
                }
            });
    
            universities = _.sortBy(universities, ['target']);
    
            const universityTargets = universities.map((university) => 
                <tr>
                    <td data-label='Target'>{university.target}</td>
                    <td data-label='Name'>{university.name}</td>
                </tr>
            );
    
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

export default connect(mapStateToProps, mapDispatchToProps)(H2HTarget);