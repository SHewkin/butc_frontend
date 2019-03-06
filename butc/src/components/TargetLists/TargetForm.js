import React from 'react';
import { Button, Form, Select } from 'semantic-ui-react';


const archerMapping = {
    'A': 'D',
    'B': 'E',
    'C': 'F',
    'D': 'A',
    'E': 'B',
    'F': 'C'
}
class TargetForm extends React.Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        archers: this.props.archers,
        target: this.props.target
    }

    handleTargetNumberChange = (event, value) => {
        const target = this.state.target
        target.number = value.value
        this.setState({ target });
    }

    handleTargetPositionChange = (event, value) => {
        const target = this.state.target
        const archers = this.state.archers
        if (target.position !== value.value) {
            console.log('switching archer targets')
            archers[0].target = archerMapping[archers[0].target]
            archers[1].target = archerMapping[archers[1].target]
            archers[2].target = archerMapping[archers[2].target]
            this.setState({ archers })
        }
        target.position = value.value
        this.setState({ target });
    }

    handleArcherTargetChange = (event, value) => {
        const archers = this.state.archers
        const archer_id = Number(value.id)
        archers[archer_id].target = value.value
        this.setState({ archers })
    }

    handleFormSubmit = () => {
        this.props.onFormSubmit({
            id: this.state.id,
            target: this.state.target,
            archers: this.state.archers
        })
    }

    render() {
        // possibly move these two arrays to state? 
        const upperArchers = [
            { key: 'A', text: 'A', value: 'A' },
            { key: 'B', text: 'B', value: 'B' },
            { key: 'C', text: 'C', value: 'C' },
        ]
        const lowerArchers = [
            { key: 'D', text: 'D', value: 'D' },
            { key: 'E', text: 'E', value: 'E' },
            { key: 'F', text: 'F', value: 'F' },
        ]
        var archerTargets = []
        const availableTargets = []
        const targetPositions = []
        this.props.availableTargets.map((target) => {
            if (availableTargets.find(key => key.key === target.number) === undefined) {
                availableTargets.push(
                    { key: target.number, text: target.number, value: target.number })
            }
            if (targetPositions.find(key => key.key === target.position) === undefined) {
                targetPositions.push(
                    { key: target.position, text: target.position, value: target.position }
                )
            }
        })
        if (this.state.target.position === 'top') {
            archerTargets = upperArchers;
        } else {
            archerTargets = lowerArchers;
        }

        return (
            <Form className='University'>
                <h3>{this.props.name}</h3>
                <Form.Group className='ui grid two wide center aligned'>
                    <label>Target Number</label>
                    <Select className='ui dropdown'
                        options={availableTargets}
                        id='target_number'
                        name='target_number'
                        value={this.state.target.number}
                        placeholder='Target Number'
                        onChange={this.handleTargetNumberChange}
                    />
                </Form.Group>
                <Form.Group className='ui grid two wide center aligned'>
                    <label>Target Location</label>
                    <Select className='ui dropdown'
                        options={targetPositions}
                        id='target_position'
                        name='target_position'
                        value={this.state.target.position}
                        placeholder='Target Position'
                        onChange={this.handleTargetPositionChange}
                    />
                </Form.Group>
                <Form.Group className='ui grid two wide center aligned'>
                    <label>
                        {this.state.archers[0].first_name} {this.state.archers[0].surname}
                    </label>
                    <Select
                        options={archerTargets}
                        id='0'
                        name='archer1_target'
                        value={this.state.archers[0].target}
                        placeholder='Archer 1 Target'
                        onChange={this.handleArcherTargetChange}
                    />
                </Form.Group>
                <Form.Group className='ui grid two wide center aligned'>
                    <label>
                        {this.state.archers[1].first_name} {this.state.archers[1].surname}
                    </label>
                    <Select
                        options={archerTargets}
                        id='1'
                        name='archer1_target'
                        value={this.state.archers[1].target}
                        placeholder='Archer 2 Target'
                        onChange={this.handleArcherTargetChange}
                    />
                </Form.Group>
                <Form.Group className='ui grid two wide center aligned'>
                    <label>
                        {this.state.archers[2].first_name} {this.state.archers[2].surname}
                    </label>
                    <Select
                        options={archerTargets}
                        id='2'
                        name='archer1_target'
                        value={this.state.archers[2].target}
                        placeholder='Archer 3 Target'
                        onChange={this.handleArcherTargetChange}
                    />


                </Form.Group>
                <Form.Group className='ui grid center aligned'>
                    <Button type='button' onClick={this.handleFormSubmit}>Submit</Button>
                    <Button onClick={this.props.onFormClose}>Cancel</Button>
                </Form.Group>
            </Form >
        )
    }
}

export default TargetForm