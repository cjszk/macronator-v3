import React from 'react';
import { connect } from 'react-redux';
import { changeGoal } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

class Settings extends React.Component {

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


    render() {
        try {
            if (this.props.currentUser.goal !== 'Not Selected') {
                return <Redirect to='/dashboard' />
            }
            return (
            <div className="settings">
                <div className="settings__overlay">
                    <div className="settings__left">
                        <ul className="settings__options">
                        <div className="settings__options__change-goals">
                            <h2 className="settings__options__change-goals__header">Change Goals</h2>
                            <select className="settings__options__change-goals__select" onChange={(event) => this.swapGoal(event.target.value)}>   
                                <option hidden={true}></option>
                                <option>Lose Fat</option>
                                <option>Gain Muscle</option>
                                <option>Maintain</option>
                            </select>
                            <p className="settings__options__change-goals__description">
                            Select your fitness goals. Whether you are trying to lose fat, gain muscle or just
                            maintain your current shape, Macronator will handle the calculations for you based
                            on your input over time.</p>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
            )
        } catch(e) {return (<div></div>)}
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Settings);
