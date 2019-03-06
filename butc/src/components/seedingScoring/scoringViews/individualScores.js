import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { isEmpty } from '../../../store/utilities'

class IndividualScores extends React.Component {

    render() {
        var archers = 'No scores have been submitted yet'
        if (!isEmpty(this.props.archerScores)) {
            archers = this.props.archerScores.map((archer, index) => (
                <tr>
                    <td data-label='Rank'>{archer.rank}</td>
                    <td data-label='Name'>{archer.first_name} {archer.surname}</td>
                    <td data-label='Total'>{archer.seedingScore.overallScore}</td>
                    <td data-label='Hits'>{archer.seedingScore.hits}</td>
                    <td data-label='Golds'>{archer.seedingScore.numXs}</td>
                </tr>
            ))
        }

        return (
            <div className='TargetList'>
                <h1 className='ui center aligned'>Individual Rankings</h1>
                <Table className='ui celled table'>
                    <thead>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Hits</th>
                        <th>Golds</th>
                    </thead>
                    <tbody>
                        {archers}
                    </tbody>
                </Table>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        archerScores: state.uni.archerScores
    }
}


export default connect(mapStateToProps)(IndividualScores);