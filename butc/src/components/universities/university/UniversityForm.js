import React from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react';

class UniversityForm extends React.Component {
    state = {
        id: this.props.id || '',
        name: this.props.name || '',
        archers: this.props.archers || [
                        {
                id:"",
                first_name: "",
                surname: "",
                gender: "",
                experience: ""
            },
            {
                id:"",
                first_name: "",
                surname: "",
                gender: "",
                experience: ""
            },
            {
                id:"",
                first_name: "",
                surname: "",
                gender: "",
                experience: ""
            }
        ]
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleFirstNameChange = (event) => {
        const archers = this.state.archers;
        archers[Number(event.target.id)].first_name = event.target.value;
        this.setState({ archers });
    }

    handleSurnameChange = (event) => {
        const archers = this.state.archers;
        archers[Number(event.target.id)].surname = event.target.value;
        this.setState({ archers });
    }

    handleGenderChange = (event, value) => {
        const archers = this.state.archers;
        archers[Number(value.id)].gender = value.value;
        this.setState({ archers });
    }

    handleExperienceChange = (event, value) => {
        const archers = this.state.archers;
        archers[Number(value.id)].experience = value.value;
        this.setState({ archers });
    }

    handleFormSubmit = () => {
        this.props.onFormSubmit({
            id: this.state.id,
            name: this.state.name,
            archers: this.state.archers
        });
    };

    render() {
        const submitText = this.props.name ? "Update" : "Create";
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'M' },
            { key: 'f', text: 'Female', value: 'F' }
        ];
        const experienceOptions = [
            { key: 'E', text: 'Experienced', value: 'E' },
            { key: 'N', text: 'Novice', value: 'N' }
        ];

        return (
            <Form className="UniversityForm">
                <Form.Group >
                    <Input
                        name='name'
                        id='name'
                        placeholder='University Name'
                        value={this.state.name}
                        onChange={this.handleNameChange} 
                    />
                </Form.Group>
                <Form.Group >
                    <div>
                        <Input
                            placeholder='First Name'
                            id='0'
                            name='first_name'
                            value={this.state.archers[0].first_name}
                            onChange={this.handleFirstNameChange}
                        />
                        <Input
                            placeholder='Last Name'
                            id='0'
                            name='surname'
                            value={this.state.archers[0].surname}
                            onChange={this.handleSurnameChange}
                        />
                        <Select
                            options={genderOptions}
                            id='0'
                            name='gender'
                            value={this.state.archers[0].gender}
                            text={this.state.archers[0].gender}
                            placeholder='Gender'
                            onChange={this.handleGenderChange}
                        />
                        <Select
                            options={experienceOptions}
                            id='0'
                            name='experience'
                            value={this.state.archers[0].experience}
                            text={this.state.archers[0].experience}
                            placeholder='Experience'
                            onChange={this.handleExperienceChange}
                        />
                    </div>
                </Form.Group>
                <Form.Group >
                    <div>
                        <Input
                            placeholder='First Name'
                            id='1'
                            name='first_name'
                            value={this.state.archers[1].first_name}
                            onChange={this.handleFirstNameChange}
                        />
                        <Input
                            placeholder='Last Name'
                            id='1'
                            name='surname'
                            value={this.state.archers[1].surname}
                            onChange={this.handleSurnameChange}
                        />
                        <Select
                            options={genderOptions}
                            id='1'
                            name='gender'
                            value={this.state.archers[1].gender}
                            text={this.state.archers[1].gender}
                            placeholder='Gender'
                            onChange={this.handleGenderChange}
                        />
                        <Select
                            options={experienceOptions}
                            id='1'
                            name='experience'
                            value={this.state.archers[1].experience}
                            text={this.state.archers[1].experience}
                            placeholder='Experience'
                            onChange={this.handleExperienceChange}
                        />
                    </div>
                </Form.Group>
                <Form.Group >
                    <div>
                        <Input
                            placeholder='First Name'
                            id='2'
                            name='first_name'
                            value={this.state.archers[2].first_name}
                            onChange={this.handleFirstNameChange}
                        />
                        <Input
                            placeholder='Last Name'
                            id='2'
                            name='surname'
                            value={this.state.archers[2].surname}
                            onChange={this.handleSurnameChange}
                        />
                        <Select
                            options={genderOptions}
                            id='2'
                            name='gender'
                            value={this.state.archers[2].gender}
                            text={this.state.archers[2].gender}
                            placeholder='Gender'
                            onChange={this.handleGenderChange}
                        />
                        <Select
                            options={experienceOptions}
                            id='2'
                            name='experience'
                            value={this.state.archers[2].experience}
                            text={this.state.archers[2].experience}
                            placeholder='Experience'
                            onChange={this.handleExperienceChange}
                        />
                    </div>
                </Form.Group>
                <Form.Group >
                    <Button type='button' onClick={this.handleFormSubmit}>{submitText}</Button>
                    <Button onClick={this.props.onFormClose}>Cancel</Button>
                </Form.Group>
            </Form>
        );
    }
}

export default UniversityForm;