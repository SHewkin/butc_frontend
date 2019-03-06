import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import logo from '../../assets/BUTC_Logo.svg';
import { NavLink, Switch, Route } from 'react-router-dom';
import UniversityDashboard from '../universities/UniversityDashboard';
import TargetListDashboard from '../TargetLists/TargetListDashboard';
import UniversityScores from '../seedingScoring/scoringViews/universityScores';
import IndividualScores from '../seedingScoring/scoringViews/individualScores';
import SeedingDashboard from '../seedingScoring/seedingDashboard';
import H2HTargets from '../H2H/h2hTargets';
import H2HDashboard from '../H2H/h2hDashboard';

class NavBar extends React.Component {
    state = {
        activeItem: 'home'
    }
    render() {
        const { activeItem } = this.state.activeItem;
        const universityDashboard = () => { return <UniversityDashboard />; };
        const targetDashboard = () => { return <TargetListDashboard />; };
        const universityScores = () => { return <UniversityScores />; };
        const individualScores = () => { return <IndividualScores />; };
        const seedingDashboard = () => { return <SeedingDashboard />; };
        const h2hTargets = () => { return <H2HTargets />; };
        const h2hDashboard = () => { return <H2HDashboard />; };

        return (
            <div>
                <Menu stackable>
                    <Menu.Item>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Menu.Item>
                    <Menu.Item
                        name='registration'
                        active={activeItem === 'Registration'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/registration'
                    />
                    <Menu.Item
                        name='targets'
                        active={activeItem === 'targets'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/targets'
                    />
                    <Dropdown item simple text='Scoring Seeding Round'>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                text='Enter Scores'
                                name='seeding_scoring'
                                active={activeItem === 'seedingScoring'}
                                onClick={this.handleItemClick}
                                as={NavLink}
                                to='/seeding_scoring'
                            />
                            <Dropdown.Item
                                text='University Team Scores'
                                name='universityScores'
                                active={activeItem === 'universityScores'}
                                onClick={this.handleItemClick}
                                as={NavLink}
                                to='/seeding_uni'
                            />
                            <Dropdown.Item
                                text='Individual Scores'
                                name='individualScores'
                                active={activeItem === 'individualScores'}
                                onClick={this.handleItemClick}
                                as={NavLink}
                                to='/seeding_individual'
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item simple text='Head to Head'>
                        <Dropdown.Menu>

                            <Dropdown.Item
                                text='Target List'
                                name='h2h_target_list'
                                active={activeItem === 'h2hTargets'}
                                onClick={this.handleItemClick}
                                as={NavLink}
                                to='/h2h_target_list'
                            />
                            <Dropdown.Item
                                text='Scoring'
                                name='h2h_dashboard'
                                active={activeItem === 'h2hDashboard'}
                                onClick={this.handleItemClick}
                                as={NavLink}
                                to='/h2h_scoring'
                            />
                        </Dropdown.Menu>

                    </Dropdown>
                </Menu>
                <Switch>
                    <Route path='/registration/' component={universityDashboard} />
                    <Route path='/targets/' component={targetDashboard} />
                    <Route path='/seeding_uni/' component={universityScores} />
                    <Route path='/seeding_individual/' component={individualScores} />
                    <Route path='/seeding_scoring/' component={seedingDashboard} />
                    <Route path='/h2h_target_list/' component={h2hTargets} />
                    <Route path='/h2h_scoring/' component={h2hDashboard} />
                </Switch>
            </div>
        );
    }
}

export default NavBar;