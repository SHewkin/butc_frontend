import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { initialiseUniversityScoreList } from '../../../store/database_logic';

class UniversityScores extends React.Component {
      componentDidMount(){
        console.log('inside componentdidmount');
        this.props.onInitialiseUniversities();
      }


    render() {
        if (this.props.universityScoreList === null) {
            return (
                <div>
                    <Table className='ui celled table'>
                    <Table.Header>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Hits</Table.HeaderCell>
                        <Table.HeaderCell>Golds</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <td>Waiting to recieve data</td>
                        </Table.Row>                    
                    </Table.Body>
                </Table>
                </div>
            );
        } else {
        const university_rows = this.props.universityScoreList.map((university) => 
            <tr>
                <td data-label='Rank'>{university.rank}</td>
                <td data-label='Name'>{university.name}</td>
                <td data-label='Score'>{university.score}</td>
                <td data-label='Hits'>{university.hits}</td>
                <td data-label='Golds'>{university.golds}</td>
            </tr>
        );
        return (
            <div className='TargetList'>
                <h1 className='ui center aligned'>Team Rankings</h1>
                <Table className='ui celled table'>
                    <Table.Header>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Hits</Table.HeaderCell>
                        <Table.HeaderCell>Golds</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {university_rows}
                    </Table.Body>
                </Table>
            </div >
        );
    } 
}

}

const mapStateToProps = state => {
    return {
        universityScoreList: state.uni.universityScoreList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialiseUniversities: () => dispatch(initialiseUniversityScoreList())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UniversityScores);