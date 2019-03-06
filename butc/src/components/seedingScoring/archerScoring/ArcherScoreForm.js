import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

class ArcherScoreForm extends React.Component {
    state = {
        archer: this.props.archer
    }

    handleArrowChange = (event) => {
        const archer = this.state.archer
        const id = event.target.id.split('.')

        var value = event.target.value
        if (value === 'M' || value === 'm') {
            archer.seedingScore.arrows[id[0]][id[1]] = 'M'
        } else if (value === 'X' || value === 'x') {
            archer.seedingScore.arrows[id[0]][id[1]] = 'X'
        } else {
            archer.seedingScore.arrows[id[0]][id[1]] = Number(value)
        }
        this.setState({ archer })
    }

    handleFormSubmit = () => {
        this.props.onFormSubmit({
            archer: this.state.archer
        });
    };

    render() {
        return (
            <div className='Scores'>
                <Form>
                    <h4>{this.props.archer.first_name} {this.props.archer.surname}</h4>

                    <Form.Group >
                        <b>1: </b>
                        <Input
                            id='1.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[1][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='1.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[1][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='1.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[1][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>2: </b>
                        <Input
                            id='2.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[2][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='2.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[2][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='2.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[2][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>3: </b>
                        <Input
                            id='3.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[3][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='3.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[3][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='3.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[3][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>4: </b>
                        <Input
                            id='4.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[4][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='4.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[4][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='4.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[4][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>5: </b>
                        <Input
                            id='5.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[5][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='5.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[5][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='5.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[5][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>6: </b>
                        <Input
                            id='6.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[6][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='6.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[6][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='6.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[6][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>7: </b>
                        <Input
                            id='7.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[7][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='7.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[7][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='7.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[7][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>8: </b>
                        <Input
                            id='8.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[8][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='8.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[8][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='8.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[8][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>9: </b>
                        <Input
                            id='9.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[9][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='9.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[9][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='9.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[9][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group >
                        <b>10: </b>
                        <Input
                            id='10.0'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[10][0]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='10.1'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[10][1]}
                            onChange={this.handleArrowChange}
                        />
                        <Input
                            id='10.2'
                            name='arrow'
                            value={this.state.archer.seedingScore.arrows[10][2]}
                            onChange={this.handleArrowChange}
                        />
                    </Form.Group>
                    <Form.Group className='ui grid center aligned'>
                        <Button type='button' onClick={this.handleFormSubmit}>Submit</Button>
                        <Button onClick={this.props.onFormClose}>Cancel</Button>
                    </Form.Group>                </Form>
            </div>
        )
    }
}

export default ArcherScoreForm;
