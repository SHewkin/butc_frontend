import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

class UniversityScores extends React.Component {

    render() {
        const universities = this.props.universities.map((university) => (
            <tr>
                <td data-label='Rank'>{university.teamSeedingScore.overallRank}</td>
                <td data-label='Name'>{university.name}</td>
                <td data-label='Score'>{university.teamSeedingScore.overallScore}</td>
                <td data-label='Hits'>{university.teamSeedingScore.overallHits}</td>
                <td data-label='Golds'>{university.teamSeedingScore.overallXs}</td>
            </tr>
        ));

        return (
            <div className='TargetList'>
                <h1 className='ui center aligned'>Team Rankings</h1>
                <Table className='ui celled table'>
                    <thead>
                        <th>Rank</th>
                        <th>University</th>
                        <th>Score</th>
                        <th>Hits</th>
                        <th>Golds</th>
                    </thead>
                    <tbody>
                        {universities}
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

export default connect(mapStateToProps)(UniversityScores);