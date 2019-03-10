import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { initialiseIndividualScoreList } from '../../../store/database_logic';

class IndividualScores extends React.Component {
    componentDidMount(){
        console.log('inside componentdidmount');
        this.props.onInitialiseUniversities();
      }

    render() {
        if (this.props.individualScoreList === null) {
            var archers = 'No scores have been submitted yet';
        } else {
            archers = this.props.individualScoreList.map((archer, index) => 
                <tr>
                    <td data-label='Rank'>{archer.rank}</td>
                    <td data-label='Name'>{archer.first_name} {archer.surname}</td>
                    <td data-label='Total'>{archer.score}</td>
                    <td data-label='Hits'>{archer.hits}</td>
                    <td data-label='Golds'>{archer.golds}</td>
                </tr>
            );
        }
        console.log(archers);
        return (
            <div className='TargetList'>
                <h1 className='ui center aligned'>Individual Rankings</h1>
                <Table className='ui celled table'>
                    <Table.Header>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Hits</Table.HeaderCell>
                        <Table.HeaderCell>Golds</Table.HeaderCell>
                    </Table.Header>
                    <tbody>
                        {archers}
                    </tbody>
                </Table>
            </div >
        );
    }
}


const mapStateToProps = state => {
    return {
        individualScoreList: state.uni.individualScoreList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialiseUniversities: () => dispatch(initialiseIndividualScoreList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualScores);