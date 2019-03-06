import React from 'react';
import { Button } from 'semantic-ui-react';

class ArcherScore extends React.Component {
    render() {
        return (
            <div className='Scores'>
                <h4>{this.props.archer.first_name} {this.props.archer.surname}</h4>
                <p>
                    <b>Total: </b>{this.props.archer.seedingScore.overallScore} <b>Hits: </b>{this.props.archer.seedingScore.hits}  <b>Golds: </b>{this.props.archer.seedingScore.numXs}
                </p>
                <p>
                    {/* Map this: for i in 1: num_ends, map arrows as well? */}
                    <b> 1:</b> {this.props.archer.seedingScore.arrows[1][0]}  {this.props.archer.seedingScore.arrows[1][1]}  {this.props.archer.seedingScore.arrows[1][2]} <br/>
                    <b> 2:</b> {this.props.archer.seedingScore.arrows[2][0]}  {this.props.archer.seedingScore.arrows[2][1]}  {this.props.archer.seedingScore.arrows[2][2]} <br/>
                    <b> 3:</b> {this.props.archer.seedingScore.arrows[3][0]}  {this.props.archer.seedingScore.arrows[3][1]}  {this.props.archer.seedingScore.arrows[3][2]} <br/>
                    <b> 4:</b> {this.props.archer.seedingScore.arrows[4][0]}  {this.props.archer.seedingScore.arrows[4][1]}  {this.props.archer.seedingScore.arrows[4][2]} <br/>
                    <b> 5:</b> {this.props.archer.seedingScore.arrows[5][0]}  {this.props.archer.seedingScore.arrows[5][1]}  {this.props.archer.seedingScore.arrows[5][2]} <br/>
                    <b> 6:</b> {this.props.archer.seedingScore.arrows[6][0]}  {this.props.archer.seedingScore.arrows[6][1]}  {this.props.archer.seedingScore.arrows[6][2]} <br/>
                    <b> 7:</b> {this.props.archer.seedingScore.arrows[7][0]}  {this.props.archer.seedingScore.arrows[7][1]}  {this.props.archer.seedingScore.arrows[7][2]} <br/>
                    <b> 8:</b> {this.props.archer.seedingScore.arrows[8][0]}  {this.props.archer.seedingScore.arrows[8][1]}  {this.props.archer.seedingScore.arrows[8][2]} <br/>
                    <b> 9:</b> {this.props.archer.seedingScore.arrows[9][0]}  {this.props.archer.seedingScore.arrows[9][1]}  {this.props.archer.seedingScore.arrows[9][2]} <br/>
                    <b> 10:</b> {this.props.archer.seedingScore.arrows[10][0]}  {this.props.archer.seedingScore.arrows[10][1]}  {this.props.archer.seedingScore.arrows[10][2]} <br/>
                </p>
                <Button onClick={this.props.onEditClick}>Edit</Button>
            </div>
        )
    }
}

export default ArcherScore;