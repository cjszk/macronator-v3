import React from 'react';
import { connect } from 'react-redux';
import ChangePassword from './change-password';
import { changeGoal } from '../../actions/auth';

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: null
        }
    }

    changeSelection(selected) {
        this.setState({selected})
    }

    swapGoal(goal) {
        let userInfo = this.props.currentUser;
        let newGoal = 'Maintain';
        if (goal === 'Gain Muscle') {
            newGoal = 'Gain';
        }
        if (goal === 'Lose Fat') {
            newGoal = 'Cut'
        }
        userInfo.goal = newGoal;
        this.props.dispatch(changeGoal(this.props.authToken, userInfo, this.props.currentUser.id))
    }

    swapPassword(password) {

    }

    render() {
        try {
            const component = this;
        // const selectionsArr = ['Change Goals', 'Change Account Password', 'User Connections'];
        const selectionsArr = ['Change Goals', 'Change Account Password'];
        const selections = selectionsArr.map((item) => {
            if (item === this.state.selected) {
                return (
                    <li key={item} onClick={() => {component.changeSelection(item)}} className="settings__options__item">
                        <button className="settings__options__button settings__options__button__selected">{item}</button>
                    </li>
                )
            } else {
                return (
                <li key={item} onClick={() => {component.changeSelection(item)}} className="settings__options__item">
                    <button className="settings__options__button">{item}</button>
                </li>
                )
            }
        })
        let options = (<div><h2>Nothing Selected</h2></div>);
        if (this.state.selected === 'Change Goals') {
            options = (
                <div className="settings__options__change-goals">
                    <h2 className="settings__options__change-goals__header">Change Goals</h2>
                    <select className="settings__options__change-goals__select" onChange={(event) => this.swapGoal(event.target.value)}>   
                        <option hidden={true}></option>
                        <option>Lose Fat</option>
                        <option>Gain Muscle</option>
                        <option>Maintain</option>
                    </select>
                    <p className="settings__options__change-goals__description">Here you can change your goals and Macronator will adjust your recommended daily calorie intake accordingly.</p>
                </div>
            )
        } else if (this.state.selected === 'Change Account Password') {
            options = (
                <div className="settings__options__change-password">
                    <h2 className="settings__options__change-password__header">Change Password</h2>
                    <ChangePassword authToken={this.props.authToken} userId={this.props.currentUser.id}/>
                    <p className="settings__options__change-password__description">Change the password to your account.</p>
                </div>
            )
        } else if (this.state.selected === 'User Connections') {
            options = (
                <div className="settings__options__user-connections">
                    <h2 className="settings__options__user-connections__header">User Connections</h2>
                    {/* Form */}
                    <p className="settings__options__user-connections__description">
                    Here you can connect to other users if you know their username. 
                    You can also accept any invitations from others who are trying to connect to you.
                    Once two users are connected, they may choose whether or not to share their own data.
                    This is particularly useful if you are a trainer or coach with clients or vice versa.
                    </p>
                    <p>This functionality is not yet implemented.</p>
                </div>
            )
        }

        if (!this.state.selected) {
            return (
                <div className="settings">
                    <div className="settings__overlay">
                        <div className="settings__left">
                            <ul className="settings__options">
                                {selections}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="settings">
                    <div className="settings__overlay">
                        <div className="settings__left">
                            <ul className="settings__options">
                                {selections}
                            </ul>
                        </div>
                        <div className="settings__right">
                            {options}
                        </div>
                    </div>
                </div>
            )
        }
        } catch(e) {return (<div></div>)}
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Settings);
