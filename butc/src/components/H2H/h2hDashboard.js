import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import H2HEditableScore from './h2hEditableScore';
import { update_h2h_round } from '../../store/actions/actions';
import { postUniversityData, initialiseUniversities } from '../../store/database_logic';

class H2HDashboard extends React.Component {

    state = {
        current_round: 'R1A',
        scoringUniversities: this.props.universities
    }

    componentDidMount() {
        this.props.onInitialiseUniversities();
        this.setState({universities_displayed: this.props.universities})
    }

    handleEditFormSubmit = (attrs) => {
        this.props.onScoreEdited(attrs)
        this.props.onSaveUniversities(this.state)
    };

    handleRoundChange = (round) => {
        console.log('Changing displayed round to ' + round)
        console.log(this.props)
        this.setState({
            current_round: round,
            scoringUniversities: this.subsetUniversities(round)
        })
        console.log(this.state)
    }

    subsetUniversities(round) {
        const universities = []
        if (round === 'R1A') {
            this.props.universities.map((university) => {
                if (university.h2hScoring.R1.target.round === 'A') {
                    universities.push(university)
                }
            })
        }
        if (round === 'R1B') {
            this.props.universities.map((university) => {
                if (university.h2hScoring.R1.target.round === 'B') {
                    universities.push(university)
                }
            })
        }
        if (!(round === 'R1A' | round === 'R1B')) {
            console.log('round not R1: ' + round)
            this.props.universities.map((university) => {
                if (!university.h2hScoring[round] === undefined) {
                    universities.push(university)
                }
            })
        }
        return universities
    }

    render() {
        var h2hScoreList = this.state.scoringUniversities.map((university, index) => {
            console.log('rending editable score')
            console.log(university)
            return <H2HEditableScore
                university={university}
                key={index}
                round={this.state.current_round}
                editFormSubmit={this.handleEditFormSubmit}
            />
        });

        return (
            <div className='TargetList'>
                <h2>H2H Scoring</h2>
                <div>
                    <div>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('R1A')}>Round 1 A</Button>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('R1B')}>Round 1 B</Button>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('R2')}>Round 2</Button>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('QF')}>Quarter Finals</Button>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('SF')}>Semi Finals</Button>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('MB')}>Bronze Medal Match</Button>
                        <Button className='ui primary basic button' onClick={() => this.handleRoundChange('MG')}>Gold Medal Match</Button>
                    </div>
                    <div>
                        <br /><br />
                    </div>
                    <div>

                        <Grid columns={3} divided={true}>
                            {h2hScoreList}
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        universities: state.uni.universities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onScoreEdited: (uni) => dispatch(update_h2h_round(uni)),
        onInitialiseUniversities: () => dispatch(initialiseUniversities()),
        onSaveUniversities: (universities) => dispatch(postUniversityData(universities))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(H2HDashboard);